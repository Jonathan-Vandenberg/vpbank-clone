import { ArrowForward } from "@mui/icons-material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { motion } from "framer-motion";
import { NextPage } from "next/types";
import { useState } from "react";

function createInterestTerm(
  termOne: string,
  termTwo: number,
  termThree: number,
  termFour: number,
  termFive: number
) {
  return { termOne, termTwo, termThree, termFour, termFive };
}

const rowsInterest = [
  createInterestTerm("< 300M", 3.7, 5.5, 6.2, 6),
  createInterestTerm("300M - < 3B", 3.7, 5.5, 6.2, 6.4),
  createInterestTerm("3B - < 10B", 3.9, 5.7, 6.3, 6.5),
  createInterestTerm("10B - < 50B", 4, 5.8, 6.4, 6.6),
  createInterestTerm("> 50B", 4, 6, 6.6, 6.8),
];

function createGoldType(typeGold: string, buy: string, sell: string) {
  return { typeGold, buy, sell };
}

const rowsGold = [
  createGoldType("SJC Gold 9,999 (10 chi)", "668,500", "679,800"),
  createGoldType("SJC Gold 5 chi", "668,500", "679,800"),
];

function createExchange(
  currency: string,
  buy: string,
  transfer: string,
  sell: string
) {
  return { currency, buy, transfer, sell };
}

const rowsExchange = [
  createExchange("USD", "23,270", "23,290", "23,540"),
  createExchange("EUR", "23,552", "23,715", "24,200"),
  createExchange("GBP", "27,954", "28,170", "28,656"),
  createExchange("JPY", "172.74", "174.00", "177.44"),
  createExchange("AUD", "16,010", "16,121", "16,499"),
  createExchange("SGD", "16,803", "16,837", "17,190"),
];

const GoldTable = () => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 250 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="text-lg font-semibold md:text-sm">
              Type
            </TableCell>
            <TableCell
              className="text-lg font-semibold md:text-sm"
              align="center"
            >
              Buy
            </TableCell>
            <TableCell
              className="text-lg font-semibold md:text-sm"
              align="center"
            >
              Sell
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsGold.map((row) => (
            <TableRow
              key={row.typeGold}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                className="whitespace-nowrap font-semibold text-iwanttoColor"
                component="th"
                scope="row"
              >
                {row.typeGold}
              </TableCell>
              <TableCell className="font-semibold" align="center">
                {row.buy}
              </TableCell>
              <TableCell className="font-semibold " align="center">
                {row.sell}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const ExchangeTable = () => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 250 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="text-lg font-bold md:text-sm">
              Currency
            </TableCell>
            <TableCell
              align="center"
              className="text-lg font-semibold md:text-sm"
            >
              Buy
            </TableCell>
            <TableCell
              align="center"
              className="text-lg font-semibold md:text-sm"
            >
              Bank Transfer
            </TableCell>
            <TableCell
              align="center"
              className="text-lg font-semibold md:text-sm"
            >
              Sell
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsExchange.map((row) => (
            <TableRow
              key={row.currency}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                className="font-semibold text-iwanttoColor"
              >
                {row.currency}
              </TableCell>
              <TableCell align="center" className="md:font-sm font-semibold">
                {row.buy}
              </TableCell>
              <TableCell align="center" className="md:font-sm font-semibold">
                {row.transfer}
              </TableCell>
              <TableCell align="center" className="md:font-sm font-semibold">
                {row.sell}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const InterestTable = () => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 250 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="text-lg font-semibold md:text-sm">
              Term
            </TableCell>
            <TableCell
              className="text-lg font-semibold md:text-sm"
              align="center"
            >
              1m
            </TableCell>
            <TableCell
              className="text-lg font-semibold md:text-sm"
              align="center"
            >
              6m
            </TableCell>
            <TableCell
              className="text-lg font-semibold md:text-sm"
              align="center"
            >
              12m
            </TableCell>
            <TableCell
              className="text-lg font-semibold md:text-sm"
              align="center"
            >
              24m
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsInterest.map((row) => (
            <TableRow
              key={row.termOne}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                className="whitespace-nowrap font-semibold text-iwanttoColor"
              >
                {row.termOne}
              </TableCell>
              <TableCell align="center" className="font-semibold">
                {row.termTwo}
              </TableCell>
              <TableCell align="center" className="font-semibold">
                {row.termThree}
              </TableCell>
              <TableCell align="center" className="font-semibold">
                {row.termFour}
              </TableCell>
              <TableCell align="center" className="font-semibold">
                {row.termFive}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

interface Props {
  handleInterest: () => void;
  handleExchange: () => void;
  handleGold: () => void;
  interestState: boolean;
  exchangeState: boolean;
  goldState: boolean;
}

const Nav: NextPage<Props> = ({
  handleInterest,
  handleGold,
  handleExchange,
  interestState,
  goldState,
  exchangeState,
}) => {
  const styleInterest = interestState
    ? "font-semibold border-b-2 border-iwanttoColor text-iwanttoColor w-1/3 text-center p-2 cursor-pointer"
    : "font-semibold text-gray-400 text-center w-1/3 p-2 cursor-pointer";

  const styleGold = goldState
    ? "font-semibold border-b-2 border-iwanttoColor text-iwanttoColor w-1/3 text-center p-2 cursor-pointer"
    : "font-semibold text-gray-400 text-center w-1/3 p-2 cursor-pointer";

  const styleExchange = exchangeState
    ? "font-semibold border-b-2 border-iwanttoColor text-iwanttoColor w-1/3 text-center p-2 cursor-pointer"
    : "font-semibold text-gray-400 text-center w-1/3 p-2 cursor-pointer";

  return (
    <div className="flex items-center justify-evenly md:text-sm">
      <div className={styleInterest} onClick={handleInterest}>
        <p>Interest</p>
      </div>
      <div className={styleExchange} onClick={handleExchange}>
        <p>Exchange Rate</p>
      </div>
      <div className={styleGold} onClick={handleGold}>
        <p>Gold Rate</p>
      </div>
    </div>
  );
};

export default function RatesTable() {
  const [enableGoldTable, setEnableGoldTable] = useState(false);
  const [enableExchangeTable, setEnableExchangeTable] = useState(false);
  const [enableInterestTable, setEnableInterestTable] = useState(true);

  return (
    <div className="shadow">
      <Nav
        handleInterest={function (): void {
          setEnableInterestTable(true);
          setEnableGoldTable(false);
          setEnableExchangeTable(false);
        }}
        handleExchange={function (): void {
          setEnableExchangeTable(true);
          setEnableGoldTable(false);
          setEnableInterestTable(false);
        }}
        handleGold={function (): void {
          setEnableGoldTable(true);
          setEnableExchangeTable(false);
          setEnableInterestTable(false);
        }}
        interestState={enableInterestTable}
        goldState={enableGoldTable}
        exchangeState={enableExchangeTable}
      />
      {enableGoldTable && (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
        >
          <GoldTable />
        </motion.div>
      )}
      {enableInterestTable && (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
        >
          <InterestTable />
        </motion.div>
      )}
      {enableExchangeTable && (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
        >
          <ExchangeTable />
        </motion.div>
      )}
      <div className="flex items-center justify-center p-2">
        <div>
          <p className="text-md mr-3 cursor-pointer text-iwanttoColor">
            View All
          </p>
        </div>
        <ArrowForward className="text-iwanttoColor" />
      </div>
    </div>
  );
}
