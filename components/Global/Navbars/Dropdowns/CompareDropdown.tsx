import { motion } from "framer-motion";
import Link from "next/link";
import { NextPage } from "next/types";
import Image from "next/image";

interface Props {
  leave: () => void;
}

const navLinks = [
  "Guarantee",
  "Loans",
  "Services and Trade Finance",
  "Account services",
  "Card Services",
  "Financial Market Products",
  "Internet Banking",
  "Email Transactions",
];

const CompareDropdown: NextPage<Props> = ({ leave }) => (
  <motion.div
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
          <Link href={`${link}`}>
            <p className="text-lg font-semibold">{link}</p>
          </Link>
        </div>
      ))}
    </div>
    <div className="col-span-1 flex flex-col">
      <div>
        <Image
          src={"https://picsum.photos/id/269/300/300"}
          width="300"
          height="300"
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

export default CompareDropdown;
