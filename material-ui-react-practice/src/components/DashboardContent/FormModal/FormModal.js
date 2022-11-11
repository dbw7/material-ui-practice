import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Button } from '@mui/material';
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
    xs: '80vw',
    sm: '75vw',
    md: '45vw'
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
  
  const courseSelectionRef = React.useRef();
  const [courseSelected, setCourseSelected] = React.useState(false);
  
  const [buttonClick, setButtonClicked] = React.useState(false);
  
  React.useEffect(()=>{
    //console.log(courseSelectionRef.current)
    if(buttonClick && courseSelected){
      setCourseSelected(false);
      handleClose();
      let courseInfo = courseSelectionRef.current;
      //console.log(courseInfo);
      props.setIsLoading(true);
      let courseIsFound;
      SubmitCourseRequest(courseInfo, email, token).then(async response => {
        let tableNotUpdated = true;
        console.log("submit course response", response);
        let parsedResponse = response.split(' ');
        if(parsedResponse[0] === "Found"){
          courseIsFound = true;
        }
        
        if(!JSON.stringify(props.table).includes(parsedResponse[1])){
          if(courseIsFound){
            while(tableNotUpdated){
              const tableResponse = await getTableData(token);
              console.log("64", props.table, tableResponse);
              if(JSON.stringify(props.table) !== JSON.stringify(tableResponse)){
                console.log("66", props.table, tableResponse);
                tableNotUpdated = false;
                props.setTable(tableResponse);
                props.setIsLoading(false);
              }
            }
          } else {
            props.setIsLoading(false);
            //add here that nothing was found
          }
        } else {
          props.setIsLoading(false);
          console.log("We already have this");
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
        aria-labelledby="backdrop-modal"
        aria-describedby="backdrop-modal"
        open={props.open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        
        <Fade in={props.open}>
          <Box sx={style}>
            <ToolInfo />
            <br></br>
            <br></br>
            <VirtualizeACBox courseSelected={courseSelected} setCourseSelected={setCourseSelected} courseSelectionRef={courseSelectionRef}></VirtualizeACBox>
            <br></br>
            <br></br>
            <Button onClick={()=>{setButtonClicked(true);}} variant="outlined" disabled={!courseSelected}>Submit</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
export default FormModal;