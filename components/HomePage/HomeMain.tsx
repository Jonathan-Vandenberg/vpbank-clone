import IWantTo from "./IWantTo";
import image1 from "../../public/ad2.png";
import image2 from "../../public/ad3.png";
import image3 from "../../public/ad4.png";
import IndividualCustomers from "./IndividualCustomer";
import HeroSlideshow from "../UI/HeroSlideshow";
import { NextPage } from "next/types";
import Promotion from "./Promotion";

export const images = [image1, image2, image3];

const HomeMain: NextPage = () => {
  return (
    <>
      <HeroSlideshow imageData={images} width={800} height={300} />
      <div className="-mt-10 ">
        <IWantTo />
      </div>
      <IndividualCustomers />
      <Promotion />
    </>
  );
};

export default HomeMain;
