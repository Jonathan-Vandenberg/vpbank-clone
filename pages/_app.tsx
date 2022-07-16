import type { AppProps } from "next/app";
import { useState } from "react";
import "../src/input.css";
import { ApolloProvider } from "@apollo/client";
import { useClient } from "../lib/client";
import NavbarTop from "../components/NavbarTop";
import NavbarAdvertise from "../components/NavbarAdvertise";
import Head from "next/head";
import dynamic from "next/dynamic";
import ChatIcon from "../components/ChatIcon";

const NavBottom = dynamic(
  () => import("../components/NavbarBottom"),
  { ssr: false } // <-- not including this component on server-side
);

function MyApp({ Component, pageProps }: AppProps) {
  const [navAdVisible, setNavAdVisible] = useState(true);

  const disableNavAd = () => {
    setNavAdVisible(false);
  };

  const client = useClient();
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <ApolloProvider client={client}>
        {navAdVisible && <NavbarAdvertise onClick={disableNavAd} />}
        <NavbarTop />
        <NavBottom />
        <ChatIcon />
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
