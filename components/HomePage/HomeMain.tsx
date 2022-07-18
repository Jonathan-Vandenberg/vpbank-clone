import IWantTo from "./IWantTo";
import image1 from "../../public/ad2.png";
import image2 from "../../public/ad3.png";
import image3 from "../../public/ad4.png";
import IndividualCustomers from "./IndividualCustomer";
import HeroSlideshow from "../UI/HeroSlideshow";
import { NextPage } from "next/types";
import Promotion from "./Promotion";
import dynamic from "next/dynamic";

const IconSlider = dynamic(
  () => import("./IconSlider"),
  { ssr: false } // <-- not including this component on server-side
);

export const images = [image1, image2, image3];

const HomeMain: NextPage = () => {
  return (
    <>
      <HeroSlideshow imageData={images} width={800} height={300} />
      <div className="-mt-10 ">
        <IWantTo />
      </div>

      <body className="bg-body">
        <section className="mx-auto md:container">
          <h2 className="indexTitle ml-6 bg-gradient-to-r from-startColor  to-endColor bg-clip-text pt-8 text-4xl font-bold text-transparent">
            Retail Banking
          </h2>
          <IconSlider />
          <Promotion />
        </section>
      </body>
    </>
  );
};

export default HomeMain;
