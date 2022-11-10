import { Button, createTheme, ThemeProvider } from '@mui/material';
import Table from '../../components/DashboardContent/Table/Table';
import './Dashboard.css';
import { styled } from '@mui/material/styles';
import FormModal from '../../components/DashboardContent/FormModal/FormModal';
import { useContext, useEffect, useState } from 'react';
import WelcomeModal from '../../components/DashboardContent/WelcomeModal/WelcomeModal';
import { useSearchParams } from 'react-router-dom';
import AuthContext from '../../context/auth-context';
import getTableData from '../../components/DashboardContent/Table/getTableData';

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
const StyledButton = styled(Button)(({ theme }) => ({
    '&':{
        marginBottom:'10px', 
        fontWeight:"550", 
        backgroundColor:"#F07A3D",
    },
    '&:hover': {backgroundColor: '#71889c'},
    
}));

const Dashboard = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const [params] = useSearchParams();
    const firstTime = params.get('f');
    const [table, setTable] = useState([]);
    const authCtx = useContext(AuthContext);
    
    useEffect(()=> {
        getTableData(authCtx.token).then(response => {
            setTable(response);
        }).catch(error =>{
            console.log(error);
        });
    }, [authCtx.token]);
    
    
    return(
        <>
        {firstTime && <WelcomeModal></WelcomeModal>}
        <FormModal open={open} setOpen={setOpen} table={table} setTable={setTable}></FormModal>
        <div className='dashboard-main'>
            <div className='data'>
            <ThemeProvider theme={theme}>
                <StyledButton onClick={handleOpen} variant="contained" float="center" sx={{float:{md: "right"}}}>Add A Course</StyledButton>
            </ThemeProvider>
            <Table setTable={setTable} table={table}></Table>
            </div>
        </div>
        </>
    )
}

export default Dashboard;