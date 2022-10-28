import { Container, Typography } from "@mui/material";
import React from "react";
import './HomepageCont.css';

const HomepageCont = () =>{
    return(
    <div className="homepage-body">
        <Container maxWidth="lg" sx={{display:"block"}}>
            <div style={{width:"100%"}}>
                <img src='https://cdn-icons-png.flaticon.com/512/3492/3492033.png' style={{float:"right", marginTop:"3%"}} alt="teacher lecturing student in a desk"></img>
            </div>
            <br></br>
            <Typography 
            variant="h5"
            color={"white"}
            sx={{ 
                marginTop:"4.2%",
                }}>
                Your solution to being the first to get an available seat.
            </Typography>
            <Typography 
            variant="h5"
            color={"white"}
            sx={{ 
                marginTop:"4.2%",
                lineHeight: 2,
                }}>
                1. Log in with Google.<br></br>2. Enter your course.<br></br>3. Be notified of available seats.<br></br><br></br>Easy as that.
            </Typography>
        </Container>
    </div>)    
}

export default HomepageCont;