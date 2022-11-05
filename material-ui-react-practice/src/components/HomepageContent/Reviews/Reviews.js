import React from "react";
import "./Reviews.css";
import { Typography } from "@mui/material";
import randomGuy from '../../../images/reviews/randomGuy.png'
import grandma from '../../../images/reviews/grandma.png'
import anonymous from '../../../images/reviews/anonymous.png'
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
                <ReviewItem comment="This website fixed my marriage, thank you Nova Snatch!" img={randomGuy} name="John Smith"></ReviewItem>
                <ReviewItem comment="Incredible food, the ribs were a little dry but the service was excellent. 5 stars!" img={grandma} name="Someone's Grandma"></ReviewItem>
                <ReviewItem comment="I heard the site creator is really smart and attractive!" img={anonymous} name="Definitely not the Developer"></ReviewItem>
            </div>
        </div>
    )
}

export default Reviews;