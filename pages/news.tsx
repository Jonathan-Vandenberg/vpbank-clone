import Hero from "../components/UI/HeroStatic";
import { useRouter } from "next/router";

const NewsPage = () => {
  const { asPath } = useRouter();

  const heroData = {
    title: "News",
    imageUrl: "https://picsum.photos/id/972/600/130",
    slug: asPath,
  };

  return <Hero heroData={heroData} />;
};

export default NewsPage;
