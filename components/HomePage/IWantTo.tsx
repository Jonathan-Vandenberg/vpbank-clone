import { motion } from "framer-motion";
import { AiOutlineDown } from "react-icons/ai";

const IWantTo = () => {
  return (
    <div className="iwantto mx-auto">
      <div className="min-w-1/2 z-30 mx-auto flex h-auto justify-center space-x-0 drop-shadow">
        <div className="font-lg z-30 h-20 self-center bg-white p-6 text-xl font-bold">
          I want to
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
            <div className="p-6 text-xl font-bold text-iwanttoColor">
              Register a Card
            </div>
            <div className="p-6 text-xl font-bold text-iwanttoColor ">
              Martgage a Loan
            </div>
            <div className="p-6 text-xl font-bold text-iwanttoColor ">
              Unsecured Loans
            </div>
            <div className="p-6 text-xl font-bold text-iwanttoColor ">
              Register an Account and Ebank
            </div>
            <div className="p-6 text-xl font-bold text-iwanttoColor ">
              Support Now
            </div>
          </motion.div>
        </div>
        <div className="z-30 h-20 self-center bg-white ">
          <AiOutlineDown className=" mt-6 h-6 w-16 pr-10 text-iwanttoColor" />
        </div>
      </div>
    </div>
  );
};

export default IWantTo;
