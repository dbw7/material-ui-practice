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
import { Triangle } from 'react-loader-spinner';
import ConfirmModal from '../../components/DashboardContent/ConfirmModal/ConfirmModal';

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
    const [needConfirm, setNeedConfirm] = useState(false);
    const [clickedYes, setClickedYes] = useState(false);
    
    useEffect(()=> {
        getTableData(authCtx.token).then(response => {
            setTable(response);
        }).catch(error =>{
            console.log(error);
        });
    }, [authCtx.token]);
    
    
    return(
        <>
        {needConfirm && <ConfirmModal setClickedYes={setClickedYes} setNeedConfirm={setNeedConfirm}></ConfirmModal>}
        {firstTime && <WelcomeModal></WelcomeModal>}
        <FormModal isLoading={isLoading} setIsLoading={setIsLoading} open={open} setOpen={setOpen} table={table} setTable={setTable}></FormModal>
        <div className='dashboard-main'>
            <div className='data'>
                <ThemeProvider theme={theme}>
                    <StyledButton onClick={handleOpen} variant="contained" float="center" sx={{float:{md: "right"}}}>Add A Course</StyledButton>
                </ThemeProvider>
                <Table clickedYes={clickedYes} setClickedYes={setClickedYes} setNeedConfirm={setNeedConfirm} isLoading={isLoading} setIsLoading={setIsLoading} setTable={setTable} table={table}></Table>
                {isLoading && <Triangle wrapperStyle={{justifyContent:'center'}} height='200' width='200' color='white'></Triangle>}
            </div>
        </div>
        </>
    )
}

export default Dashboard;