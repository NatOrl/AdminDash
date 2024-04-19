import React from 'react'
import { Box, useTheme, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import { mockDataInvoices } from '../../data/mochData';
import { tokens } from '../../theme';
import Header from "../../components/Header";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { 
      field: "id", 
      headerName: "ID", 
      flex: 0.5,
      headerClassName: 'MuiDataGrid-columnHeaders'
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
      headerClassName: 'MuiDataGrid-columnHeaders'
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
      headerClassName: 'MuiDataGrid-columnHeaders'
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      headerClassName: 'MuiDataGrid-columnHeaders'
    },
    {
      field: "cost",
      headerName: "COST",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
      headerClassName: 'MuiDataGrid-columnHeaders'
    },
    {
      field: "date",
      headerName: "DATE",
      flex: 1,
      headerClassName: 'MuiDataGrid-columnHeaders'
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="INVOICES"
        subtitle="List of Invoices"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-columnHeaderTitleContainer": {
            backgroundColor: colors.blueAccent[700]
          }
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataInvoices}
          columns={columns}
        
        />
      </Box>
    </Box>
  );
};

export default Invoices
