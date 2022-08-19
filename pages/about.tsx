import Head from "next/head";
import AboutMain from "../components/AboutPage/AboutMain";

const AboutPage = () => {
  return (
    <main>
      <Head>
        <title>About VPBank</title>
        <meta name="description" content="Learn more about VPBank" />
      </Head>
      <AboutMain />
    </main>
  );
};

export default AboutPage;
