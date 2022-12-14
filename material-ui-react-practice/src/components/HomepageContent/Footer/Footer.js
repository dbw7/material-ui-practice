import { Typography } from "@mui/material";
import "./Footer.css";
import website from '../../../images/footer/website.png';
import linkedin from '../../../images/footer/linkedin.png';
import github from '../../../images/footer/github.png';
import email from '../../../images/footer/email.png';
import { useNavigate } from "react-router-dom";

const FooterIcon = (props) =>{
    return(
        <div className="footer-item">
            <a className="anchor" href={props.link} target="_blank" rel="noreferrer noopener"><Typography fontFamily={"system-ui"} fontWeight="650">{props.name}</Typography> <img src={props.img} style={{width:"25px"}} alt={props.alt}></img></a>
        </div>
    )
}

const Footer = () => {
    const navigate = useNavigate();
    const personal = () =>{
        navigate('/personal');
    }
    
    return (
        <footer>
            <div className="footer-display">
                <div onClick={personal}><FooterIcon name="Portfolio Website" img={website} alt="personal profile link"></FooterIcon></div>
                <FooterIcon name="Linkedin" link="https://www.linkedin.com/in/dan-bek/" img={linkedin} alt="personal profile link"></FooterIcon>
                <FooterIcon name="Github" link="https://github.com/dbw7" img={github} alt="personal profile link"></FooterIcon>
                <FooterIcon name="Contact Me" link="mailto:dbekhit@villanova.edu" img={email} alt="personal profile link"></FooterIcon>
            </div>
        </footer>
    )
}

export default Footer;