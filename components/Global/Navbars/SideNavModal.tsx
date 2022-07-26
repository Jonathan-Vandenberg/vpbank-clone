import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Link from "next/link";
import router from "next/router";
import { NextPage } from "next/types";
import * as React from "react";
import logo from "/Users/jonathanvandenberg/2022/VPBank/public/VPBank_logo.svg";
import Image from "next/image";

interface Props {
  menuRef: React.RefObject<HTMLDivElement>;
  onClick: () => void;
}

const style = {
  position: "absolute" as "absolute",
  top: 0,
  left: 0,
  width: 400,
  height: "100vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
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
    <div className="sticky top-0 z-50 flex h-12 items-center justify-between bg-white pt-2 sm:px-4 lg:hidden">
      <div className="p-10">
        <Image
          src={logo}
          width="150"
          height="30"
          alt="logo"
          onClick={() => router.push("/")}
        />
      </div>

      <button
        ref={btnRef as any}
        onClick={openMenu}
        id="menu-btn"
        className="hamburger z-50 block focus:outline-none lg:hidden"
      >
        <span className="hamburger-top z-50"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
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
        <Fade in={open}>
          <Box sx={style}>
            <div ref={menuRef as any} id="menu">
              <Link href={"/individual"}>Individual</Link>
              <Link href={"/household-business"}>HouseHold Business</Link>
              <Link href={"/smes"}>SMEs</Link>
              <Link href={"/big-business"}>Big Business</Link>
              <Link href={"/vpbank-diamond"}>VPBank Diamond</Link>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default SideNavModal;
