import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";
import IWantModal from "../Global/Navbars/Dropdowns/IWantModal";

import { useState } from "react";

const IWantTo = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="iwantto left-12 right-12 scale-75 md:scale-90 lg:scale-100">
      <div className="relative z-30 flex items-center justify-center space-x-0 drop-shadow">
        <div className="z-30 h-20 self-center whitespace-nowrap bg-white p-6 text-lg font-bold md:text-xl">
          <p>I want</p>
        </div>
        <div className="z-30 h-20 self-center overflow-hidden whitespace-nowrap bg-white py-10">
          <motion.div
            animate={{
              opacity: [1.1, 0, 1.1, 0, 1.1, 0, 1.1, 0, 1.1, 0, 1.1, 0, 1.1],
              y: [38, -38, -114, -190, -266, -342, -418],
              transition: {
                duration: 20,
                loop: Infinity,
                ease: "easeInOut",
              },
            }}
            className="z-30 overflow-hidden bg-white px-2"
          >
            <div className="p-6 text-lg font-bold text-iwanttoColor md:text-xl">
              Register a Card
            </div>
            <div className="p-6 text-lg font-bold text-iwanttoColor md:text-xl ">
              Martgage a Loan
            </div>
            <div className="p-6 text-lg font-bold text-iwanttoColor md:text-xl ">
              Unsecured Loans
            </div>
            <div className="p-6 text-lg font-bold text-iwanttoColor md:text-xl ">
              Register an Account and Ebank
            </div>
            <div className="p-6 text-lg font-bold text-iwanttoColor md:text-xl ">
              Support Now
            </div>
          </motion.div>
        </div>
        <div
          className="jsutify-center flex h-20 cursor-pointer items-center bg-white px-6 text-2xl"
          onClick={handleOpen}
        >
          <FaAngleDown className=" text-iwanttoColor" />
        </div>
        <IWantModal open={open} handleClose={handleClose} />
      </div>
    </div>
  );
};

export default IWantTo;
