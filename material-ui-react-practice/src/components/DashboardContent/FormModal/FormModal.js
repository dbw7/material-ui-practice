import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Button, TextField } from '@mui/material';
import ToolInfo from '../ToolInfo/ToolInfo';
import SubmitCourseRequest from './SubmitCourseRequest';
import AuthContext from '../../../context/auth-context';
import getTableData from '../Table/getTableData';
import VirtualizeACBox from './VirtualizeACBox';

const style = {
  position: 'absolute',
  top: {
    xs: '45%',
    sm: '40%',
    md: '40%'
  },
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    xs: '65vw',
    sm: '45vw',
    md: '25vw'
  },
  height: "max-content",
  borderRadius: 1,
  bgcolor: '#d4e2e4',
  boxShadow: 24,
  p: 4,
  textAlign:"center"
};

const FormModal = (props) => {
  const authCtx = React.useContext(AuthContext);
  const token = authCtx.token;
  const email = authCtx.userData.email;
  const handleClose = () => props.setOpen(false);
  const courseSelectionRef = React.useRef({});
  
  const [courseSelected, setCourseSelected] = React.useState(false);
  const [buttonClick, setButtonClicked] = React.useState(false);
  
  
  
  const formHandler = (event) =>{
    const courseSelection = courseSelectionRef.current.value;
    console.log(courseSelectionRef.current.value)
    let subIsValid = false;
    if(courseSelection){
      setCourseSelected(true);
      subIsValid = true;
    } else {
      setCourseSelected(false);
      subIsValid = false;
    }
    
  };
  
  React.useEffect(()=>{
    console.log(courseSelectionRef.current)
    if(buttonClick && courseSelected){
      handleClose();
      let courseInfo = {
        // subject: subjectInput,
        // courseNumber: crseNumInput,
        // CRN: crnInput,
      }
      //console.log(courseInfo);
      props.setIsLoading(true);
      let courseIsFound;
      SubmitCourseRequest(courseInfo, email, token).then(async response => {
        let tableNotUpdated = true;
        console.log("submit course response", response);
        if(response === "Found"){
          courseIsFound = true;
        }
        if(courseIsFound){
          while(tableNotUpdated){
            const tableResponse = await getTableData(token);
            console.log("107", props.table, tableResponse);
            if(JSON.stringify(props.table) !== JSON.stringify(tableResponse)){
              console.log("107", props.table, tableResponse);
              tableNotUpdated = false;
              props.setTable(tableResponse);
              props.setIsLoading(false);
            } else {
              props.setIsLoading(false);
              tableNotUpdated = false;
            }
          }
        } else {
          props.setIsLoading(false);
          //add here that nothing was found
        }
         
      });
      setButtonClicked(false);
      getTableData(token);
    } else {
      setButtonClicked(false);
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[buttonClick, courseSelected, courseSelectionRef])
  
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <Box sx={style}>
          <ToolInfo />
          {/* <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={courseArray}
            onChange={()=>{setsubjectSelected(true)}} 
            renderInput={(params) => <TextField inputRef={subjectInputRef}  helperText={!subjectSelected && "Please select an option."} error={!subjectSelected} required style={{minWidth:"140px", width:"95%"}} {...params} label="Subject" />}
          /> */}
          <VirtualizeACBox courseSelectionRef={courseSelectionRef}></VirtualizeACBox>
          <br></br>
          <br></br>
            <br></br>
            <br></br>
            <Button onClick={()=>{formHandler(); setButtonClicked(true);}} variant="outlined" /*disabled={courseSelected}*/>Submit</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
    //style={{position:"absolute", bottom:"25px"}}
  );
}
export default FormModal;