import type { AppProps } from "next/app";
import { useState } from "react";
import "../styles/style.css";
import { ApolloProvider } from "@apollo/client";
import { useClient } from "../lib/client";
import NavbarTop from "../components/NavbarTop";
import NavbarBottom from "../components/NavbarBottom";
import NavbarAdvertise from "../components/NavbarAdvertise";

function MyApp({ Component, pageProps }: AppProps) {
  const [navAdVisible, setNavAdVisible] = useState(true);

  const disableNavAd = () => {
    setNavAdVisible(false);
  };

  const client = useClient();
  return (
    <ApolloProvider client={client}>
      {navAdVisible && <NavbarAdvertise onClick={disableNavAd} />}
      <NavbarTop />
      <NavbarBottom />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
