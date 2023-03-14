import React from "react";
import { AuthContext } from "../App";
import { Navigate } from "react-router-dom";


const Login = (props) => {

    const authInfo = React.useContext(AuthContext);

    return (
    <div className="page login">

      {authInfo && authInfo.user ?

        <Navigate to="/my-account" replace={true}></Navigate> :
        <>
          <h1>Login</h1>
          <p>Usuario: {authInfo && authInfo.user ? "Logado" : "No logado"}</p>
          {/* Ejemplo login sencillo, normalmente tendríamos un formulario */}
          <button onClick={() => props.login({ user: "Fran", favorite: null})}>LOG IN</button>
        </>
      }

    </div>
  );
}

export default Login;