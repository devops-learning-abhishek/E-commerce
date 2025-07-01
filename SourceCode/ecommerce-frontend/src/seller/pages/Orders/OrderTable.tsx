import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAppDispatch, useAppSelector } from '../../../state/Store';
import { useEffect, useState } from 'react';
import { fetchSellerOrders, updateOrderStatus } from '../../../state/seller/sellerOrderSlice';
import { Box, Button, Menu, MenuItem } from '@mui/material';

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

const orderStatus = [
    { color: '#FFA500', label: 'PENDING' },
    { color: '#F5BCBA', label: 'PLACED' },
    { color: '#F5BCBA', label: 'CONFIRMED' },
    { color: '#1E90FF', label: 'SHIPPED' },
    { color: '#32CD32', label: 'DELIVERED' },
    { color: '#FF0000', label: 'CANCELLED' },

];
const orderStatusColor = {
    PENDING: { color: '#FFA500', label: 'PENDING' }, // Orange
    CONFIRMED: { color: '#F5BCBA', label: 'CONFIRMED' },
    PLACED: { color: '#F5BCBA', label: 'PLACED' },
    SHIPPED: { color: '#1E90FF', label: 'SHIPPED' }, // DodgerBlue
    DELIVERED: { color: '#32CD32', label: 'DELIVERED' }, // LimeGreen
    CANCELLED: { color: '#FF0000', label: 'CANCELLED' } // Red
};

export default function OrderTable() {
    const dispatch = useAppDispatch();
    const { sellerOrder } = useAppSelector(store => store)
    const [anchorEl, setAnchorEl] = useState<null | any>({});
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>, orderId: number) => {
        setAnchorEl((prev: any) => ({ ...prev, [orderId]: event.currentTarget }));
    };
    const handleClose = (orderId: number) => () => {
        setAnchorEl((prev: any) => ({ ...prev, [orderId]: null }));
    };

    const handleUpdateOrder = (orderId: number, orderStatus: any) => () => {
        dispatch(updateOrderStatus({
            jwt: localStorage.getItem("jwt") || "",
            orderId,
            orderStatus,
        }));
        handleClose(orderId);
    };

    useEffect(() => {
        dispatch(fetchSellerOrders(localStorage.getItem("jwt") || ""))
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Order Id</StyledTableCell>
                        <StyledTableCell>Products</StyledTableCell>
                        <StyledTableCell>Shipping Address</StyledTableCell>
                        <StyledTableCell align="center">Order Status</StyledTableCell>
                        <StyledTableCell align="right">Update</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sellerOrder.orders.map((item) => (
                        <StyledTableRow key={item.id}>
                            <StyledTableCell component="th" scope="row">
                                {item.id}
                            </StyledTableCell>

                            <StyledTableCell>
                                <div className="flex gap-1 flex-wrap">
                                    {
                                        item.orderItems.map((orderItem) =>
                                            <div className='flex gap-5'>
                                                <img
                                                    className='w-20 rounded-md'
                                                    src={orderItem.product.images[0]}
                                                    alt=""
                                                />
                                                <div className='flex flex-col justify-between py-2'>
                                                    <h1>Title: {orderItem.product.title}</h1>
                                                    <h1>Selling Price: ₹{orderItem.product.sellingPrice}</h1>
                                                    <h1>Color: {orderItem.product.color}</h1>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </StyledTableCell>

                            <StyledTableCell>
                                <div className="flex flex-col gap-y-2">
                                    <h1><strong>{item.shippingAddress.name}</strong></h1>
                                    <h1>{item.shippingAddress.address}, {item.shippingAddress.city}</h1>
                                    <h1>{item.shippingAddress.state} - {item.shippingAddress.pinCode}</h1>
                                    <h1><strong>Mobile:</strong> {item.shippingAddress.mobile}</h1>
                                </div>
                            </StyledTableCell>

                            <StyledTableCell sx={{ color: orderStatusColor[item.orderStatus].color }} align="center">
                                <Box sx={{ borderColor: orderStatusColor[item.orderStatus].color }} className={`border px-2 py-1 rounded-full text-xs`}>
                                    {item.orderStatus}
                                </Box>
                            </StyledTableCell>

                            <StyledTableCell align="right">
                                <Button
                                    // id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={(e) => handleClick(e, item.id)}
                                >
                                    Status
                                </Button>
                                <Menu
                                    id={`status-menu ${item.id}`}
                                    anchorEl={anchorEl[item.id]}
                                    open={Boolean(anchorEl[item.id])}
                                    onClose={handleClose(item.id)}
                                    slotProps={{
                                        list: {
                                            'aria-labelledby': `status-menu ${item.id}`,
                                        },
                                    }}
                                >
                                    {orderStatus.map((status) =>
                                        <MenuItem
                                            key={status.label}
                                            onClick={handleUpdateOrder(item.id, status.label)}>
                                            <span style={{ color: status.color }}>{status.label}</span>
                                        </MenuItem>)
                                    }
                                </Menu>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}