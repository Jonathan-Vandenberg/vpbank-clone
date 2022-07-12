import Hero from "../components/Home/Hero";
import { useRouter } from "next/router";

const InvestorPage = () => {
  const { asPath } = useRouter();

  return (
    <Hero
      imageUrl="https://picsum.photos/id/391/600/130"
      slug={asPath}
      title="Investor Relations"
    />
  );
};

export default InvestorPage;
