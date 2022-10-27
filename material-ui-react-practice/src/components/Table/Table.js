import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
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
        "course": "CSC 4170",
        "section": "001",
        "name": "Theory of Computation",
        "crn": "32935",
        "availability": "0/28",
        "buttons": <SwitchLabels></SwitchLabels>
    },
    {
        "course": "CSC 4170",
        "section": "001",
        "name": "Theory of Computation",
        "crn": "32935",
        "availability": "0/28",
        "buttons": <SwitchLabels></SwitchLabels>
    }
]

const DashTable = () =>{
    return(
        <TableContainer component={Paper} style={{backgroundColor:"rgb(30 48 64)"/*"#2a4760"*/, borderRadius:"10px"}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center"><HeaderTypography>Course</HeaderTypography></TableCell>
                        <TableCell align="center"><HeaderTypography>Section</HeaderTypography></TableCell >
                        <TableCell align="center"><HeaderTypography>Name</HeaderTypography></TableCell>
                        <TableCell align="center"><HeaderTypography>CRN</HeaderTypography></TableCell>
                        <TableCell align="center"><HeaderTypography>Availability</HeaderTypography></TableCell>
                        <TableCell><HeaderTypography>Notify</HeaderTypography></TableCell>
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
                                <TableCell align="center"><CellTypography>{row.buttons}</CellTypography></TableCell>
                            </TableRow>
                            )
                        })
                    }                 
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default DashTable;