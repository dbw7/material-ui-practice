import { Button, createTheme, ThemeProvider, Typography } from '@mui/material';
import Table from '../../components/DashboardContent/Table/Table';
import './Dashboard.css';
import { styled } from '@mui/material/styles';
import FormModal from '../../components/DashboardContent/FormModal/FormModal';
import { useContext, useEffect, useState } from 'react';
import WelcomeModal from '../../components/DashboardContent/WelcomeModal/WelcomeModal';
import { useSearchParams } from 'react-router-dom';
import AuthContext from '../../context/auth-context';
import getTableData from '../../components/DashboardContent/Table/getTableData';
import { Triangle } from 'react-loader-spinner';
import { SnackbarProvider } from 'notistack';

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
    
    const [isLoading, setIsLoading] = useState(false);
    const [clickedYes, setClickedYes] = useState(false);
    
    const [needRelogin, setNeedRelogin] = useState(false);
    
    useEffect(()=> {
        getTableData(authCtx.token).then(response => {
            if(response === "Expired"){
                setNeedRelogin(true);
                setTable([]);
                return;
            } else {
                setTable(response);
            }
        }).catch(error =>{
            console.log(error);
        });
    }, [authCtx.token]);
    
    const reloginHandler = () => {
        setNeedRelogin(false);
        authCtx.logout();
    }
    
    
    return(
        <SnackbarProvider autoHideDuration={6000}>
        {firstTime && <WelcomeModal></WelcomeModal>}
        <FormModal setNeedRelogin={setNeedRelogin} isLoading={isLoading} setIsLoading={setIsLoading} open={open} setOpen={setOpen} table={table} setTable={setTable}></FormModal>
        <div className='dashboard-main'>
            <div className='data'>
                <ThemeProvider theme={theme}>
                    <StyledButton onClick={handleOpen} variant="contained" float="center" sx={{float:{md: "right"}}}>Add A Course</StyledButton>
                </ThemeProvider>
                <Table needRelogin={needRelogin} clickedYes={clickedYes} setNeedRelogin={setNeedRelogin} setClickedYes={setClickedYes} isLoading={isLoading} setIsLoading={setIsLoading} setTable={setTable} table={table}></Table>
                {needRelogin && <><Typography component='a' variant='h4' sx={{fontFamily:"system-ui", fontWeight:"600", color:"#ffeadf"}}>Your login session has expired, please re-login here.</Typography><br></br><Button onClick={reloginHandler} sx={{fontFamily:"system-ui", fontWeight:"700", backgroundColor:"#c72f01"}} size='large' variant='contained'>Re-login</Button></>}
                {isLoading && <Triangle wrapperStyle={{justifyContent:'center'}} height='200' width='200' color='white'></Triangle>}
            </div>
        </div>
        </SnackbarProvider>
    )
}

export default Dashboard;