import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { NextPage } from "next/types";
import { useEffect, useState } from "react";
import VPBankNeo_Logo from "../../../public/VPBankNeo_Logo.png";
import VPBank_Logo from "../../../public/VPBank_Logo.svg";
import CorporateDropdown from "../Dropdowns/CorporateDropdown";
import HouseholdDropdown from "../Dropdowns/HouseholdDropdown";
import RetailDropdown from "../Dropdowns/RetailDropdown";
import SMEDropdown from "../Dropdowns/SMEDropdown";
import { useRef } from "react";
import { useAppSelector } from "../../../redux-hooks/hooks";
import showDropdownSlice from "../../../slices/showDropdownSlice";

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

  const btnRef = useRef<HTMLButtonElement>();
  const menuRef = useRef<HTMLDivElement>();

  const openMenu = () => {
    btnRef?.current?.classList.toggle("open");
    menuRef?.current?.classList.add("flex");
    menuRef?.current?.classList.toggle("hidden");
  };

  const router = useRouter();

  useEffect(() => {
    const menuButton = document.getElementById(
      "menu-btn"
    ) as HTMLButtonElement | null;
    const menu = document.getElementById("menu") as HTMLDivElement | null;
    menuButton?.addEventListener("click", () => {
      menuButton?.classList.toggle("open");
      menu?.classList.toggle("flex");
      menu?.classList.toggle("hidden");
    });
  }, []);

  const onSearch = (value: string) => {};

  return (
    <>
      <nav className="sticky top-0 z-50 flex h-16 items-center justify-center bg-white pt-2 sm:px-4">
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
        <button
          ref={btnRef as any}
          onClick={openMenu}
          id="menu-btn"
          className="open hamburger z-50 block focus:outline-none md:hidden"
        >
          <span className="hamburger-top z-50"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </nav>
      <div className="md:hidden">
        <div
          ref={menuRef as any}
          id="menu"
          className="absolute left-6 right-6 z-50 mt-12 hidden flex-col items-center space-y-6 self-end bg-white py-8 font-bold drop-shadow-md sm:w-auto sm:self-center"
        >
          <Link href={"/individual"}>Individual</Link>
          <Link href={"/household-business"}>HouseHold Business</Link>
          <Link href={"/smes"}>SMEs</Link>
          <Link href={"/big-business"}>Big Business</Link>
          <Link href={"vpbank-diamond"}>VPBank Diamond</Link>
        </div>
      </div>
    </>
  );
};

export default NavbarBottom;
