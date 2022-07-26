import Image from "next/image";
import { useRouter } from "next/router";
import { NextPage } from "next/types";
import { useState } from "react";
import VPBankNeo_Logo from "../../../public/VPBankNeo_Logo.png";
import VPBank_Logo from "../../../public/VPBank_Logo.svg";
import { useAppSelector } from "../../../redux-hooks/hooks";
import CorporateDropdown from "../Dropdowns/CorporateDropdown";
import HouseholdDropdown from "../Dropdowns/HouseholdDropdown";
import RetailDropdown from "../Dropdowns/RetailDropdown";
import SMEDropdown from "../Dropdowns/SMEDropdown";

const NavbarBottom: NextPage = () => {
  const [retailDrodown, setRetailDropdown] = useState(false);
  const [householdDropdown, setHouseholdDropdown] = useState(false);
  const [sMEDropdown, setSMEDropdown] = useState(false);
  const [corporateDropdown, setCorporateDropdown] = useState(false);

  const { value: toggleDropdown } = useAppSelector(
    (state) => state.showDropdown
  );

  if (toggleDropdown) {
    setRetailDropdown(false);
    setHouseholdDropdown(false);
    setSMEDropdown(false);
    setCorporateDropdown(false);
  }

  console.log(toggleDropdown ? "toggle true" : "toggle false");

  const router = useRouter();

  const onSearch = (value: string) => {};

  return (
    <nav className="sticky  z-50  hidden bg-white pt-2 lg:block">
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
          <a
            id="retailLink"
            key="retail"
            className="text-lg font-medium hover:text-hoverTextColor"
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
            className="text-lg font-medium hover:text-hoverTextColor"
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
            className="text-lg font-medium hover:text-hoverTextColor"
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
            className="text-lg font-medium hover:text-hoverTextColor"
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
            className="text-lg font-medium hover:text-hoverTextColor"
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
        <div className="hover:cursor-pointer">
          <Image src={VPBankNeo_Logo} width="190" height="35" alt="logo" />
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
  );
};

export default NavbarBottom;
