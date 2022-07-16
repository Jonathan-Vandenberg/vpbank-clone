import { motion, useAnimationControls } from "framer-motion";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import icon1 from "/Users/jonathanvandenberg/2022/VPBank/public/icons8-approval-100.png";
import icon2 from "/Users/jonathanvandenberg/2022/VPBank/public/icons8-combo-chart-100.png";
import icon3 from "/Users/jonathanvandenberg/2022/VPBank/public/retail-icon-3.png";
import icon4 from "/Users/jonathanvandenberg/2022/VPBank/public/icons8-idea-bank-100.png";
import icon5 from "/Users/jonathanvandenberg/2022/VPBank/public/icons8-money-transfer-100.png";
import icon6 from "/Users/jonathanvandenberg/2022/VPBank/public/icons8-new-contact-100.png";
import icon8 from "/Users/jonathanvandenberg/2022/VPBank/public/icons8-reseller-100.png";
import icon9 from "/Users/jonathanvandenberg/2022/VPBank/public/icons8-school-100.png";
import icon10 from "/Users/jonathanvandenberg/2022/VPBank/public/icons8-teamwork-100.png";
import icon11 from "/Users/jonathanvandenberg/2022/VPBank/public/icons8-visa-stamp-100.png";
import { DinnerDiningTwoTone } from "@mui/icons-material";

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
  const [animateLength, setAnimateLength] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const [iconDistance, setIconDistance] = useState(0);

  const controls = useAnimationControls();

  useEffect(() => {
    let li = document.getElementById("icon0")!.getBoundingClientRect().left;
    setIconDistance(li);

    setScreenWidth(window.innerWidth);

    if (iconDistance > -500 && iconDistance < 500) {
      document.getElementById("leftButton")?.classList.toggle("disableButton");
    }

    controls.start({
      x: animateLength,
      transition: { duration: 0.5 },
    });

    document.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });

    return () => {
      document.removeEventListener("resize", () => {
        setScreenWidth(window.innerWidth);
      });
    };
    console.log(screenWidth);
  }, [animateLength, controls, screenWidth]);

  return (
    <div className="mx-auto flex h-36 items-center justify-center py-12 md:h-60">
      {screenWidth < 1080 && (
        <button
          onClick={() => setAnimateLength(animateLength + 100)}
          className="disableButton itemes-center w-1/10 mr-0 flex justify-start px-6"
          id="leftButton"
        >
          <FaChevronLeft />
        </button>
      )}
      <section className="w-8/10 ml-0 flex h-52 items-center justify-start overflow-hidden px-0">
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
            id={`icon${index}`}
          >
            <div className=" p-4 ">
              <div className="rounded-md shadow">
                <Image
                  alt="icon"
                  src={icon}
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </div>
              <div className="p-4 ">
                <p className="text-center">Title</p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
      {screenWidth < 1080 && iconDistance > -300 && (
        <button
          onClick={() => setAnimateLength(animateLength - 100)}
          className="disableButton leftButton itemes-center w-1/10 mr-0 flex justify-start px-6"
          id="rightButton"
        >
          <FaChevronRight />
        </button>
      )}
    </div>
  );
};

export default IconSlide;
