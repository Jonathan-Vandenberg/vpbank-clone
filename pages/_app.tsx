import type { AppProps } from "next/app";
import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { useClient } from "../lib/client";
import NavbarTop from "../components/NavbarTop";
import NavbarBottom from "../components/NavbarBottom";

function MyApp({ Component, pageProps }: AppProps) {
  const client = useClient();
  return (
    <ApolloProvider client={client}>
      <NavbarTop />
      <NavbarBottom />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
