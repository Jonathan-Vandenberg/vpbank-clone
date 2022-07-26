import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Link from "next/link";
import router from "next/router";
import { NextPage } from "next/types";
import * as React from "react";
import logo from "/Users/jonathanvandenberg/2022/VPBank/public/VPBank_Logo.svg";
import Image from "next/image";
import { FaMobileAlt } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { motion } from "framer-motion";
import { MdOutlineArrowForwardIos } from "react-icons/md";

interface Props {
  menuRef: React.RefObject<HTMLDivElement>;
  onClick: () => void;
}

const style = {
  position: "absolute" as "absolute",
  top: 0,
  left: 0,
  width: "85vw",
  height: "100vh",
  bgcolor: "background.paper",
  border: "none",
};

const SideNavModal: NextPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false), openMenu();
  };

  React.useEffect(() => {
    const menuButton = document.getElementById(
      "menu-btn"
    ) as HTMLButtonElement | null;
    const menu = document.getElementById("menu") as HTMLDivElement | null;
    menuButton?.addEventListener("click", () => {
      menuButton?.classList.toggle("open");
      handleOpen();
    });
  }, []);

  const btnRef = React.useRef<HTMLButtonElement>();
  const menuRef = React.useRef<HTMLDivElement>();

  const openMenu = () => {
    btnRef?.current?.classList.toggle("open");
  };

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between bg-white pt-2 sm:px-4 lg:hidden">
      <div className="">
        <Image
          src={logo}
          width="150"
          height="30"
          alt="logo"
          onClick={() => router.push("/")}
        />
      </div>
      <div className="flex h-full items-center justify-end space-x-6">
        <div className="">
          <BsSearch />
        </div>
        <div className=" divide-slate-300 border-x-2 px-6 text-2xl">
          <FaMobileAlt />
        </div>
        <button
          ref={btnRef as any}
          onClick={openMenu}
          id="menu-btn"
          className="hamburger align-center z-50 flex flex-col justify-center focus:outline-none lg:hidden"
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
                  duration: 0.5,
                },
              }}
              ref={menuRef as any}
              id="menu"
              className="items-left mt-4 flex flex-col justify-center space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="pl-4 font-semibold">Retail</div>
                <div className="px-4">
                  <MdOutlineArrowForwardIos />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="pl-4 font-semibold">HouseHold Business</div>
                <div className="px-4">
                  <MdOutlineArrowForwardIos />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="pl-4 font-semibold">SMEs</div>
                <div className="px-4">
                  <MdOutlineArrowForwardIos />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="pl-4 font-semibold">Big Business</div>
                <div className="px-4">
                  <MdOutlineArrowForwardIos />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="pl-4 font-semibold">VPBank Diamond</div>
                <div className="px-4">
                  <MdOutlineArrowForwardIos />
                </div>
              </div>
            </motion.div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default SideNavModal;
