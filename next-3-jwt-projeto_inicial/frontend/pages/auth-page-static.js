import React from "react";

import { withSessionHoc } from "../src/services/auth/session";




function AuthPageStatic(props){

  return(
    <div>
      <h1>
        Auth Page Static
      </h1>
      <pre>
          {JSON.stringify(props, null, 2)}
        </pre>
    </div>
  )
}

export default withSessionHoc(AuthPageStatic);
