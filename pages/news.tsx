import Hero from "../components/UI/HeroStatic";
import { useRouter } from "next/router";
import Head from "next/head";

const NewsPage = () => {
  const { asPath } = useRouter();

  const heroData = {
    title: "News",
    imageUrl: "https://picsum.photos/id/972/600/130",
    slug: asPath,
  };

  return (
    <main>
      <Head>
        <title>News</title>
        <meta name="description" content="VPBank News and Updates" />
      </Head>
      <Hero heroData={heroData} />
    </main>
  );
};

export default NewsPage;
