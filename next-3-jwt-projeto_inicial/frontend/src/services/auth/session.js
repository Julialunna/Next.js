import { authService } from "./auth-service";

export function withSession(funcao){
  return async (ctx)=>{
    try {
      const session = await authService.getSession(ctx);
      const modifiedContext={
        ...ctx, 
        req:{
        ...ctx.req, session:{
          name:'Nome do usuário'
        }
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
