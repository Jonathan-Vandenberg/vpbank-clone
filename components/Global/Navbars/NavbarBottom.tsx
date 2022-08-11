import Image from "next/image";
import { useRouter } from "next/router";
import { NextPage } from "next/types";
import { useEffect, useState } from "react";
import VPBankNeo_Logo from "../../../public/VPBankNeo_Logo.png";
import VPBank_Logo from "../../../public/VPBank_Logo.svg";
import CorporateDropdown from "./Dropdowns/CorporateDropdown";
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
      <nav
        id="bottom-nav"
        className="sticky top-0 z-50 hidden bg-white lg:block"
        onMouseLeave={handleCloseDropdowns}
      >
        <div className="relative flex h-16 items-center justify-around">
          <div className="hover:cursor-pointer">
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
              <a
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
              </a>
              {retailDrodown && (
                <div
                  id="diamond1"
                  className="unhidden4 absolute z-20 h-3 w-3 translate-y-8 rotate-45 bg-gray-100 "
                />
              )}
            </div>
            <div className="relative flex flex-col items-center justify-center">
              <a
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
                Household
              </a>
              {householdDropdown && (
                <div
                  id="diamond2"
                  className="unhidden4 absolute z-20 h-3 w-3 translate-y-8 rotate-45 bg-gray-100 "
                />
              )}
            </div>
            <div className="relative flex flex-col items-center justify-center">
              <a
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
                SME
              </a>
              {sMEDropdown && (
                <div
                  id="diamond3"
                  className="unhidden4 absolute z-20 h-3 w-3 translate-y-8 rotate-45 bg-gray-100 "
                />
              )}
            </div>
            <div className="relative flex flex-col items-center justify-center">
              <a
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
                Corporate
              </a>
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
              <Link href={""}>
                <div className="text-semibold cursor-pointer">
                  <BsSearch />
                </div>
              </Link>
              <Link href={"/favorites"}>
                <div className="cursor-pointer text-xl text-red-400">
                  <FaHeart />
                </div>
              </Link>
              <Link href={""}>
                <div className="cursor-pointer text-xl">
                  <FaRegQuestionCircle />
                </div>
              </Link>
              <Link href={""}>
                <div className="cursor-pointer text-2xl ">
                  <HiOutlineLocationMarker />
                </div>
              </Link>
              <Link href={""}>
                <div className="cursor-pointer text-xl">
                  <FaMobileAlt />
                </div>
              </Link>
            </motion.div>
          ) : (
            <div className="hover:cursor-pointer">
              <Image src={VPBankNeo_Logo} width="190" height="35" alt="logo" />
            </div>
          )}
        </div>
        <div className="w-1/4">
          {retailDrodown && (
            <RetailDropdown leave={() => setRetailDropdown(false)} />
          )}
          {householdDropdown && (
            <HouseholdDropdown leave={() => setHouseholdDropdown(false)} />
          )}
          {sMEDropdown && <SMEDropdown leave={() => setSMEDropdown(false)} />}
          {corporateDropdown && (
            <CorporateDropdown leave={() => setCorporateDropdown(false)} />
          )}
        </div>
      </nav>
    </>
  );
};

export default NavbarBottom;
