import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { GoogleLoginButton } from "react-social-login-buttons";
import "./Login.css";

const Login = (props) =>{
    const loginHandler = () =>{
        window.location = ('http://localhost:5000/auth/login')
    }
    const [failedAuth, setFailedAuth] = useState(false);
    const [tokenParams] = useSearchParams();
    
    useEffect(() => {
        if(tokenParams.get("token") === "failed"){
            setFailedAuth(true);
        }
    }, [tokenParams]);
    
    console.log(tokenParams.get("token"));
    return(
        <div className="login">
            <div className="login-button">
                <GoogleLoginButton onClick={loginHandler}></GoogleLoginButton>
                {failedAuth && <Typography variant="h6" sx={{width:"50vw", textAlign:"center", position:"absolute", right:"25%", color:"#ffcab1",fontFamily: "system-ui", fontWeight: "500",}}>You are not in the @villanova.edu domain and have not been authorized.<br></br><br></br>If this is an error, contact me using the button below.</Typography>}
            </div>
        </div>
    )
}

export default Login;