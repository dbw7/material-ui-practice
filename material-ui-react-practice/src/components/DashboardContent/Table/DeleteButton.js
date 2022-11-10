import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useContext } from "react";
import DeleteCourseRequest from "./DeleteCourseRequest";
import AuthContext from "../../../context/auth-context";
import getTableData from "./getTableData";

const DeleteButton = (props) => {
    console.log(props.CRN);
    const authCtx = useContext(AuthContext);
    
    const clickHandler = async () => {
        console.log(props.CRN);
        const worked = await DeleteCourseRequest(props.CRN, authCtx.userData.email, authCtx.token);
        if(worked === "Worked"){
        let tableNotUpdated = true;
          while(tableNotUpdated){
            const tableResponse = await getTableData(authCtx.token);
            console.log("107", props.table, tableResponse);
            if(JSON.stringify(props.table) !== JSON.stringify(tableResponse)){
              console.log("107", props.table, tableResponse);
              tableNotUpdated = false;
              props.setTable(tableResponse);
            } else {
              tableNotUpdated = false;
            }
          }
        }
    }
    return (
        <div onClick={clickHandler}>
            <IconButton aria-label="delete" size="large"><DeleteIcon fontSize="inherit" /></IconButton>
        </div>
    )
    
};

export default DeleteButton;