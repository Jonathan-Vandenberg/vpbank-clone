import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import { motion } from "framer-motion";
import Image from "next/image";
import router from "next/router";
import { NextPage } from "next/types";
import * as React from "react";
import { BsSearch } from "react-icons/bs";
import { FaHeart, FaMobileAlt, FaRegQuestionCircle } from "react-icons/fa";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import logo from "../../../public/vpLogo.svg";
import neoLogo from "../../../public/neoLogo.png";
import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: 0,
  left: 0,
  maxWidth: "80vw",
  height: "100vh",
  bgcolor: "background.paper",
  outline: "none",
};

const SideNavModal: NextPage = () => {
  const [open, setOpen] = React.useState(false);

  const [showRetail, setShowRetail] = useState(false);
  const [showHouseholdMenu, setShowHouseholdMenu] = useState(false);
  const [showSMEMenu, setShowSMEMenu] = useState(false);
  const [showCorporate, setShowCorporate] = useState(false);

  const btnRef = React.useRef<HTMLButtonElement>();
  const menuRef = React.useRef<HTMLDivElement>();

  const openMenu = () => {
    setOpen(true);
    btnRef?.current?.classList.toggle("open");
  };

  const handleClose = () => {
    btnRef?.current?.classList.toggle("open");
    setOpen(false),
      setShowCorporate(false),
      setShowRetail(false),
      setShowHouseholdMenu(false),
      setShowSMEMenu(false);
  };

  const MainMenu = () => (
    <div className="h-[screen] w-[80vw] space-y-5">
      <div
        onClick={() => {
          setShowRetail(!showRetail);
        }}
        className="flex items-center justify-between pt-2"
      >
        <div className="pl-4 font-semibold">Retail</div>
        <div className="px-4">
          <MdOutlineArrowForwardIos />
        </div>
      </div>

      <div
        onClick={() => setShowHouseholdMenu(!showHouseholdMenu)}
        className="flex items-center justify-between"
      >
        <div className="pl-4 font-semibold">Lorem HouseHold Business</div>
        <div className="px-4">
          <MdOutlineArrowForwardIos />
        </div>
      </div>

      <div
        onClick={() => setShowSMEMenu(!showSMEMenu)}
        className="flex items-center justify-between"
      >
        <div className="pl-4 font-semibold">Lorem SMEs</div>
        <div className="px-4">
          <MdOutlineArrowForwardIos />
        </div>
      </div>

      <div
        onClick={() => setShowCorporate(!showCorporate)}
        className="flex items-center justify-between"
      >
        <div className="pl-4 font-semibold">Lorem Corporate</div>
        <div className="px-4">
          <MdOutlineArrowForwardIos />
        </div>
      </div>

      <div className="pl-4 pb-1 font-semibold">Lorem VPBank Diamond</div>

      <div className="flex items-center justify-center px-4">
        <input
          placeholder="Search keyword"
          className="input-field h-8 w-full rounded-md border-2 px-2"
        />
      </div>

      <div className="flex items-center justify-center">
        <Image src={neoLogo} width="150" height="30" alt="logo" />
      </div>

      <div className="flex flex-col items-center justify-evenly space-y-2 whitespace-nowrap">
        <Link href="/compare">
          <a className="px-4">Compare Cards</a>
        </Link>

        <Link href="/about">
          <a className="px-4">About Us</a>
        </Link>

        <div>
          <a className="px-4">Lorem Investor Relations</a>
        </div>

        <div>
          <a className="px-4">News</a>
        </div>

        <div>
          <a className="px-4">Lorem Recruit</a>
        </div>
      </div>

      <div onClick={() => handleClose()}>
        <Link href={"/favorites"}>
          <div className="flex items-center justify-start space-x-2 px-4 pt-1">
            <div className="text-xl text-red-400">
              <FaHeart />
            </div>
            <p>Favorites</p>
          </div>
        </Link>
      </div>

      <Link href={""}>
        <div className="flex items-center justify-start space-x-2 px-4">
          <div className="text-xl">
            <FaRegQuestionCircle />
          </div>
          <p>Lorem Support</p>
        </div>
      </Link>

      <Link href={""}>
        <div className="flex items-center justify-start space-x-2 px-4">
          <div className="text-xl">
            <HiOutlineLocationMarker />
          </div>
          <p>Lorem Branches & ATMs</p>
        </div>
      </Link>
    </div>
  );

  const RetailMenu = () => (
    <div className="w-[80vw]">
      <div className="flex w-full" onClick={() => setShowRetail(!showRetail)}>
        <div className="p-3">
          <MdOutlineArrowBackIos />
        </div>
        <div className="p-2 text-xl font-semibold text-iwanttoColor">
          Retail
        </div>
      </div>

      <div className="flex flex-col items-start justify-center">
        <div
          onClick={() => handleClose()}
          className="w-full p-3 pl-6 pt-6 font-semibold"
        >
          <Link href={"/cardservices"}>
            <p className="font-semibold">Card Services</p>
          </Link>
        </div>

        <div
          className="w-full p-3 pl-6 font-semibold"
          onClick={() => handleClose()}
        >
          Lorem Debit Card
        </div>
        <div
          className="w-full p-3 pl-6 font-semibold"
          onClick={() => handleClose()}
        >
          Lorem Loans
        </div>
        <div
          className="w-full p-3 pl-6 font-semibold"
          onClick={() => handleClose()}
        >
          Lorem Savings
        </div>
        <div
          className="w-full p-3 pl-6 font-semibold"
          onClick={() => handleClose()}
        >
          Lorem Account
        </div>
        <div
          className="w-full p-3 pl-6 font-semibold"
          onClick={() => handleClose()}
        >
          Lorem E-Banking Services
        </div>
        <div
          className="w-full p-3 pl-6 font-semibold"
          onClick={() => handleClose()}
        >
          Lorem Insurance
        </div>
        <div
          className="w-full p-3 pl-6 font-semibold"
          onClick={() => handleClose()}
        >
          Lorem Personal Services
        </div>
        <div
          className="w-full p-3 pl-6 font-semibold"
          onClick={() => handleClose()}
        >
          Lorem VPBank Loyalty
        </div>
        <div
          className="w-full p-3 pl-6 font-semibold"
          onClick={() => handleClose()}
        >
          Lorem VPBank Diamond
        </div>
      </div>
    </div>
  );

  const HouseholdMenu = () => (
    <div className="w-[415px]">
      <div className="flex items-center justify-start">
        <div
          onClick={() => setShowHouseholdMenu(!showHouseholdMenu)}
          className="p-2"
        >
          <MdOutlineArrowBackIos />
        </div>
        <div className="p-2 font-semibold text-iwanttoColor">
          Lorem Household
        </div>
      </div>

      <div className="space-y-3 px-5">
        <div className="ml-3">Lorem Unsecured Loan</div>
        <div className="ml-3">Lorem Secured Loans</div>
        <div className="ml-3">Lorem Bank Assurance</div>
        <div className="ml-3">Lorem Card Services</div>
      </div>
    </div>
  );

  const SMEMenu = () => (
    <div className="w-[415px]">
      <div className="flex items-center justify-start">
        <div onClick={() => setShowSMEMenu(!showSMEMenu)} className="p-2">
          <MdOutlineArrowBackIos />
        </div>
        <div className="p-2 font-semibold text-iwanttoColor">Lorem SME</div>
      </div>

      <div className="space-y-3 px-5">
        <div className="ml-3">Lorem Account Service</div>
        <div className="ml-3">Lorem Business Loans</div>
        <div className="ml-3">Lorem VPBIZ Payment Card</div>
        <div className="ml-3">Lorem Card Payment Services</div>
        <div className="ml-3">Lorem Payment Service</div>
        <div className="ml-3">Lorem Trade Finance</div>
        <div className="ml-3">Lorem Deposit Products</div>
        <div className="ml-3">Lorem Online Chiropractic</div>
        <div className="ml-3">Lorem Online Disbursement</div>
        <div className="ml-3">Lorem Business Account Online</div>
      </div>
    </div>
  );

  const CorporateMenu = () => (
    <div className="w-[415px]">
      <div className="flex items-center justify-start">
        <div onClick={() => setShowCorporate(!showCorporate)} className="p-2">
          <MdOutlineArrowBackIos />
        </div>
        <div className="p-2 font-semibold text-iwanttoColor">
          Lorem Corporate
        </div>
      </div>

      <div className="space-y-3 px-5">
        <div className="ml-3">Lorem Guarantee</div>
        <div className="ml-3">Lorem Loans</div>
        <div className="ml-3">Lorem Services and Trade Finance</div>
        <div className="ml-3">Lorem Account services</div>
        <div className="ml-3">Lorem Card Services</div>
        <div className="ml-3">Lorem Financial Market Products</div>
        <div className="ml-3">Lorem Internet Banking</div>
        <div className="ml-3">Lorem Email Transactions</div>
      </div>
    </div>
  );

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between bg-white p-2 sm:px-4 lg:hidden">
      <div className="cursor-pointer p-1">
        <Image
          src={logo}
          width="150"
          height="30"
          alt="logo"
          onClick={() => router.push("/")}
        />
      </div>
      <div className="flex h-full items-center justify-end space-x-6">
        <div className="text-xl text-iwanttoColor">
          <BsSearch />
        </div>
        <div className="divide-slate-300 border-x-2 px-6 text-2xl text-iwanttoColor">
          <FaMobileAlt />
        </div>
        <button
          ref={btnRef as any}
          onClick={() => openMenu()}
          id="menu-btn"
          className="hamburger align-center top-1 right-1 z-50 flex flex-col justify-center focus:outline-none lg:hidden"
        >
          <span className="hamburger-top z-50"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade easing={"enter"} in={open}>
          <Box sx={style}>
            <motion.div
              initial={{ x: -80 }}
              animate={{
                x: 0,
                transition: {
                  duration: 0.3,
                },
              }}
              id="menu"
              className="items-left mt-4 flex flex-col justify-center space-y-4 overflow-y-auto"
            >
              {!showRetail &&
                !showHouseholdMenu &&
                !showSMEMenu &&
                !showCorporate && <MainMenu />}
              {showRetail && <RetailMenu />}
              {showHouseholdMenu && <HouseholdMenu />}
              {showSMEMenu && <SMEMenu />}
              {showCorporate && <CorporateMenu />}
            </motion.div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default SideNavModal;
