import CurrencyExchangeMain from "../components/CurrencyExchange/CurrencyExchangeMain";
import axios from "axios";
import { useState } from "react";
import { GetServerSideProps } from "next/types";

const CurrencyExchange = ({ exchange }: any) => {
  const [currencyA, setCurrencyA] = useState("USD");
  const [currencyB, setCurrencyB] = useState("VND");

  return <CurrencyExchangeMain exchange={exchange} />;
};

export default CurrencyExchange;

interface IOptions {
  params: {
    from: string;
    to: string;
    q: string;
  };
  headers: {
    "X-RapidAPI-Key": string;
    "X-RapidAPI-Host": string;
  };
}

const key = process.env.RAPID_API_KEY;

export const getServerSideProps: GetServerSideProps = async () => {
  const options: IOptions = {
    params: { from: "USD", to: "VND", q: "1.0" },
    headers: {
      "X-RapidAPI-Key": "238f019ceamsh555090a8d52cec6p1178e5jsn2e7cd458b6c3",
      "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
    },
  };

  const exchange = await axios.get(
    "https://currency-exchange.p.rapidapi.com/exchange",
    options
  );

  return {
    props: {
      exchange: exchange.data,
    },
  };
};
