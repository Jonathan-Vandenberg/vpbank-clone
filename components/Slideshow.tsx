import { NextPage } from "next";
import Image, { StaticImageData } from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Props {
  ad1: StaticImageData;
  ad2: StaticImageData;
  ad3: StaticImageData;
}

const Slideshow: NextPage<Props> = ({ ad1, ad2, ad3 }) => {
  return (
    <div className="-z-50">
      <Carousel
        autoPlay
        infiniteLoop
        interval={3500}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        swipeable={false}
        axis="horizontal"
        width="100%"
      >
        <div>
          <Image
            src={ad1}
            alt="image1"
            width={900}
            height={300}
            layout="responsive"
          />
        </div>
        <div>
          <Image
            src={ad2}
            alt="image2"
            width={900}
            height={300}
            layout="responsive"
          />
        </div>
        <div>
          <Image
            src={ad3}
            alt="image3"
            width={900}
            height={300}
            layout="responsive"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Slideshow;
