import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { motion } from "framer-motion";
import { NextPage } from "next/types";
import { useEffect, useState } from "react";

const ScrollToTopArrow: NextPage = () => {
  const [showUpArrow, setShowUpArrow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowUpArrow(true);
      } else {
        setShowUpArrow(false);
      }
    });
  }, []);

  const scrollToTop = () => window.scroll({ top: 0, behavior: "smooth" });

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
            onClick={() => scrollToTop()}
          />
        </motion.div>
      )}
    </>
  );
};

export default ScrollToTopArrow;
