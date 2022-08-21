import Head from "next/head";
import HomeMain from "../components/HomePage/HomeMain";

const App: React.FC<{ temperature: string }> = ({ temperature = "28" }) => {
  return (
    <main>
      <Head>
        <title>VPBank home page</title>
        <meta
          name="description"
          content="VPBank is a leading Vietnamese bank that provides a wide range of services and products to its customers"
        />
      </Head>
      <HomeMain temp={temperature} />
    </main>
  );
};

export default App;
