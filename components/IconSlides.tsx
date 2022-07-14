import { motion, useAnimationControls } from "framer-motion";
import { NextPage } from "next";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import icon1 from "/Users/jonathanvandenberg/2022/VPBank/public/icons8-approval-100.png";
import icon2 from "/Users/jonathanvandenberg/2022/VPBank/public/icons8-combo-chart-100.png";
import icon3 from "/Users/jonathanvandenberg/2022/VPBank/public/icons8-growing-money-100.png";
import icon4 from "/Users/jonathanvandenberg/2022/VPBank/public/icons8-idea-bank-100.png";
import icon5 from "/Users/jonathanvandenberg/2022/VPBank/public/icons8-money-transfer-100.png";
import icon6 from "/Users/jonathanvandenberg/2022/VPBank/public/icons8-new-contact-100.png";
import icon7 from "/Users/jonathanvandenberg/2022/VPBank/public/icons8-online-support-100.png";
import icon8 from "/Users/jonathanvandenberg/2022/VPBank/public/icons8-reseller-100.png";
import icon9 from "/Users/jonathanvandenberg/2022/VPBank/public/icons8-school-100.png";
import icon10 from "/Users/jonathanvandenberg/2022/VPBank/public/icons8-teamwork-100.png";
import icon11 from "/Users/jonathanvandenberg/2022/VPBank/public/icons8-visa-stamp-100.png";

interface Props {
  icon1: StaticImageData;
  icon2: StaticImageData;
  icon3: StaticImageData;
  icon4: StaticImageData;
  icon5: StaticImageData;
  icon6: StaticImageData;
  icon7: StaticImageData;
  icon8: StaticImageData;
  icon9: StaticImageData;
  icon10: StaticImageData;
  icon11: StaticImageData;
}

const icons = [
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon8,
  icon9,
  icon10,
  icon11,
];

const IconSlide: NextPage = () => {
  const [length, setLength] = useState(0);

  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      x: length,
      transition: { duration: 0.5 },
    });
  }, [length]);

  return (
    <div className=" mx-auto flex max-h-56 items-center justify-center py-12">
      <button onClick={() => setLength(length + 100)} className="ml-0 w-1/12">
        left
      </button>
      <section className="flex h-52 w-10/12 items-center justify-start overflow-hidden p-6">
        {icons.map((icon, index) => (
          <motion.div
            whileHover={{
              scale: 1.1,
            }}
            initial={{
              y: 0,
            }}
            animate={controls}
            key={index}
            className="flex.col align-center w-auto justify-start p-2"
          >
            <div className="p-4">
              <Image src={icon} width={100} height={100} layout="responsive" />
              <div className="p-4 ">
                <p className="text-center">Title</p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
      <button onClick={() => setLength(length - 100)} className="mr-0 w-1/12">
        Right
      </button>
    </div>
  );
};

export default IconSlide;
