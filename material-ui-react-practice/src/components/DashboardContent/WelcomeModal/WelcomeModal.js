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
  const handleClose = () => setOpen(false);
  
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
            >Getting Started</Typography>
            <Typography 
            sx={{
              fontSize: {xs: '.9rem',sm:'1rem', md:'1.5rem'},
              fontFamily: "system-ui",
              fontWeight: '600',
              lineHeight: '3',
              textAlign: 'left',
            }}
            >1.Acquire course subject, number, and CRN.<br></br>2.Click Add A Course and add that information.<br></br>3.Be notified by email if a seat in your course opens up.</Typography>
            <ToolInfo sx={{color:"black", fontWeight:700, fontFamily:'system-ui'}} />
            <Button onClick={handleClose} variant="" sx={{color:'orange'}}>Submit</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
    //style={{position:"absolute", bottom:"25px"}}
  );
}
export default WelcomeModal;