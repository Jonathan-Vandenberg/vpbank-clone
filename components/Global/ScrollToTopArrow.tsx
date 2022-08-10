import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { NextPage } from "next/types";
import { useEffect, useState } from "react";
import * as Scroll from "react-scroll";

const ScrollToTopArrow: NextPage = () => {
  const [showUpArrow, setShowUpArrow] = useState(false);

  let scroll = Scroll.animateScroll;

  const handleScroll = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowUpArrow(true);
      } else {
        setShowUpArrow(false);
      }
    });
  }, [showUpArrow]);

  const controls = useAnimation();

  showUpArrow
    ? controls.start({
        y: 0,
        transition: { ease: "easeInOut", duration: 1 },
      })
    : controls.start({ y: 60, transition: { ease: "easeInOut", duration: 1 } });

  return (
    <>
      {showUpArrow && (
        <motion.div
          initial={{ y: 60 }}
          animate={controls}
          className="fixed  bottom-24 right-9 z-50 h-[34px] w-[34px] rounded-full bg-white"
        >
          <div className="relative">
            <ArrowCircleUpIcon
              style={{
                fontSize: 48,
                color: "rgb(1,183,78)",
                position: "absolute",
                top: "-7px",
                left: "-7px",
              }}
              onClick={handleScroll}
            />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ScrollToTopArrow;
