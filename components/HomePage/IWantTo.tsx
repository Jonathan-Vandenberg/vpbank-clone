import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const IWantTo = () => {
  return (
    <div className="iwantto mx-auto ">
      <div className="max-w-1/3 z-30 mx-auto flex h-auto items-center justify-center space-x-0 drop-shadow">
        <div className="z-30 h-20 self-center bg-white p-6 text-lg font-bold md:text-xl">
          I want
        </div>
        <div className="z-30 h-20 self-center overflow-hidden bg-white py-10">
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
            className="z-30 overflow-hidden bg-white px-6 "
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
        <div className="jsutify-center flex h-20 items-center bg-white px-6 text-2xl">
          <FaAngleDown className=" text-iwanttoColor" />
        </div>
      </div>
    </div>
  );
};

export default IWantTo;
