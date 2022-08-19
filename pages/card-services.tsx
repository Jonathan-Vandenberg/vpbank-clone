import Head from "next/head";
import CardServicesMain from "../components/CardServices/CardServicesMain";

const App = () => {
  return (
    <main>
      <Head>
        <title>Card Services</title>
        <meta name="description" content="Find the latest card services" />
      </Head>
      <CardServicesMain />
    </main>
  );
};

export default App;
