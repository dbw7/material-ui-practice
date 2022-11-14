import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import DeleteButton from './DeleteButton';


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


const DashTable = (props) =>{
  console.log("table 45 ", props.table)
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
                {/* The first check is to see if we need to relogin, if relogin it's false, then we're good */}
                {/* Then we check to see that we're not loading and that props.table is not undefined, if that's all good, we co */}
                <TableBody>
                    {(!props.needRelogin && 
                    (!props.isLoading && props.table !==undefined)) &&
                        props.table.map(element => {
                            return (
                            <TableRow key={element.CRN}>
                                <TableCell align="center"><CellTypography>{element.subjectAndCourseNumber}</CellTypography></TableCell>
                                <TableCell align="center"><CellTypography>{element.section}</CellTypography></TableCell>
                                <TableCell align="center"><CellTypography>{element.courseName}</CellTypography></TableCell>
                                <TableCell align="center"><CellTypography>{element.CRN}</CellTypography></TableCell>
                                <TableCell align="center"><CellTypography color={Number(element.currentStudents) ===  Number( element.maxStudents) && "#f07a3d !important"}>{String(element.currentStudents) + "/" + element.maxStudents}</CellTypography></TableCell>
                                <TableCell align="center"><DeleteButton setNeedRelogin={props.setNeedRelogin} setIsLoading={props.setIsLoading} table={props.table} setTable={props.setTable} CRN={element.CRN}></DeleteButton></TableCell>
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