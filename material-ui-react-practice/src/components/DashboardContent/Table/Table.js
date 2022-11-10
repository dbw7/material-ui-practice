import React, { useContext, useEffect, useRef, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SwitchLabels from '../SwitchButton/SwitchButton';
import { IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AuthContext from '../../../context/auth-context';
import getTableData from './getTableData';

const HeaderTypography = styled(Typography)(({ theme }) => ({
  '&':{
    color:"white",
    fontWeight: "700",
    fontFamily: "system-ui"
  }
}));
const CellTypography = styled(Typography)(({ theme }) => ({
    '&':{
      color:"white",
      fontFamily: "system-ui",
      fontWeight: "500",
    }
  }));
  
const StyledTableHeaderCell = styled(TableCell)(({ theme }) => ({
    '&':{
      backgroundColor: "#3e6181"
    }
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
    '&':{
      backgroundColor: "rgb(30 48 64)",/*"#2a4760"*/
      maxHeight:"45vh"
    },
    
}));
const TableData = [
    {
        "course": "CSC 4170",
        "section": "001",
        "name": "Theory of Computation",
        "crn": "32935",
        "availability": "0/28",
        "buttons": <IconButton aria-label="delete" size="large"><DeleteIcon fontSize="inherit" /></IconButton>
    },
    {
        "course": "CSC 4171",
        "section": "001",
        "name": "Theory of Computation",
        "crn": "32935",
        "availability": "0/28",
        "buttons": <IconButton aria-label="delete" size="large"><DeleteIcon fontSize="inherit" /></IconButton>
    },
    {
        "course": "CSC 4172",
        "section": "001",
        "name": "Theory of Computation",
        "crn": "32935",
        "availability": "0/28",
        "buttons": <IconButton aria-label="delete" size="large"><DeleteIcon fontSize="inherit" /></IconButton>
    },
    {
        "course": "CSC 4173",
        "section": "001",
        "name": "Theory of Computation",
        "crn": "32935",
        "availability": "0/28",
        "buttons": <IconButton aria-label="delete" size="large"><DeleteIcon fontSize="inherit" /></IconButton>
    },
    {
        "course": "CSC 4174",
        "section": "001",
        "name": "Theory of Computation",
        "crn": "32935",
        "availability": "0/28",
        "buttons": <IconButton aria-label="delete" size="large"><DeleteIcon fontSize="inherit" /></IconButton>
    },
    {
        "course": "CSC 4175",
        "section": "001",
        "name": "Theory of Computation",
        "crn": "32935",
        "availability": "0/28",
        "buttons": <IconButton aria-label="delete" size="large"><DeleteIcon fontSize="inherit" /></IconButton>
    }
]

const DashTable = () =>{
    //const table = useRef([]);
    const [tableState, setTableState] = useState([]);
    const [hover, setHover] = useState(false);
    
    console.log("tablestate", tableState);
    const authCtx = useContext(AuthContext);
    const token = authCtx.token;
    
    useEffect(()=>{
        const gettingTable = async () => {
            try {
                const tableData = await getTableData(token);
                if(tableData !== tableState){
                    setTableState(tableData);
                }
                
            } catch (error) {
                console.log(error);
            }
        }
        gettingTable().catch(error =>{
            console.log(error);
        });
        //console.log("table here", table);
    }, [hover]);
    
    return(
        <StyledTableContainer sx={{
            "&::-webkit-scrollbar": {
              width: "7px",
              height: "7px"
            },
            "&::-webkit-scrollbar-track": {
                background: "#19252B" /*rgb(25, 37, 43)*/
            },
            "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#4E5D88" /*rgb(78, 93, 136)*/,
            }
          }} component={Paper}>
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <StyledTableHeaderCell align="center"><HeaderTypography>Course</HeaderTypography></StyledTableHeaderCell>
                        <StyledTableHeaderCell align="center"><HeaderTypography>Section</HeaderTypography></StyledTableHeaderCell>
                        <StyledTableHeaderCell align="center"><HeaderTypography>Name</HeaderTypography></StyledTableHeaderCell>
                        <StyledTableHeaderCell align="center"><HeaderTypography>CRN</HeaderTypography></StyledTableHeaderCell>
                        <StyledTableHeaderCell align="center"><HeaderTypography>Availability</HeaderTypography></StyledTableHeaderCell>
                        <StyledTableHeaderCell></StyledTableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        tableState.map(element => {
                            return (
                            <TableRow key={element.CRN}>
                                <TableCell align="center"><CellTypography>{element.subjectAndCourseNumber}</CellTypography></TableCell>
                                <TableCell align="center"><CellTypography>{element.section}</CellTypography></TableCell>
                                <TableCell align="center"><CellTypography>{element.courseName}</CellTypography></TableCell>
                                <TableCell align="center"><CellTypography>{element.CRN}</CellTypography></TableCell>
                                <TableCell align="center"><CellTypography>{element.currentStudents.includes("FULL") ? element.currentStudents : element.currentStudents + "/" + element.maxStudents}</CellTypography></TableCell>
                                <TableCell align="center">{element.buttons}</TableCell>
                            </TableRow>
                            )
                        })
                    }                 
                </TableBody>
            </Table>
        </StyledTableContainer>
    )
}

export default DashTable;