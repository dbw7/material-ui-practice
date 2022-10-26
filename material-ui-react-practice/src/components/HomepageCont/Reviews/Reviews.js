import React from "react";
import "./Reviews.css";
import { Typography } from "@mui/material";
  

const ReviewItem = (props) => {
  return(
    <div className="item">
        <Typography color="white">
            {props.comment}
        </Typography>
        <p style={{textAlign:"right", color:"white"}}>-{props.name}</p>
        <img src={props.img} alt="profile" style={{width:"75px", float:"right", borderRadius:"50%"}}></img>
    </div>
  )  
};
const Reviews = () => {
    return (
        <div className="main-body">
            <div className="review-box">
                <ReviewItem comment="How did I get here?" img="https://cdn.discordapp.com/attachments/522967629380452364/1034632934319202384/unknown.png" name="Someone's Grandma"></ReviewItem>
                <ReviewItem comment="This site solved my marriage!" img="https://cdn.discordapp.com/attachments/522967629380452364/1034640335416070254/unknown.png" name="John Smith"></ReviewItem>
                
                <ReviewItem comment="I heard the site creator is really smart and attractive!" img="https://cdn-icons-png.flaticon.com/512/3282/3282224.png" name="Definitely not the Developer"></ReviewItem>
            </div>
        </div>
    )
}

export default Reviews;