import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { motion } from "framer-motion";
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
  }, []);

  return (
    <>
      {showUpArrow && (
        <motion.div
          initial={{ y: 60 }}
          animate={{ y: 0, transition: { ease: "easeInOut", duration: 1 } }}
          className="px1 fixed bottom-20 right-7 z-50 p-2"
        >
          <ArrowCircleUpIcon
            style={{ fontSize: 50, color: "rgb(1,183,78)" }}
            onClick={handleScroll}
          />
        </motion.div>
      )}
    </>
  );
};

export default ScrollToTopArrow;
