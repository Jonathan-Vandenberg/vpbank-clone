import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ServicesCardQuery } from "../../../../types";

interface IProps {
  data: ServicesCardQuery | undefined | null;
  data1: ServicesCardQuery | undefined | null;
  data2: ServicesCardQuery | undefined | null;
}

export default function BasicTable({ data, data1, data2 }: IProps) {
  function createData(
    name: string | null | undefined,
    compare1: string | null | undefined,
    compare2: string | null | undefined,
    compare3: string | null | undefined
  ) {
    return { name, compare1, compare2, compare3 };
  }

  const rows = [
    createData(
      "Card Type",
      data?.servicesCard?.cardType,
      data1?.servicesCard?.cardType,
      data2?.servicesCard?.cardType
    ),
    createData(
      "Credit Limit",
      data?.servicesCard?.creditLimit,
      data1?.servicesCard?.creditLimit,
      data2?.servicesCard?.creditLimit
    ),
    createData(
      "Interest Rate",
      data?.servicesCard?.interestRate,
      data1?.servicesCard?.interestRate,
      data2?.servicesCard?.interestRate
    ),
    createData(
      "Transaction Limit",
      data?.servicesCard?.transactionLimit,
      data1?.servicesCard?.transactionLimit,
      data2?.servicesCard?.transactionLimit
    ),
    createData(
      "Annual Fees",
      data?.servicesCard?.annualFees,
      data1?.servicesCard?.annualFees,
      data2?.servicesCard?.annualFees
    ),
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center" className="font-semibold">
              {data?.servicesCard?.title}
            </TableCell>
            <TableCell align="center" className="font-semibold">
              {data1?.servicesCard?.title}
            </TableCell>
            <TableCell align="center" className="font-semibold">
              {data2?.servicesCard?.title}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" className="font-bold">
                {row.name}
              </TableCell>
              <TableCell align="center" className="text-gray-500">
                {row.compare1}
              </TableCell>
              <TableCell align="center" className="text-gray-500">
                {row.compare2}
              </TableCell>
              <TableCell align="center" className="text-gray-500">
                {row.compare3}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
