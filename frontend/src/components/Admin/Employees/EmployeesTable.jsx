import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, TablePagination } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const rows = [
  { id: 1, fname: 'Tewedaj', lname:'Shola',email: "Tewdaj@gmail.com", phone:"090987766", AddedDate:"05-31-2023 | 14:15", active:"Yes"},
  { id: 1, fname: 'Tewedaj', lname:'Shola',email: "Tewdaj@gmail.com", phone:"090987766", AddedDate:"05-31-2023 | 14:15", active:"Yes"},
  { id: 1, fname: 'Tewedaj', lname:'Shola',email: "Tewdaj@gmail.com", phone:"090987766", AddedDate:"05-31-2023 | 14:15", active:"Yes"},
  { id: 1, fname: 'Tewedaj', lname:'Shola',email: "Tewdaj@gmail.com", phone:"090987766", AddedDate:"05-31-2023 | 14:15", active:"Yes"},
  { id: 1, fname: 'Tewedaj', lname:'Shola',email: "Tewdaj@gmail.com", phone:"090987766", AddedDate:"05-31-2023 | 14:15", active:"Yes"},
  { id: 1, fname: 'Tewedaj', lname:'Shola',email: "Tewdaj@gmail.com", phone:"090987766", AddedDate:"05-31-2023 | 14:15", active:"Yes"},
  { id: 1, fname: 'Tewedaj', lname:'Shola',email: "Tewdaj@gmail.com", phone:"090987766", AddedDate:"05-31-2023 | 14:15", active:"Yes"},
  { id: 1, fname: 'Tewedaj', lname:'Shola',email: "Tewdaj@gmail.com", phone:"090987766", AddedDate:"05-31-2023 | 14:15", active:"Yes"},
  // Add more data as needed
];

const columns = [
  { id: 'fname', label: 'First Name', minWidth: 60 },
  { id: 'lname', label: 'Last Name', minWidth: 60 },
  { id: 'email', label: 'Email', minWidth: 60 },
  { id: 'phone', label: 'Phone', minWidth: 60 },
  { id: 'AddedDate', label: 'Added Date', minWidth: 60 },
  { id: 'active', label: 'Active', minWidth: 60 },
  { id: 'actions', label: 'Actions', minWidth: 60 },
];

const EmployeesTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper} sx={{
      marginBottom:'12px'
    }}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id} style={{ minWidth: column.minWidth }}>
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.id}>
              {columns.map((column) => (
                <TableCell key={column.id}>
                  {column.id !== 'actions' ? (
                    row[column.id]
                  ) : (
                    <>
                      <IconButton color="primary">
                        <EditIcon />
                      </IconButton>
                      <IconButton color="secondary">
                        <DeleteIcon />
                      </IconButton>
                    </>
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default EmployeesTable;
