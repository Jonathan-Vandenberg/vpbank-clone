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
      data?.servicesCard?.rewardPoints ? "Yes" : "No",
      data1?.servicesCard?.rewardPoints ? "Yes" : "No",
      data2?.servicesCard?.rewardPoints ? "Yes" : "No"
    ),
    createData(
      "Refund",
      data?.servicesCard?.refund,
      data1?.servicesCard?.refund,
      data2?.servicesCard?.refund
    ),
    createData(
      "Free Flight Tickets",
      data?.servicesCard?.freeFlightTickets ? "Yes" : "No",
      data1?.servicesCard?.freeFlightTickets ? "Yes" : "No",
      data2?.servicesCard?.freeFlightTickets ? "Yes" : "No"
    ),
    createData(
      "Mobifone",
      data?.servicesCard?.mobiphone ? "Yes" : "No",
      data1?.servicesCard?.mobiphone ? "Yes" : "No",
      data2?.servicesCard?.mobiphone ? "Yes" : "No"
    ),
    createData(
      "Separate Offer",
      data?.servicesCard?.seperateOffer,
      data1?.servicesCard?.seperateOffer,
      data2?.servicesCard?.seperateOffer
    ),
    createData(
      "Free Cash Withdrawal",
      data?.servicesCard?.freeCashWithdrawal ? "Yes" : "No",
      data1?.servicesCard?.freeCashWithdrawal ? "Yes" : "No",
      data2?.servicesCard?.freeCashWithdrawal ? "Yes" : "No"
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
