import { Button, IconButton, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useContext, useState } from "react";
import DeleteCourseRequest from "./DeleteCourseRequest";
import AuthContext from "../../../context/auth-context";
import getTableData from "./getTableData";
import { useSnackbar } from 'notistack';

const DeleteButton = (props) => {
    const authCtx = useContext(AuthContext);
    const [needConfirm, setNeedConfirm] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    
    const confirmHandler = () => {
      setNeedConfirm(true);
    }
    const stopConfirm = () => {
      setNeedConfirm(false);
      //console.log("yur")
    }
    
    const clickHandler = async () => {
      props.setIsLoading(true);
        //console.log(props.CRN);
        const worked = await DeleteCourseRequest(props.CRN, authCtx.userData.email, authCtx.token);
        if(worked === "Expired"){
          props.setNeedRelogin(true);
          props.setTable([]);
        }
        if(worked === "Worked"){
        let tableNotUpdated = true;
          while(tableNotUpdated){
            const tableResponse = await getTableData(authCtx.token);
            if(tableResponse === "Expired"){
              props.setNeedRelogin(true);
              props.setTable([]);
            }
            console.log("31 delete button", props.table, tableResponse);
            if(JSON.stringify(props.table) !== JSON.stringify(tableResponse)){
              //console.log("107", props.table, tableResponse);
              enqueueSnackbar('Successfully removed this course!', {variant:'success'});
              tableNotUpdated = false;
              props.setTable(tableResponse);
              props.setIsLoading(false);
            }
          }
        }
        props.setIsLoading(false);
        setNeedConfirm(false);
    }
    
    return (
        <>
          {!needConfirm ? <IconButton onClick={confirmHandler} aria-label="delete" size="large"><DeleteIcon fontSize="inherit" /></IconButton> : 
          <>
            <Typography color="white" sx={{fontFamily:"system-ui"}}>Are you sure you want to stop monitoring this class?</Typography>
            <Button variant="contained" onClick={clickHandler} sx={{backgroundColor:'#F07A3D', fontWeight:700, fontFamily:'system-ui', margin:"5px", '&:hover': {backgroundColor: '#af482d'}}}>Yes</Button>
            <Button variant="contained" onClick={stopConfirm} sx={{backgroundColor:'#F07A3D', fontWeight:700, fontFamily:'system-ui',  '&:hover': {backgroundColor: '#af482d'}}}>No</Button>
          </>}
        </>
    )
    
};

export default DeleteButton;