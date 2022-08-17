import { useState } from "react";

const axios = require("axios");

const CurrencyExchangeMain = ({ exchange }: any) => {
  return (
    <div>
      <div>{exchange}</div>
    </div>
  );
};

export default CurrencyExchangeMain;
