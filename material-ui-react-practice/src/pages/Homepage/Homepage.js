import { Typography } from "@mui/material";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Reviews from "../../components/HomepageContent/Reviews/Reviews";
import AuthContext from "../../context/auth-context";
import './Homepage.css';


const Homepage = () =>{
    const authCtx = useContext(AuthContext);
    return(
        <div>
            <div className="homepage-body">
            <div className="initial-content">
            <br></br>
            <Typography 
            variant="h5"
            color={"white"}
            width= "fit-content"
            sx={{ 
                marginTop:"4.2%",
                lineHeight: 2,
                }}>
                Your solution to being the first to get an available seat.<br></br><br></br>1. Log in with Google.<br></br>2. Enter your course.<br></br>3. Be notified of available seats.<br></br><br></br><>Easy as that.</>
            </Typography>
            <NavLink className="callToAction" to={authCtx.isLoggedIn ? '/dashboard' : '/login'}>{authCtx.isLoggedIn ? "Go to Dashboard" : "Secure your seat now"}</NavLink>
            <img className="starter-image" src='https://cdn-icons-png.flaticon.com/512/3492/3492033.png' alt="teacher lecturing student in a desk"></img>
        </div>
        
    </div>
    <Reviews></Reviews>
        </div>
        
    )    
}

export default Homepage;