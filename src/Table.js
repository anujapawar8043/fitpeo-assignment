import React from "react";
import "./styles/Table.scss";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Wade Warren", 15478256, "$124.00", "Delivered"),
  createData("Wade Warren", 15478256, "$124.00", "Delivered"),
  createData("Wade Warren", 15478256, "$124.00", "Delivered"),
  createData("Wade Warren", 15478256, "$124.00", "Delivered"),
  createData("Wade Warren", 15478256, "$124.00", "Delivered"),
  createData("Wade Warren", 15478256, "$124.00", "Delivered"),
];

function BasicTable({ title }) {
  return (
    <TableContainer className={"table"}>
      <h3 className="table-title">{title}</h3>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Customer</TableCell>
            <TableCell align="left">Order No.</TableCell>
            <TableCell align="left">Amount</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" className="namerow">
                <img src={"avatar.jpg"} className="avatar" />
                <span className={"avatarname"}>{row.name}</span>
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
              <TableCell align="left">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;
