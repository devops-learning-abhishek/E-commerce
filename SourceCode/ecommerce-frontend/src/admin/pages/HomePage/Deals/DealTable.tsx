import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../../../../state/Store';
import { useEffect } from 'react';
import { getAllDeals } from '../../../../state/admin/adminDealSlice';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function DealTable() {
  const dispatch = useAppDispatch();
  const { deal } = useAppSelector(store => store);

  useEffect(() => {
   dispatch(getAllDeals()) 
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>No</StyledTableCell>
            <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell>Category</StyledTableCell>
            <StyledTableCell align="right">Discount</StyledTableCell>
            <StyledTableCell align="right">Update</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {deal.deals.map((item,index) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell component="th" scope="row">
                {index+1}
              </StyledTableCell>
              <StyledTableCell>
                <img className='w-20 rounded-md' src={item.category.image} alt="" />
              </StyledTableCell>
              <StyledTableCell>{item.category.categoryId}</StyledTableCell>
              <StyledTableCell align="right">{item.discount}</StyledTableCell>
              <StyledTableCell align="right">
                <IconButton>
                  <Edit sx={{ color: "#1976d2" }} />
                </IconButton>
              </StyledTableCell>
              <StyledTableCell align="right">
                <IconButton>
                  <Delete sx={{ color: "red" }} />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}