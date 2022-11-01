import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const LabelTypography = styled(Typography)(({ theme }) => ({
  '&':{
    color:"white",
    fontFamily: "system-ui",
    fontWeight: "500",
  }
}));
const SwitchLabels = () => {
    return (
      <FormGroup>
        <FormControlLabel control={<Switch defaultChecked={false} />} label={<LabelTypography>Email</LabelTypography>} />
        <FormControlLabel disabled control={<Switch />} label={<LabelTypography>Phone</LabelTypography>} />
      </FormGroup>
    );
}
  
export default SwitchLabels;