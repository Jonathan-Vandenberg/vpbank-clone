import { ApolloProvider } from "@apollo/client";
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
import { useEffect } from "react";

const ScrollToTop = dynamic(
  () => import("../components/Global/ScrollToTopArrow"),
  { ssr: false } // <-- not including this component on server-side
);

const Navbar = dynamic(() => import("../components/Global/Navbars/Navbar"), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/public/sw.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);

  const client = useClient();

  return (
    <Provider store={store}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="Jonathan van den berg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <ApolloProvider client={client}>
        <Navbar />
        <SideNavModal />
        <ScrollToTop />
        <ChatIcon />
        <Component {...pageProps} />
        <Footer />
      </ApolloProvider>
    </Provider>
  );
}

export default MyApp;
