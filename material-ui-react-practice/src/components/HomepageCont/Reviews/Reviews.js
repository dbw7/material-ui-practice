import React from "react";
import "./Reviews.css";
import { Typography } from "@mui/material";
  

const ReviewItem = () => {
  return(
    <div className="item">
        <Typography color="white">
            The best thing since sliced bread!
        </Typography>
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile picture" style={{width:"75px", float:"right"}}></img>
    </div>
  )  
};
const Reviews = () => {
    return (
        <div className="main-body">
            <div className="review-box">
                <ReviewItem></ReviewItem>
                <ReviewItem></ReviewItem>
                <ReviewItem></ReviewItem>
            </div>
        </div>
    )
}

export default Reviews;