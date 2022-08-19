import Head from "next/head";
import InvestorRelationsMain from "../components/InvestorRelationsPage/InvestorRelationsMain";

const InvestorPage = () => {
  return (
    <main>
      <Head>
        <title>Investor Relations</title>
        <meta
          name="description"
          content="Our Investor Relations team is here to help you make the right decisions"
        />
      </Head>
      <InvestorRelationsMain />
    </main>
  );
};

export default InvestorPage;
