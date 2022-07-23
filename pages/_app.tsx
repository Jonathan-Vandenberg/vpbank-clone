import { ApolloProvider } from "@apollo/client";
import { motion, useAnimationControls } from "framer-motion";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../store/store";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import ChatIcon from "../components/Global/ChatIcon";
import NavbarAdvertise from "../components/Global/Navbars/NavbarAdvertise";
import NavbarTop from "../components/Global/Navbars/NavbarTop";
import { useClient } from "../lib/client";
import "../src/input.css";

const ScrollToTop = dynamic(
  () => import("../components/Global/ScrollToTopArrow"),
  { ssr: false } // <-- not including this component on server-side
);

const NavbarBottom = dynamic(
  () => import("../components/Global/Navbars/NavbarBottom"),
  { ssr: false }
);

function MyApp({ Component, pageProps }: AppProps) {
  const client = useClient();
  const controls = useAnimationControls();

  useEffect(() => {
    window.innerWidth > 786
      ? controls.start({
          y: 0,
          transition: {
            delay: 0.5,
            duration: 0.9,
          },
        })
      : null;
  }, []);

  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <ApolloProvider client={client}>
        <NavbarAdvertise />
        <motion.div initial={{ y: -48 }} animate={controls}>
          <NavbarTop />
          <NavbarBottom />
          <ScrollToTop />
          <ChatIcon />
          <Component {...pageProps} />
        </motion.div>
      </ApolloProvider>
    </Provider>
  );
}

export default MyApp;
