import { motion } from "framer-motion";
import Link from "next/link";
import { NextPage } from "next/types";
import Image from "next/image";

interface Props {
  leave: () => void;
}

const navLinks = [
  "Card Services",
  "Debit Card",
  "Loans",
  "Savings",
  "Account",
  "E_Banking Services",
  "Insurance",
  "Personal Services",
  "VPBank Loyalty",
  "VPBank Diamond",
];

const RetailDropdown: NextPage<Props> = ({ leave }) => (
  <motion.div
    id="retailDropdown"
    onMouseLeave={leave}
    className="sm:-w-full z-100 absolute top-16 flex h-dropdownHeight bg-white p-6 shadow-lg sm:mx-auto md:left-52 md:w-2/3 "
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ ease: "easeOut" }}
  >
    <div className="block w-1/2 space-y-3">
      {navLinks.map((link, i) => (
        <div key={i}>
          <Link href={`/${link}`}>
            <a className="block whitespace-nowrap text-lg font-medium hover:text-hoverTextColor">
              {link}
            </a>
          </Link>
        </div>
      ))}
    </div>
    <div className="flex.col h-full w-1/2 items-center justify-center space-y-0.5 border-l-2">
      <div className=" h-3/4  p-6">
        <Image
          src={"https://picsum.photos/id/391/600/600"}
          width="600"
          height="600"
          layout="responsive"
          alt="dropdown-item"
        />
      </div>

      <div className="h-1/4 p-6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit rem
        blanditiis distinctio officiis laudantium doloribus eligendi saepe ad?
      </div>
    </div>
  </motion.div>
);

export default RetailDropdown;
