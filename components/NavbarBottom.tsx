import Image from "next/image";
import { NextPage } from "next/types";
import { useState } from "react";
import VPBankNeo_Logo from "../public/VPBankNeo_Logo.png";
import VPBank_Logo from "../public/VPBank_Logo.svg";
import RetailDropdown from "./RetailDropdown";
import { motion } from "framer-motion";
import HouseholdDropdown from "./HouseholdDropdown";
import SMEDropdown from "./SMEDropdown";
import CorporateDropdown from "./CorporateDropdown";
import { useRouter } from "next/router";

const NavbarBottom: NextPage = () => {
  const [retailDrodown, setRetailDropdown] = useState(false);
  const [householdDropdown, setHouseholdDropdown] = useState(false);
  const [sMEDropdown, setSMEDropdown] = useState(false);
  const [corporateDropdown, setCorporateDropdown] = useState(false);

  const router = useRouter();

  const onSearch = (value: string) => {};

  return (
    <>
      <nav className="sticky top-0 z-50 h-16 bg-white pt-2 sm:px-4">
        <div className="container relative mx-auto flex h-16 items-center justify-between">
          <div className="h-12 hover:cursor-pointer">
            <Image
              src={VPBank_Logo}
              width="150"
              height="30"
              alt="logo"
              onClick={() => router.push("/")}
            />
          </div>
          <div className="hidden h-12 items-center justify-center space-x-12 px-16 lg:flex">
            <a
              id="retailLink"
              key="retail"
              className="navLink z-1000 relative h-10 font-VarelaRound  text-lg hover:text-hoverTextColor"
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
                className="absolute z-20 h-3 w-3 -translate-x-diamond1 translate-y-6 rotate-45 bg-gray-100"
              />
            )}
            <a
              id="householdLink"
              key="household"
              className="navLink h-10 text-lg font-medium hover:text-hoverTextColor"
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
                className="unhidden2 absolute z-20 mx-9  h-3 w-3 -translate-x-diamond2 translate-y-6 rotate-45 bg-gray-100 "
              />
            )}
            <a
              id="smeLink"
              key="sme"
              className="navLink z-20 h-10 text-lg font-medium hover:text-hoverTextColor"
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
                className="unhidden3 absolute z-20 mx-3  h-3 w-3 -translate-x-diamond3 translate-y-6 rotate-45 bg-gray-100 "
              />
            )}
            <a
              id="corporateLink"
              key="corporate"
              className="navLink h-10 text-lg font-medium hover:text-hoverTextColor"
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
                className="unhidden4 absolute z-20 mx-8  h-3 w-3 -translate-x-diamond4 translate-y-6 rotate-45 bg-gray-100 "
              />
            )}
            <a
              key="vp_bank"
              className="navLink h-10 text-lg font-medium hover:text-hoverTextColor"
              onMouseEnter={() => {
                setCorporateDropdown(false);
                setHouseholdDropdown(false);
                setRetailDropdown(false);
                setSMEDropdown(false);
              }}
            >
              Diamond
            </a>
          </div>
          <div className="hidden h-12 lg:block">
            <Image src={VPBankNeo_Logo} width="150" height="30" alt="logo" />
          </div>
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
