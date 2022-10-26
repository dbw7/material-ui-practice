import { Typography } from "@mui/material";
import "./Footer.css";

const FooterIcon = (props) =>{
    return(
        <div className="footer-item">
            <a className="anchor" href={props.link}><Typography fontFamily={"system-ui"} fontWeight="650">{props.name}</Typography> <img src={props.img} style={{width:"25px"}} alt={props.alt}></img></a>
            
        </div>
    )
}

const Footer = () => {
    return (
        <footer>
            <div className="footer-display">
                <FooterIcon name="Portfolio Website" link="" img="https://cdn-icons-png.flaticon.com/512/1006/1006771.png" alt="personal profile link"></FooterIcon>
                <FooterIcon name="Linkedin" link="https://www.linkedin.com/in/dan-bek/"img="https://cdn-icons-png.flaticon.com/512/3536/3536569.png" alt="personal profile link"></FooterIcon>
                <FooterIcon name="Github" link="https://github.com/dbw7" img="https://cdn-icons-png.flaticon.com/512/3291/3291695.png" alt="personal profile link"></FooterIcon>
                <FooterIcon name="Contact Me" link="mailto:dbekhit@villanova.edu" img="https://cdn-icons-png.flaticon.com/512/542/542689.png" alt="personal profile link"></FooterIcon>
            </div>
        </footer>
    )
}

export default Footer;