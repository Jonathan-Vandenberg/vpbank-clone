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
      "Reward Points",
      data ? (data1?.servicesCard?.rewardPoints ? "Yes" : "No") : null,
      data1 ? (data1?.servicesCard?.rewardPoints ? "Yes" : "No") : null,
      data2 ? (data1?.servicesCard?.rewardPoints ? "Yes" : "No") : null
    ),
    createData(
      "Refund",
      data?.servicesCard?.refund,
      data1?.servicesCard?.refund,
      data2?.servicesCard?.refund
    ),
    createData(
      "Free Flight Tickets",
      data ? (data?.servicesCard?.freeFlightTickets ? "Yes" : "No") : null,
      data1 ? (data?.servicesCard?.freeFlightTickets ? "Yes" : "No") : null,
      data2 ? (data?.servicesCard?.freeFlightTickets ? "Yes" : "No") : null
    ),
    createData(
      "Mobifone",
      data ? (data?.servicesCard?.mobiphone ? "Yes" : "No") : null,
      data1 ? (data?.servicesCard?.mobiphone ? "Yes" : "No") : null,
      data2 ? (data?.servicesCard?.mobiphone ? "Yes" : "No") : null
    ),
    createData(
      "Separate Offer",
      data?.servicesCard?.seperateOffer,
      data1?.servicesCard?.seperateOffer,
      data2?.servicesCard?.seperateOffer
    ),
    createData(
      "Free Cash Withdrawal",
      data ? (data?.servicesCard?.freeCashWithdrawal ? "Yes" : "No") : null,
      data1 ? (data?.servicesCard?.freeCashWithdrawal ? "Yes" : "No") : null,
      data2 ? (data?.servicesCard?.freeCashWithdrawal ? "Yes" : "No") : null
    ),
    createData(
      "Free Annual Fee",
      data?.servicesCard?.freeAnnualFees,
      data1?.servicesCard?.freeAnnualFees,
      data2?.servicesCard?.freeAnnualFees
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
              <p className="font-semibold">{data1?.servicesCard?.title}</p>
            </TableCell>
            <TableCell align="center">
              <p className="font-semibold">{data2?.servicesCard?.title}</p>
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
