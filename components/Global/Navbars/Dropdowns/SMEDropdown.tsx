import { motion } from "framer-motion";
import Link from "next/link";
import { NextPage } from "next/types";
import Image from "next/image";

const navLinks = [
  "Account Service",
  "Business Loans",
  "VPBIZ Payment Card",
  "Card Payment Services",
  "Payment Service",
  "Trade Finance",
  "Deposit Products",
  "Online Chiropractic",
  "Online Disbursement",
  "Business Account Online",
];

interface Props {
  leave: () => void;
}

const SMEDropdown: NextPage<Props> = ({ leave }) => {
  return (
    <motion.div
      id="dropdown"
      onMouseLeave={leave}
      className="h-dropdownHeight absolute top-[46px] grid w-[600px] grid-cols-2 bg-white p-5"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut" }}
    >
      <div className="col-span-1 space-y-2">
        {navLinks.map((link, i) => (
          <div
            className="pointer-cursor hover:text-iwanttoColor"
            key={i}
            onClick={leave}
          >
            <p className="text-lg font-semibold">{link}</p>
          </div>
        ))}
      </div>
      <div className="col-span-1 flex flex-col">
        <div>
          <Image
            src={"https://picsum.photos/id/287/600/600"}
            width="600"
            height="600"
            layout="responsive"
            alt="dropdown-item"
          />
        </div>

        <div className="text-md block py-5 text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit rem
          blanditiis distinctio officiis laudantium doloribus eligendi saepe ad?
        </div>
      </div>
    </motion.div>
  );
};

export default SMEDropdown;
