import { useRouter } from "next/router";
import Body from "../components/Body";
import Hero from "../components/Home/Hero";
import Tester from "../components/TESTTAILWIND";

const AboutPage = () => {
  const { asPath } = useRouter();

  return (
    <>
      <Hero
        imageUrl="https://picsum.photos/id/299/600/130"
        slug={asPath}
        title="About VPBank"
      />
      <Tester />
      <Body />
    </>
  );
};

export default AboutPage;
