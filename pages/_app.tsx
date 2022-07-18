import { ApolloProvider } from "@apollo/client";
import { motion } from "framer-motion";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useState } from "react";
import ChatIcon from "../components/Global/ChatIcon";
import NavbarAdvertise from "../components/Global/Navbars/NavbarAdvertise";
import NavbarBottom from "../components/Global/Navbars/NavbarBottom";
import NavbarTop from "../components/Global/Navbars/NavbarTop";
import { useClient } from "../lib/client";
import "../src/input.css";
import Scroll from "react-scroll";

const ScrollToTop = dynamic(
  () => import("../components/Global/ScrollToTopArrow"),
  { ssr: false } // <-- not including this component on server-side
);

function MyApp({ Component, pageProps }: AppProps) {
  const client = useClient();

  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <ApolloProvider client={client}>
        <>
          <NavbarAdvertise />
          <motion.div
            initial={{ y: -32 }}
            animate={{ y: 0, transition: { duration: 1, delay: 0.5 } }}
          >
            <NavbarTop />
            <NavbarBottom />
            <ScrollToTop />
            <ChatIcon />
            <Component {...pageProps} />
          </motion.div>
        </>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
