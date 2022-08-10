import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ServicesCardQuery } from "../../types";

interface IProps {
  data: ServicesCardQuery | undefined;
  data1: ServicesCardQuery | undefined;
  data2: ServicesCardQuery | undefined;
}

export default function BasicTable({ data, data1, data2 }: IProps) {
  function createData(
    name: string | null | undefined,
    compare1: boolean | string | null | undefined,
    compare2: boolean | string | null | undefined,
    compare3: boolean | string | null | undefined
  ) {
    return { name, compare1, compare2, compare3 };
  }

  const rows = [
    createData(
      "Global Payment",
      data?.servicesCard?.globalPayments ? "Yes" : "No",
      data1?.servicesCard?.globalPayments ? "Yes" : "No",
      data2?.servicesCard?.globalPayments ? "Yes" : "No"
    ),
    createData(
      "Card Protection With 3D Secure Text",
      data?.servicesCard?.cardProtectionWith3DSecureText ? "Yes" : "No",
      data1?.servicesCard?.cardProtectionWith3DSecureText ? "Yes" : "No",
      data2?.servicesCard?.cardProtectionWith3DSecureText ? "Yes" : "No"
    ),
    createData(
      "45 Days Maximum Interest Free",
      data?.servicesCard?.fourtyFiveDaysMaximumInterestFree ? "Yes" : "No",
      data1?.servicesCard?.fourtyFiveDaysMaximumInterestFree ? "Yes" : "No",
      data2?.servicesCard?.fourtyFiveDaysMaximumInterestFree ? "Yes" : "No"
    ),
    createData(
      "Up To 50 Percent Off",
      data?.servicesCard?.upTo50PercentOff ? "Yes" : "No",
      data1?.servicesCard?.upTo50PercentOff ? "Yes" : "No",
      data2?.servicesCard?.upTo50PercentOff ? "Yes" : "No"
    ),
    createData(
      "Installment Plan With Interest Of 1 Percent",
      data?.servicesCard?.installmentPlanWithInterestOf1Percent ? "Yes" : "No",
      data1?.servicesCard?.installmentPlanWithInterestOf1Percent ? "Yes" : "No",
      data2?.servicesCard?.installmentPlanWithInterestOf1Percent ? "Yes" : "No"
    ),
    createData(
      "Withdraw Money Up To 85 Percents",
      data?.servicesCard?.withdrawMoneyUpTo85Percent ? "Yes" : "No",
      data1?.servicesCard?.withdrawMoneyUpTo85Percent ? "Yes" : "No",
      data2?.servicesCard?.withdrawMoneyUpTo85Percent ? "Yes" : "No"
    ),
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center" className="font-bold">
              {data?.servicesCard?.title}
            </TableCell>
            <TableCell align="center" className="font-bold">
              {data1?.servicesCard?.title}
            </TableCell>
            <TableCell align="center" className="font-bold">
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
              <TableCell component="th" scope="row" className="font-semibold">
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
