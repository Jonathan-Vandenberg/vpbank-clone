import type { NextPage } from "next";
import Hero from "../components/Home/Hero";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const { asPath } = useRouter();

  return (
    <>
      <Hero
        imageUrl="https://picsum.photos/id/299/600/130"
        title="Home"
        slug={asPath}
      />
    </>
  );
};

export default Home;
