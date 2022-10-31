import { GoogleLoginButton } from "react-social-login-buttons";
import "./Login.css";

const Login = (props) =>{
    return(
        <div className="login">
            <div className="login-button">
                <GoogleLoginButton></GoogleLoginButton>
            </div>
        </div>
    )
}

export default Login;