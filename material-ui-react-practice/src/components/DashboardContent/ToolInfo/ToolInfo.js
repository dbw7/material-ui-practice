import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Img = () => {
    //  Spread the props to the underlying DOM element.
    return (
        <img src="https://cdn.discordapp.com/attachments/522967629380452364/1035956004300525628/unknown.png" alt="where to find the necessary information" width="300px"></img>
    );
};
  
const ToolInfo = (props) => {
    let bgColorx = props.sx ? {backgroundColor:"rgb(148 191 227)"} :  {backgroundColor:"transparent"};
    return(
        <div style={{marginBottom:"30px"}}>
            <Accordion style={bgColorx}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography sx={props.sx}>Where Can I find this info?</Typography>
                </AccordionSummary>
                <AccordionDetails style={{overflow:"auto"}}>
                    <Img></Img>
                </AccordionDetails>
            </Accordion>
        </div>
    )
};

export default ToolInfo;