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

const CorporateDropdown: NextPage<Props> = ({ leave }) => (
  <motion.div
    onMouseLeave={leave}
    className="sm:-w-full z-100 container absolute top-16 flex h-dropdownHeight bg-white p-6 shadow-lg sm:mx-auto md:left-52 md:w-2/3 "
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ ease: "easeOut" }}
  >
    <div className="block space-y-3">
      {navLinks.map((link, i) => (
        <div key={i}>
          <Link href={`/${link}`}>
            <a className="block text-lg font-medium hover:text-hoverTextColor">
              {link}
            </a>
          </Link>
        </div>
      ))}
    </div>
    <div className="flex.col ml-60 h-full w-1/2 items-center justify-center space-y-0.5 border-l-2">
      <div className=" h-3/4  p-6">
        <Image
          src={"https://picsum.photos/id/269/300/300"}
          width="300"
          height="300"
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

export default CorporateDropdown;
