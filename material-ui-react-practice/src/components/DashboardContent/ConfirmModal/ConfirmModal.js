import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Button, Typography } from '@mui/material';
import ToolInfo from '../ToolInfo/ToolInfo';

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
    sm: '65vw',
    md: '25vw'
  },
  height: "max-content",
  borderRadius: 1,
  bgcolor: '#c4e8eb',
  boxShadow: 24,
  p: 4,
  textAlign:"center"
};

const ConfirmModal = (props) => {
    const [open, setOpen] = React.useState(true);
    
    const handleClose = () => {
      setOpen(false);
      props.setNeedConfirm(false);
    };
    
    return (
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography variant='h4' 
              sx={{
                fontFamily: "system-ui",
                fontWeight: '650',
              }}
              >Confirm</Typography>
              <Typography 
              sx={{
                fontSize: {xs: '.9rem',sm:'1rem', md:'1.5rem'},
                fontFamily: "system-ui",
                fontWeight: '600',
                lineHeight: '3',
                textAlign: 'center',
              }}
              >Are you sure you want to stop monitoring this class?</Typography>
              <Button onClick={()=>{handleClose(); props.setClickedYes(true);}} variant="contained" sx={{backgroundColor:'#F07A3D', fontWeight:700, fontFamily:'system-ui','&:hover': {backgroundColor: '#af482d'}}}>Yes</Button>
              <Button onClick={handleClose} variant="contained" sx={{backgroundColor:'#F07A3D', fontWeight:700, fontFamily:'system-ui', marginLeft:"50px", '&:hover': {backgroundColor: '#af482d'}}}>No</Button>
            </Box>
          </Fade>
        </Modal>
      </div>
      //style={{position:"absolute", bottom:"25px"}}
    );
  }
  
  export default ConfirmModal;