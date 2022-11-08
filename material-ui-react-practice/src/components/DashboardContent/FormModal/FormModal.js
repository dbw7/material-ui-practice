import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Autocomplete, Button, TextField } from '@mui/material';
import ToolInfo from '../ToolInfo/ToolInfo';
import { subjectsArray } from './subjects';

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
  const handleClose = () => props.setOpen(false);
  const subjectInputRef = React.useRef('');
  const courseNumberInputRef = React.useRef('');
  const crnInputRef = React.useRef('');
  
  const [crsenValid, setCrsenIsValid] = React.useState(true);
  const [crnValid, setCrnIsValid] = React.useState(true);
  const [subjectSelected, setsubjectSelected] = React.useState(true);
  const [buttonClick, setButtonClicked] = React.useState(false);
  
  const formHandler = (event) =>{
    const subjectInput = subjectInputRef.current.value;
    const crseNumInput = courseNumberInputRef.current.value;
    const crnInput = crnInputRef.current.value;
    let subIsValid = false;
    let crseIsValid = false;
    let crnIsValid = false;
    if(subjectInput){
      setsubjectSelected(true);
      subIsValid = true;
    } else {
      setsubjectSelected(false);
      subIsValid = false;
    }
    console.log(subjectInput, crseNumInput, crnInput);
    if(Number(crseNumInput) && crseNumInput.length === 4){
      crseIsValid = true;
    } else {
      crseIsValid = false;
      setCrsenIsValid(false);
    }
    if(Number(crnInput) && crnInput.length === 5){
      crnIsValid = true;
    } else {
      setCrnIsValid(false);
      crnIsValid = false;
    }
    if(subIsValid && crseIsValid && crnIsValid){
      console.log("all good");
    } else {
      console.log("not all good");
    }
  };
  
  React.useEffect(()=>{
    if(buttonClick && subjectSelected && crnValid && crsenValid){
      handleClose();
    } else {
      setButtonClicked(false);
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[subjectSelected, crnValid, crsenValid, buttonClick])
  
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
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={subjectsArray}
            onChange={()=>{setsubjectSelected(true)}} 
            renderInput={(params) => <TextField inputRef={subjectInputRef}  helperText={!subjectSelected && "Please select an option."} error={!subjectSelected} required style={{minWidth:"120px", width:"25%"}} {...params} label="Subject" />}
          />
          <br></br>
          <br></br>
            <TextField
              error={!crsenValid}
              id="outlined-textarea"
              label="Course Number"
              placeholder="Example: 4170"
              multiline
              required
              inputRef={courseNumberInputRef}
              onChange={()=>{setCrsenIsValid(true);}}
              helperText={!crsenValid && "Must be a valid 4 digit course number."}
            />
            <br></br>
            <br></br>
            <TextField
              error={!crnValid}
              id="outlined-textarea"
              label="CRN"
              helperText={!crnValid && "Must be a valid 5 digit CRN."}
              placeholder="Example: 21979"
              multiline
              required
              inputRef={crnInputRef}
              onChange={()=>{setCrnIsValid(true);}}
            />
            <br></br>
            <br></br>
            <Button onClick={()=>{formHandler(); setButtonClicked(true);}} variant="outlined" disabled={!crnValid || !crsenValid || !subjectSelected}>Submit</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
    //style={{position:"absolute", bottom:"25px"}}
  );
}
export default FormModal;