import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import IWantTo from "../components/IWantTo";
import Slideshow from "../components/Slideshow";
import image1 from "../public/ad2.png";
import image2 from "../public/ad3.png";
import image3 from "../public/ad4.png";

const IconSlide = dynamic(() => import("../components/IconSlides"), {
  ssr: false,
});

const Home: NextPage = () => {
  const { asPath } = useRouter();

  return (
    <>
      <div className="-z-50">
        <Slideshow ad1={image1} ad2={image2} ad3={image3} />
      </div>
      <div className="-mt-10">
        <IWantTo />
      </div>
      <IconSlide />
    </>
  );
};

export default Home;
