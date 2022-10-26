import { Container, Typography } from "@mui/material";
import React from "react";
import Reviews from "../Reviews/Reviews";
import './TestHP.css';

const HomepageCont = () =>{
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
                Your solution to being the first to get an available seat.<br></br><br></br>1. Log in with Google.<br></br>2. Enter your course.<br></br>3. Be notified of available seats.<br></br><br></br>Easy as that.
            </Typography>
            <button className="callToAction button_slide slide_righ">
                Secure your seat now
            </button>
            {/* <Typography 
            variant="h5"
            color={"white"}
            sx={{ 
                marginTop:"4.2%",
                lineHeight: 2,
                }}>
                1. Log in with Google.<br></br>2. Enter your course.<br></br>3. Be notified of available seats.<br></br><br></br>Easy as that.
            </Typography> */}
            <img className="starter-image" src='https://cdn-icons-png.flaticon.com/512/3492/3492033.png' style={{}} alt="teacher lecturing student in a desk"></img>
            <div /*style={{width:"100%"}}*/>
                
            </div>
        </div>
        
    </div>
    <Reviews></Reviews>
        </div>
        
    )    
}

export default HomepageCont;