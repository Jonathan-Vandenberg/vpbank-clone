import Head from "next/head";
import CompareMain from "../components/ComparePage/CompareMain";

const App = () => {
  return (
    <main>
      <Head>
        <title>Compare Cards</title>
        <meta
          name="description"
          content="Compare credit cards and find the best one for you"
        />
      </Head>
      <CompareMain />
    </main>
  );
};

export default App;
