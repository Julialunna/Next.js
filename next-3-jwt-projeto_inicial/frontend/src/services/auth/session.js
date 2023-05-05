import React from "react";
import { authService } from "./auth-service";
import { useRouter } from "next/router";

export function withSession(funcao){
  return async (ctx)=>{
    try {
      const session = await authService.getSession(ctx);
      const modifiedContext={
        ...ctx, 
        req:{
        ...ctx.req, session
      }
    }
      return funcao(modifiedContext);
    } catch (error) {
      return{
        redirect:{
          permanente: false, 
          destination: "/?error=401",
        }
      }
    }
  }
}

export function useSession(){
  const [ session, setSession]=React.useState(null);
  const [ loading, setLoading]=React.useState(true);
  const [ error, setError]=React.useState(null);

  React.useEffect(()=>{
    authService.getSession()
    .then((userSession)=>{
      setSession(userSession)
      console.log(userSession)
    })
    .catch((error)=>{
      setError(error)
    })
    .finally(()=>{
      setLoading(false);
    });

  }, [])

  return{
    data:{
      session,
    }, 
    error, 
    loading
  }
}

export function withSessionHoc(Component){
  return function Wrapper(props){
    const session=useSession();
    const router=useRouter();
    if (!session.loading&&session.error){
      router.push("/?error=401")
    }
    const modifiedProps={...props, session:session.data.session,}
    return(
      <Component {...modifiedProps}/>
    ) 
  }
}
