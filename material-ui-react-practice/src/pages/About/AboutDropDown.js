import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AboutDropDown = (props) => {
    //let bgColorx = {backgroundImage:"linear-gradient(to right top, #476ba1, #426395, #3c5b89, #37537d, #324b71)"};
    let bgColorx = {backgroundColor: "rgb(36 53 68)"};
    return(
        <div style={{marginBottom:"30px"}}>
            <Accordion style={bgColorx}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography variant="h3" sx={{fontFamily:'system-ui', color:"white", fontWeight:"600", margin:'auto'}}>{props.title}</Typography>
                </AccordionSummary>
                <AccordionDetails style={{overflow:"auto"}}>
                <Typography variant="h6" sx={{fontFamily:'system-ui', color:"white", fontWeight:"600"}}>{props.text1}</Typography>
                <br></br>
                <Typography variant="h6" sx={{fontFamily:'system-ui', color:"white", fontWeight:"600"}}>{props.text2}</Typography>
                <br></br>
                <Typography variant="h6" sx={{fontFamily:'system-ui', color:"white", fontWeight:"600"}}>{props.text3}</Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
};

export default AboutDropDown;