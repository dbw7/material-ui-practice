import './About.css';
import AboutDropDown from "./AboutDropDown";
import { how, how2, how3, what, what2, why, why2 } from "./Paragraphs";


const About = (props) =>{
    return(
        <div className="about">
            <AboutDropDown title = "Why?" text1={why} text2={why2}></AboutDropDown>
            <br></br>
            <AboutDropDown title = "How does it work?" text1={how} text2={how2} text3={how3}></AboutDropDown>
            <br></br>
            <AboutDropDown title = "What did you build the website with?" text1={what} text2={what2}></AboutDropDown>
        </div>
    )
}

export default About;