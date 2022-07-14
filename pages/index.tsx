import type { NextPage } from "next";
import { useRouter } from "next/router";
import IconSlide from "../components/IconSlides";
import Slideshow from "../components/Slideshow";
import image1 from "../public/ad2.png";
import image2 from "../public/ad3.png";
import image3 from "../public/ad4.png";

const Home: NextPage = () => {
  const { asPath } = useRouter();

  return (
    <>
      <Slideshow ad1={image1} ad2={image2} ad3={image3} />
      <IconSlide />
    </>
  );
};

export default Home;
