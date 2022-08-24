import Image from "next/image";
import { useRouter } from "next/router";
import { NextPage } from "next/types";
import { useEffect, useState } from "react";
import VPBankNeo_Logo from "../../../public/neoLogo.png";
import VPBank_Logo from "../../../public/vpLogo.svg";
import CompareDropdown from "./Dropdowns/CompareDropdown";
import HouseholdDropdown from "./Dropdowns/HouseholdDropdown";
import RetailDropdown from "./Dropdowns/RetailDropdown";
import SMEDropdown from "./Dropdowns/SMEDropdown";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { FaHeart, FaMobileAlt, FaRegQuestionCircle } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import NavbarTop from "./NavbarTop";

const NavbarBottom: NextPage = () => {
  const [retailDrodown, setRetailDropdown] = useState(false);
  const [householdDropdown, setHouseholdDropdown] = useState(false);
  const [sMEDropdown, setSMEDropdown] = useState(false);
  const [corporateDropdown, setCorporateDropdown] = useState(false);

  const [height, setHeight] = useState(0);
  const [fullBottomNav, setFullBottomNav] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setHeight(window.scrollY);
    });

    const bottomNav = document.getElementById("bottom-nav");
    if (bottomNav?.getBoundingClientRect().top === 0) {
      setFullBottomNav(true);
    } else {
      setFullBottomNav(false);
    }
  }, [height]);

  const router = useRouter();

  const handleCloseDropdowns = () => {
    setRetailDropdown(false);
    setHouseholdDropdown(false);
    setSMEDropdown(false);
    setCorporateDropdown(false);
  };

  return (
    <>
      <NavbarTop onMouseEnter={handleCloseDropdowns} />
      <div
        id="bottom-nav"
        className="sticky top-0 z-50 hidden bg-white lg:block"
        onMouseLeave={handleCloseDropdowns}
      >
        <div className="relative flex h-16 items-center justify-around">
          <div className="cursor-pointer">
            <Image
              src={VPBank_Logo}
              width="150"
              height="30"
              alt="logo"
              onClick={() => router.push("/")}
            />
          </div>
          <div className="flex items-center justify-evenly space-x-16">
            <div className="relative flex flex-col items-center justify-center">
              <div
                id="retailLink"
                key="retail"
                className="cursor-pointer text-lg font-medium hover:text-hoverTextColor"
                onMouseEnter={() => {
                  setRetailDropdown(true);
                  setHouseholdDropdown(false);
                  setSMEDropdown(false);
                  setCorporateDropdown(false);
                }}
                onClick={() => {
                  setRetailDropdown(!retailDrodown);
                  setHouseholdDropdown(false);
                  setSMEDropdown(false);
                  setCorporateDropdown(false);
                }}
              >
                Retail
              </div>
              {retailDrodown && (
                <div
                  id="diamond1"
                  className="unhidden4 absolute z-20 h-3 w-3 translate-y-8 rotate-45 bg-gray-100 "
                />
              )}
            </div>
            <div className="relative flex flex-col items-center justify-center">
              <div
                id="householdLink"
                key="household"
                className="cursor-pointer text-lg font-medium hover:text-hoverTextColor"
                onMouseEnter={() => {
                  setHouseholdDropdown(true);
                  setRetailDropdown(false);
                  setSMEDropdown(false);
                  setCorporateDropdown(false);
                }}
                onClick={() => {
                  setHouseholdDropdown(!householdDropdown);
                  setRetailDropdown(false);
                  setSMEDropdown(false);
                  setCorporateDropdown(false);
                }}
              >
                Lorem
              </div>
              {householdDropdown && (
                <div
                  id="diamond2"
                  className="unhidden4 absolute z-20 h-3 w-3 translate-y-8 rotate-45 bg-gray-100 "
                />
              )}
            </div>
            <div className="relative flex flex-col items-center justify-center">
              <div
                id="smeLink"
                key="sme"
                className="cursor-pointer text-lg font-medium hover:text-hoverTextColor"
                onMouseEnter={() => {
                  setSMEDropdown(true);
                  setHouseholdDropdown(false);
                  setRetailDropdown(false);
                  setCorporateDropdown(false);
                }}
                onClick={() => {
                  setHouseholdDropdown(false);
                  setRetailDropdown(false);
                  setSMEDropdown(!sMEDropdown);
                  setCorporateDropdown(false);
                }}
              >
                Lorem
              </div>
              {sMEDropdown && (
                <div
                  id="diamond3"
                  className="unhidden4 absolute z-20 h-3 w-3 translate-y-8 rotate-45 bg-gray-100 "
                />
              )}
              {retailDrodown && (
                <RetailDropdown leave={() => setRetailDropdown(false)} />
              )}
              {householdDropdown && (
                <HouseholdDropdown leave={() => setHouseholdDropdown(false)} />
              )}
              {sMEDropdown && (
                <SMEDropdown leave={() => setSMEDropdown(false)} />
              )}
              {corporateDropdown && (
                <CompareDropdown leave={() => setCorporateDropdown(false)} />
              )}
            </div>
            <div className="relative flex flex-col items-center justify-center">
              <div
                id="corporateLink"
                key="corporate"
                className="cursor-pointer text-lg font-medium hover:text-hoverTextColor"
                onMouseEnter={() => {
                  setCorporateDropdown(true);
                  setHouseholdDropdown(false);
                  setRetailDropdown(false);
                  setSMEDropdown(false);
                }}
                onClick={() => {
                  setHouseholdDropdown(false);
                  setRetailDropdown(false);
                  setSMEDropdown(false);
                  setCorporateDropdown(!corporateDropdown);
                }}
              >
                Lorem
              </div>
              {corporateDropdown && (
                <div
                  id="diamond4"
                  className="unhidden4 absolute z-20 h-3 w-3 translate-y-8 rotate-45 bg-gray-100"
                />
              )}
            </div>
            <Link key="vp_bank" href={"/compare"}>
              <p
                className="cursor-pointer text-lg font-medium hover:text-hoverTextColor"
                onMouseEnter={() => {
                  setCorporateDropdown(false);
                  setHouseholdDropdown(false);
                  setRetailDropdown(false);
                  setSMEDropdown(false);
                }}
              >
                Compare Cards
              </p>
            </Link>
          </div>
          {fullBottomNav ? (
            <motion.div
              initial={{ y: -10 }}
              animate={{
                y: 0,
                transition: {
                  duration: 0.5,
                },
              }}
              className="flex items-center justify-center space-x-8 p-2"
            >
              <div className="text-semibold">
                <BsSearch />
              </div>
              <Link href={"/favorites"}>
                <div className="cursor-pointer text-xl text-red-400">
                  <FaHeart />
                </div>
              </Link>
              <div className="text-xl">
                <FaRegQuestionCircle />
              </div>
              <div className="text-2xl ">
                <HiOutlineLocationMarker />
              </div>
              <div className="text-xl">
                <FaMobileAlt />
              </div>
            </motion.div>
          ) : (
            <div className="cursor-pointer">
              <Image src={VPBankNeo_Logo} width="190" height="35" alt="logo" />
            </div>
          )}
        </div>
        <div className="w-1/4"></div>
      </div>
    </>
  );
};

export default NavbarBottom;
