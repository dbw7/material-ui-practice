import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


const SwitchLabels = () => {
    return (
      <FormGroup>
        <FormControlLabel control={<Switch defaultChecked={false} />} label="Email" />
        <FormControlLabel disabled control={<Switch />} label="Phone" />
      </FormGroup>
    );
}
  
export default SwitchLabels;