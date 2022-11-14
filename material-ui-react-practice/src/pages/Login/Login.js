import { Typography } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import { Triangle } from "react-loader-spinner";
import { useNavigate, useSearchParams } from "react-router-dom";
import { GoogleLoginButton } from "react-social-login-buttons";
import AuthContext from "../../context/auth-context";
import "./Login.css";

const Login = (props) =>{
    const [isLoading, setIsLoading] = useState(false);
    
    const loginHandler = () =>{
        setIsLoading(true);
        fetch('http://localhost:5000/auth/test').then(async response =>{
            try {
                const text = await response.text()
                if(text === "Good"){
                    console.log("Good");
                    window.location = ('http://localhost:5000/auth/login')
                }
            } catch (error) {
                console.log(error);
                setError(true);
                setIsLoading(false);
            }
        }).catch(error => {
            console.log(error);
            setError(true);
            setIsLoading(false);
        })
    }
    const [failedAuth, setFailedAuth] = useState(false);
    const [error, setError] = useState(false);
    
    
    const [tokenParams] = useSearchParams();
    
    const authCtx = useRef(useContext(AuthContext));
    const navigate = useRef(useNavigate());
    
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
                    navigate.current('/login');
                    setError(true);
                    setIsLoading(false);
                    return
                } 
                setError(false);
                response.json().then(responseJson =>{
                    let firstTime = tokenParams.get("firsttime");
                    //console.log(firstTime);
                    //console.log(responseJson);
                    if(responseJson.email){
                        const token = responseJson.token;
                        const userData = {userId: responseJson.userId, email: responseJson.email, name:responseJson.name, picture: responseJson.picture};
                        //console.log(userData, "here")
                        authCtx.current.login(token, userData);
                        //navigate.current('/dashboard');
                        if(firstTime){
                            navigate.current('/dashboard?f=true');
                        } else {
                            navigate.current('/dashboard');
                        }
                        setIsLoading(false);
                    }
                })
            }).catch(err =>{
                setError(true);
            })
        }
    }, [tokenParams, authCtx]);
    
    return(
        <div className="login">
            <div className="login-button">
                {!isLoading ? <GoogleLoginButton onClick={loginHandler}></GoogleLoginButton> : <Triangle wrapperStyle={{justifyContent:'center'}} height='200' width='200' color='white'></Triangle>}
                {failedAuth && <Typography variant="h6" sx={{width:"50vw", textAlign:"center", position:"absolute", right:"25%", color:"#ffcab1",fontFamily: "system-ui", fontWeight: "500",}}>You are not in the @villanova.edu domain and have not been authorized.<br></br><br></br>If this is an error, contact me using the button below.</Typography>}
                {error && <Typography variant="h6" sx={{width:"50vw", textAlign:"center", position:"absolute", right:"25%", color:"#ffcab1",fontFamily: "system-ui", fontWeight: "500",}}>There has been an error, please try again.<br></br><br></br>If this continues, please contact me using the button below.</Typography>}
            </div>
        </div>
    )
}

export default Login;