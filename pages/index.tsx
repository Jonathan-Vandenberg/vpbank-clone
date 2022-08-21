import Head from "next/head";
import HomeMain from "../components/HomePage/HomeMain";

const App: React.FC<{ temperature: string }> = ({ temperature = "28" }) => {
  return (
    <main>
      <Head>
        <title>VPBank home page</title>
        <link
          rel="manifest"
          crossOrigin="use-credentials"
          href="/manifest.json"
        />
        <link rel="apple-touch-icon" href="/logo-96x96.png" />
        <meta
          name="description"
          content="VPBank is a leading Vietnamese bank that provides a wide range of services and products to its customers"
        />
        <meta name="apple-mobile-web-app-status-bar" content="#90cdf4" />
      </Head>
      <HomeMain temp={temperature} />
    </main>
  );
};

export default App;
