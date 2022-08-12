import { ApolloProvider } from "@apollo/client";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useAnimationControls,
} from "framer-motion";
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
import SideNavModal from "../components/Global/Navbars/SideNavModal";
import Footer from "../components/Global/Footer/Footer";
import Scroll from "react-scroll";

const ScrollToTop = dynamic(
  () => import("../components/Global/ScrollToTopArrow"),
  { ssr: false } // <-- not including this component on server-side
);

const Navbar = dynamic(() => import("../components/Global/Navbars/Navbar"), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  const client = useClient();

  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <ApolloProvider client={client}>
        <motion.div
          initial={{ y: -48 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Navbar />
          <SideNavModal />
          <ScrollToTop />
          <ChatIcon />
          <Component {...pageProps} />
          <Footer />
        </motion.div>
      </ApolloProvider>
    </Provider>
  );
}

export default MyApp;
