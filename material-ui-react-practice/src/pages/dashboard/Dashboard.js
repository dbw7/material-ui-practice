import { Button, createTheme, ThemeProvider } from '@mui/material';
import Table from '../../components/Table/Table';
import './Dashboard.css';
import { styled } from '@mui/material/styles';

const theme = createTheme({
    breakpoints: {
      values: {
        xxs: [0,500], // small phone
        xs: 500, // phone
        sm: 600, // tablets
        md: 900, // small laptop
        lg: 1200, // desktop
        xl: 1536 // large screens
      }
    }
});
const StyledButton   = styled(Button)(({ theme }) => ({
    '&':{
        
        marginBottom:'10px', 
        fontWeight:"550", 
        backgroundColor:"#F07A3D",
    },
    '&:hover': {backgroundColor: '#71889c'},
    
}));

const Dashboard = () => {
    return(
        <div className='dashboard-main'>
            <div className='data'>
            <ThemeProvider theme={theme}>
                <StyledButton variant="contained" float="center" sx={{float:{md: "right"}}}>Add A Course</StyledButton>
            </ThemeProvider>
            <Table></Table>
            </div>
        </div>
    )
}

export default Dashboard;