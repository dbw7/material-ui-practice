import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Button, MenuItem, TextField } from '@mui/material';
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

const WelcomeModal = (props) => {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
          <ToolInfo />
          <TextField
            id="outlined-select-currency"
            select
            label="Subject"
            value={currency}
            onChange={handleChange}
            // helperText="Course Attribute"
            required
            style={{minWidth:"80px", width:"25%"}}
          >
            {<MenuItem key={"test"} value={"test"}>
              {"test"}
            </MenuItem>}
          </TextField>
          <br></br>
          <br></br>
            <TextField
              id="outlined-textarea"
              label="Course Number"
              placeholder="Example: 4170"
              multiline
              required
            />
            <br></br>
            <br></br>
            <TextField
              id="outlined-textarea"
              label="CRN"
              placeholder="Example: 21979"
              multiline
              required
            />
            <br></br>
            <br></br>
            <Button variant="outlined">Submit</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
    //style={{position:"absolute", bottom:"25px"}}
  );
}
export default WelcomeModal;