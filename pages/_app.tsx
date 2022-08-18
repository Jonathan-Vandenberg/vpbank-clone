import { ApolloProvider } from "@apollo/client";
import { motion } from "framer-motion";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Provider } from "react-redux";
import { useClient } from "../lib/client";
import ChatIcon from "../components/Global/ChatIcon";
import Footer from "../components/Global/Footer/Footer";
import SideNavModal from "../components/Global/Navbars/SideNavModal";
import "../styles/input.css";
import store from "../store/store";

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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ApolloProvider client={client}>
        <motion.div
          initial={{ y: -48 }}
          animate={{ y: 0 }}
          transition={{ delay: 2, duration: 1 }}
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
