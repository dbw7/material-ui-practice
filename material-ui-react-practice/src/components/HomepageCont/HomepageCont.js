import { Container, Typography } from "@mui/material";
import React from "react";
import Navbar from "../NavBar/Navbar";
import './HomepageCont.css';

const HomepageCont = () =>{
    return(
    <div className="homepage-body">
        <header>
                <Navbar></Navbar> 
            </header>
        <Container maxWidth="lg" sx={{display:"block"}}>
            <div style={{width:"100%"}}>
                <img src='https://cdn-icons-png.flaticon.com/512/3492/3492033.png' style={{float:"right", marginTop:"3%"}}></img>
            </div>
            <br></br>
            <Typography 
            variant="h5"
            color={"white"}
            sx={{ 
                marginTop:"4.2%",
                }}>
                Your Solution to being the first to get an available seat.
            </Typography>
            <Typography 
            variant="h5"
            color={"white"}
            sx={{ 
                marginTop:"4.2%",
                }}>
                Log in with google, enter your course, and be notified when a seat opens up. Easy as that.
            </Typography>
            
        </Container>
    </div>)    
}

export default HomepageCont;