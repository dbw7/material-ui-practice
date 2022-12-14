import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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
    md: '60vw'
  },
  height: "max-content",
  borderRadius: 1,
  bgcolor: '#c4e8eb',
  boxShadow: 24,
  p: 4,
  textAlign:"center"
};

const WelcomeModal = (props) => {
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  
  const handleClose = () => {
    setOpen(false);
    navigate('/dashboard');
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
            >Thank you for using my site!</Typography>
            <Typography 
            sx={{
              fontSize: {xs: '.9rem',sm:'1rem', md:'1.5rem'},
              fontFamily: "system-ui",
              fontWeight: '600',
              lineHeight: '3',
              textAlign: 'left',
            }}
            >Getting started:<br></br>1. Click add a course to submit your desired course.<br></br>2. Watch your email to see if a seat has become available.</Typography>
            {/* <ToolInfo sx={{color:"black", fontWeight:700, fontFamily:'system-ui'}} /> */}
            <Button onClick={handleClose} variant="contained" sx={{backgroundColor:'#F07A3D', fontWeight:700, fontFamily:'system-ui','&:hover': {backgroundColor: '#af482d'}}}>Begin</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
    //style={{position:"absolute", bottom:"25px"}}
  );
}
export default WelcomeModal;