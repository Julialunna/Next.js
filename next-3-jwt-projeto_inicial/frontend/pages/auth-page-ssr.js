import nookies from "nookies";
import { tokenService } from "../src/services/auth/tokenService";
import { authService } from "../src/services/auth/auth-service";
import { withSession } from "../src/services/auth/session.js";

function AuthPageSSR(props){
  return(
    <div>
      <h1>
        Auth Page Server Side Render
      </h1>
      <pre>
          {JSON.stringify(props, null, 2)}
        </pre>
    </div>
  )
}
export default AuthPageSSR;

export const getServerSideProps=withSession((ctx)=>{
  return{
    props:{
      session: ctx.req.session,
    }
  }
})

/*export async function getServerSideProps(ctx){
  try {
    const session = await authService.getSession(ctx);
    console.log(ctx)
  
    return {
      props:{
        session,
      }
    }
    
  } catch (error) {
    return{
      redirect:{
        permanente: false, 
        destination: "/?error=401",
      }
    }
  }
}*/

