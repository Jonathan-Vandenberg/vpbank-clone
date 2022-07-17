import Hero from "../UI/Hero";
import { useRouter } from "next/router";

const InvestorRelationsMain = () => {
  const { asPath } = useRouter();

  const heroData = {
    title: "Investor Relations",
    imageUrl: "https://picsum.photos/id/299/600/130",
    slug: asPath,
  };

  return <Hero heroData={heroData} />;
};

export default InvestorRelationsMain;
