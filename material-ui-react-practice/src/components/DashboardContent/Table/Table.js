import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SwitchLabels from '../SwitchButton/SwitchButton';
import { Typography } from '@mui/material';

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
        "buttons": <SwitchLabels></SwitchLabels>
    },
    {
        "course": "CSC 4171",
        "section": "001",
        "name": "Theory of Computation",
        "crn": "32935",
        "availability": "0/28",
        "buttons": <SwitchLabels></SwitchLabels>
    },
    {
        "course": "CSC 4172",
        "section": "001",
        "name": "Theory of Computation",
        "crn": "32935",
        "availability": "0/28",
        "buttons": <SwitchLabels></SwitchLabels>
    },
    {
        "course": "CSC 4173",
        "section": "001",
        "name": "Theory of Computation",
        "crn": "32935",
        "availability": "0/28",
        "buttons": <SwitchLabels></SwitchLabels>
    },
    {
        "course": "CSC 4174",
        "section": "001",
        "name": "Theory of Computation",
        "crn": "32935",
        "availability": "0/28",
        "buttons": <SwitchLabels></SwitchLabels>
    },
    {
        "course": "CSC 4175",
        "section": "001",
        "name": "Theory of Computation",
        "crn": "32935",
        "availability": "0/28",
        "buttons": <SwitchLabels></SwitchLabels>
    }
]

const DashTable = () =>{
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
                        <StyledTableHeaderCell><HeaderTypography>Notify</HeaderTypography></StyledTableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        TableData.map(row => {
                            return (
                            <TableRow key={row.course}>
                                <TableCell align="center"><CellTypography>{row.course}</CellTypography></TableCell>
                                <TableCell align="center"><CellTypography>{row.section}</CellTypography></TableCell>
                                <TableCell align="center"><CellTypography>{row.name}</CellTypography></TableCell>
                                <TableCell align="center"><CellTypography>{row.crn}</CellTypography></TableCell>
                                <TableCell align="center"><CellTypography>{row.availability}</CellTypography></TableCell>
                                <TableCell align="center">{row.buttons}</TableCell>
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