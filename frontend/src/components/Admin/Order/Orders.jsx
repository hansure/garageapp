import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
} from '@mui/material';
import { Edit as EditIcon, Visibility as ViewIcon } from '@mui/icons-material';

const orders = [
  { orderId: 1, customer: 'John Doe', vehicle: 'Car', orderDate: '2023-11-25', receivedBy: 'Jane Smith', orderStatus: 'In Progress' },
  { orderId: 2, customer: 'John Doe', vehicle: 'Car', orderDate: '2023-11-25', receivedBy: 'Jane Smith', orderStatus: 'Completed' },
  { orderId: 3, customer: 'John Doe', vehicle: 'Car', orderDate: '2023-11-25', receivedBy: 'Jane Smith', orderStatus: 'Received' },
  { orderId: 4, customer: 'John Doe', vehicle: 'Car', orderDate: '2023-11-25', receivedBy: 'Jane Smith', orderStatus: 'In Progress' },
  { orderId: 5, customer: 'John Doe', vehicle: 'Car', orderDate: '2023-11-25', receivedBy: 'Jane Smith', orderStatus: 'Completed' },
  { orderId: 6, customer: 'John Doe', vehicle: 'Car', orderDate: '2023-11-25', receivedBy: 'Jane Smith', orderStatus: 'Received' },
  // Add more orders as needed
];

const getStatusColor = (status) => {
   switch (status) {
    case 'In Progress':
      return 'secondary'; // Yellow
    case 'Completed':
      return 'primary'; // Light green
    case 'Received':
      return 'info'; // Dark brown
    default:
      console.error(`Unknown status: ${status}`);
      return '#FFFFFF'; // Default color (you can choose any color code here)
  }
};
const OrdersPage = () => {
  const buttonStyle = {
    borderRadius: '20px', // Set the border-radius for rounded corners
    padding: '6px 12px', // Adjust the padding as needed
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order ID</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell>Vehicle</TableCell>
            <TableCell>Order Date</TableCell>
            <TableCell>Received by</TableCell>
            <TableCell>Order Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order, index) => (
            <TableRow key={order.orderId} style={{ backgroundColor: index % 2 === 0 ? '#f2f2f2' : '#ffffff' }}>
              <TableCell>{order.orderId}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.vehicle}</TableCell>
              <TableCell>{order.orderDate}</TableCell>
              <TableCell>{order.receivedBy}</TableCell>
              <TableCell>
                <Button
                  color={getStatusColor(order.orderStatus)}
                  style={buttonStyle}
                >
                  {order.orderStatus}
                </Button>
              </TableCell>
              <TableCell>
                <IconButton aria-label="view">
                  <ViewIcon />
                </IconButton>
                <IconButton aria-label="edit">
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrdersPage;