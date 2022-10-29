import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { MenuItem, TextField } from '@mui/material';
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
    sm: '40vw',
    md: '40vw'
  },
  height: {
    xs: '60vh',
    sm: '50vh',
    md: '50vh'
  },
  borderRadius: 1,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const FormModal = (props) => {
  const handleClose = () => props.setOpen(false);
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  
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
          <TextField
            id="outlined-select-currency"
            select
            label="Course Attribute"
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
            <TextField
              id="outlined-textarea"
              label="Course Number"
              placeholder="Example: 4170"
              multiline
              required
            />
            <TextField
              id="outlined-textarea"
              label="CRN"
              placeholder="Example: 21979"
              multiline
              required
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
export default FormModal;