import { motion } from "framer-motion";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CreditCardSlider from "../UI/CreditCardSlider";

const IconSlider = ({ data }: any) => {
  const renderSlides = () =>
    data?.servicesCards?.map((el: any, i: number) => (
      <div
        key={i}
        className="lg:scale-115 flex h-full flex-col items-center justify-center p-4 outline-none sm:scale-75 sm:p-3 md:scale-90 md:p-4 lg:p-3 xl:scale-100"
      >
        <motion.div
          whileHover={{
            scale: 1.03,
            y: -3,
            boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ duration: 0.3 }}
          whileTap={{ scale: 0.98 }}
          whileInView={{ opacity: 1 }}
          className="flex items-center justify-center outline-none"
        >
          <CreditCardSlider singleCardData={el} addToCompare={true} />
        </motion.div>
      </div>
    ));

  return (
    <div className="md:px-24">
      <Slider
        slidesToShow={4}
        slidesToScroll={4}
        arrows={true}
        dotsClass="slick-dots"
        lazyLoad={"anticipated"}
        className=""
      >
        {renderSlides()}
      </Slider>
    </div>
  );
};

export default IconSlider;
