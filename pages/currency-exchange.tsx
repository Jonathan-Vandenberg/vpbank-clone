import CurrencyExchangeMain from "../components/CurrencyExchange/CurrencyExchangeMain";
import axios from "axios";
import { useState } from "react";
import { GetServerSideProps } from "next/types";
import Head from "next/head";

const CurrencyExchange = ({ exchange }: any) => {
  const [currencyA, setCurrencyA] = useState("USD");
  const [currencyB, setCurrencyB] = useState("VND");

  return (
    <main>
      <Head>
        <title>Currency Exchange</title>
        <meta
          name="description"
          content="Find the latest currency exchange rates"
        />
      </Head>
      <CurrencyExchangeMain exchange={exchange} />
    </main>
  );
};

export default CurrencyExchange;

// interface IOptions {
//   params: {
//     from: string;
//     to: string;
//     q: string;
//   };
//   headers: {
//     "X-RapidAPI-Key": string;
//     "X-RapidAPI-Host": string;
//   };
// }

// const key = process.env.RAPID_API_KEY;

// export const getServerSideProps: GetServerSideProps = async () => {
//   const options: IOptions = {
//     params: { from: "USD", to: "VND", q: "1.0" },
//     headers: {
//       "X-RapidAPI-Key": "",
//       "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
//     },
//   };

//   const exchange = await axios.get(
//     "https://currency-exchange.p.rapidapi.com/exchange",
//     options
//   );

//   return {
//     props: {
//       exchange: exchange.data,
//     },
//   };
// };
