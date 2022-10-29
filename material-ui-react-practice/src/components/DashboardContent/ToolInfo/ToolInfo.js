import { Tooltip } from "@mui/material";
import * as React from 'react';

const MyComponent = React.forwardRef(function MyComponent(props, ref) {
    //  Spread the props to the underlying DOM element.
    return (
      <div {...props} ref={ref}>
        Bin
        <img src="https://cdn.discordapp.com/attachments/522967629380452364/1035901219132153937/unknown.png" alt="where to find the necessary information"></img>
      </div>
    );
});
  
const ToolInfo = () => {
    return(
        <Tooltip title="Delete">
            <MyComponent></MyComponent>
        </Tooltip>
    )
};

export default ToolInfo;