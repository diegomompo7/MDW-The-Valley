import React from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../App";

const MyAccount = () => {

    const authInfo = React.useContext(AuthContext);

    return (
      <div className="page my-account">
  
        {authInfo && authInfo.user ?
  
          <>
            <h1>MyAccount</h1>
            <p>Bienvenido a tu cuenta {authInfo.user}</p>
          </> :
          <Navigate to="/login" replace={true}></Navigate>
        }
  
      </div>
    );
}

export default MyAccount;