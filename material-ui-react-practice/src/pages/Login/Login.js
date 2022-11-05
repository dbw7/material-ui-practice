import { Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import { GoogleLoginButton } from "react-social-login-buttons";
import AuthContext from "../../context/auth-context";
import "./Login.css";

const Login = (props) =>{
    const loginHandler = () =>{
        window.location = ('http://localhost:5000/auth/login')
    }
    const [failedAuth, setFailedAuth] = useState(false);
    const [error, setError] = useState(false);
    
    const [tokenParams] = useSearchParams();
    
    const authCtx = useContext(AuthContext);
    
    useEffect(() => {
        if(tokenParams.get("failed")){
            setFailedAuth(true);
        }
    }, [tokenParams]);
    
    useEffect(() => {
        let token = tokenParams.get("token");
        if(token){
            fetch('http://localhost:5000/auth/verify', {
                headers:{
                    'Authorization': "Bearer " + token
                }
            }).then(response => {
                console.log(response.status)
                if(response.status === 500 || response.status === 401){
                    <Navigate to='http://localhost:3000/login'></Navigate>
                    setError(true);
                    return
                } 
                setError(false);
                response.json().then(responseJson =>{
                    console.log(responseJson);
                    if(responseJson.email){
                        const token = responseJson.token;
                        const userData = {userId: responseJson.userId, email: responseJson.email, name:responseJson.name, picture: responseJson.picture};
                        authCtx.login(token, userData);
                    }
                })
            }).catch(err =>{
                setError(true);
            })
        }
    }, [tokenParams]);
    
    //console.log(tokenParams.get("token"));
    return(
        <div className="login">
            <div className="login-button">
                <GoogleLoginButton onClick={loginHandler}></GoogleLoginButton>
                {failedAuth && <Typography variant="h6" sx={{width:"50vw", textAlign:"center", position:"absolute", right:"25%", color:"#ffcab1",fontFamily: "system-ui", fontWeight: "500",}}>You are not in the @villanova.edu domain and have not been authorized.<br></br><br></br>If this is an error, contact me using the button below.</Typography>}
                {error && <Typography variant="h6" sx={{width:"50vw", textAlign:"center", position:"absolute", right:"25%", color:"#ffcab1",fontFamily: "system-ui", fontWeight: "500",}}>There has been an error, please try again.<br></br><br></br>If this continues, please contact me using the button below.</Typography>}
            </div>
        </div>
    )
}

export default Login;