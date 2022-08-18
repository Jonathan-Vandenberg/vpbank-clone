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
    compare1: boolean | string | null | undefined,
    compare2: boolean | string | null | undefined,
    compare3: boolean | string | null | undefined
  ) {
    return { name, compare1, compare2, compare3 };
  }

  const rows = [
    createData(
      "Global Payment",
      data ? (data?.servicesCard?.globalPayments ? "Yes" : "No") : null,
      data1 ? (data?.servicesCard?.globalPayments ? "Yes" : "No") : null,
      data2 ? (data?.servicesCard?.globalPayments ? "Yes" : "No") : null
    ),
    createData(
      "Card Protection With 3D Secure Text",
      data
        ? data?.servicesCard?.cardProtectionWith3DSecureText
          ? "Yes"
          : "No"
        : null,
      data1
        ? data?.servicesCard?.cardProtectionWith3DSecureText
          ? "Yes"
          : "No"
        : null,
      data2
        ? data?.servicesCard?.cardProtectionWith3DSecureText
          ? "Yes"
          : "No"
        : null
    ),
    createData(
      "45 Days Maximum Interest Free",
      data
        ? data?.servicesCard?.fourtyFiveDaysMaximumInterestFree
          ? "Yes"
          : "No"
        : null,
      data1
        ? data?.servicesCard?.fourtyFiveDaysMaximumInterestFree
          ? "Yes"
          : "No"
        : null,
      data2
        ? data?.servicesCard?.fourtyFiveDaysMaximumInterestFree
          ? "Yes"
          : "No"
        : null
    ),
    createData(
      "Up To 50 Percent Off",
      data ? (data?.servicesCard?.upTo50PercentOff ? "Yes" : "No") : null,
      data1 ? (data?.servicesCard?.upTo50PercentOff ? "Yes" : "No") : null,
      data2 ? (data?.servicesCard?.upTo50PercentOff ? "Yes" : "No") : null
    ),
    createData(
      "Installment Plan With Interest Of 1 Percent",
      data
        ? data?.servicesCard?.installmentPlanWithInterestOf1Percent
          ? "Yes"
          : "No"
        : null,
      data1
        ? data1?.servicesCard?.installmentPlanWithInterestOf1Percent
          ? "Yes"
          : "No"
        : null,
      data2
        ? data2?.servicesCard?.installmentPlanWithInterestOf1Percent
          ? "Yes"
          : "No"
        : null
    ),
    createData(
      "Withdraw Money Up To 85 Percents",
      data
        ? data?.servicesCard?.withdrawMoneyUpTo85Percent
          ? "Yes"
          : "No"
        : null,
      data1
        ? data1?.servicesCard?.withdrawMoneyUpTo85Percent
          ? "Yes"
          : "No"
        : null,
      data2
        ? data2?.servicesCard?.withdrawMoneyUpTo85Percent
          ? "Yes"
          : "No"
        : null
    ),
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center">
              <p className="font-semibold">{data?.servicesCard?.title}</p>
            </TableCell>
            <TableCell align="center">
              <p className="font-semibold"> {data1?.servicesCard?.title}</p>
            </TableCell>
            <TableCell align="center">
              <p className="font-semibold"> {data2?.servicesCard?.title}</p>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <p className="font-semibold">{row.name}</p>
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
