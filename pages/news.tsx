import Hero from "../components/UI/Hero";
import { useRouter } from "next/router";

const NewsPage = () => {
  const { asPath } = useRouter();

  return (
    <Hero
      imageUrl="https://picsum.photos/id/972/600/130"
      slug={asPath}
      title="News"
    />
  );
};

export default NewsPage;
