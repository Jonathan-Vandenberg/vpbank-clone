import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { GrMapLocation } from "react-icons/gr";
import VPBank_Logo from "/Users/jonathanvandenberg/2022/VPBank/public/VPBank_Logo.svg";
import CollapseMenus from "./CollapseMenus";
import UnCollapassedMenu from "./UnCollapassedMenu";
import facebookLogo from "../../../public/social-media/facebook.svg";
import zaloLogo from "../../../public/social-media/zalo.svg";
import youtubeLogo from "../../../public/social-media/youtube.svg";
import appStoreLogo from "../../../public/social-media/appStoreGooglePlayLogo.png";

const Footer = () => {
  const router = useRouter();

  return (
    <>
      <motion.div
        className="pt-12"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.6,
          },
        }}
      >
        <div className="h-[2px] bg-gradient-to-r from-startColor to-endColor"></div>
        <div className="drop-shadow lg:flex lg:items-center lg:justify-evenly">
          <div className="flex items-center justify-center p-6">
            <div className="p-3 text-2xl">
              <BsFillTelephoneOutboundFill />
            </div>
            <p className="p-3 text-xl font-bold text-iwanttoColor">
              1900545415
            </p>
          </div>
          <div className="flex items-center justify-center bg-gradient-to-r from-startColor to-endColor p-6">
            <div className="rounded-full bg-white p-3 text-3xl">
              <GrMapLocation />
            </div>
            <p className="p-3 text-xl font-semibold text-white">
              Find ATMs and Branches
            </p>
          </div>
          <div className="flex items-center justify-center p-6">
            <div className="p-3 text-3xl">
              <AiOutlineMail />
            </div>
            <p className="p-3 text-xl font-bold text-iwanttoColor">Email Us</p>
          </div>
        </div>
      </motion.div>
      <div className="bg-body">
        <div className="">
          <CollapseMenus />
          <UnCollapassedMenu />
        </div>
        <div className="flex flex-col items-center justify-center space-y-6 py-8 px-28 lg:flex lg:flex-row lg:items-center lg:justify-evenly lg:space-y-0 lg:space-x-6">
          <div className="hover:cursor-pointer">
            <Image
              src={VPBank_Logo}
              width="150"
              height="30"
              alt="logo"
              onClick={() => router.push("/")}
            />
          </div>
          <div className="space-y-1">
            <p className="whitespace-nowrap text-center text-sm font-semibold">
              Vietnam Prosperity Joint-Stock Commercial Bank (VPBank)
            </p>
            <p className="text-grey-800 text-md text-center">
              Head Office: 89 Lang Ha Str., Dong Da Dist., Ha Noi
            </p>
          </div>
          <div className="flex items-center justify-center space-x-6">
            <div>
              <Image
                src={facebookLogo}
                width={35}
                height={35}
                alt="facebook logo"
              />
            </div>
            <div>
              <Image
                src={youtubeLogo}
                width={35}
                height={35}
                alt="youtube logo"
              />
            </div>
            <div>
              <Image src={zaloLogo} width={35} height={35} alt="zalo logo" />
            </div>
          </div>

          <div className=" space-y-2 lg:flex lg:flex-col lg:items-center lg:justify-center">
            <div>
              <p className="text-md  text-center font-bold text-gray-600">
                VPBANK MOBILE APP
              </p>
            </div>
            <div>
              <Image
                src={appStoreLogo}
                height={40}
                width={250}
                alt="app store logo"
              />
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-startColor to-endColor py-2 md:py-4">
          <div className="mx-auto flex flex-col-reverse items-center justify-evenly space-y-2 px-3 text-sm md:container  md:flex-row md:space-y-0">
            <p className="text-white">
              © Copyright 2019 VPBank. All rights reserved.
            </p>

            <div className="flex items-center justify-center space-x-2 md:flex-row">
              <p className="text-md cursor-pointer text-center text-white hover:text-green-300">
                Safe and Secure
              </p>
              <p className="text-white">|</p>
              <p className="text-md cursor-pointer text-center text-white hover:text-green-300">
                Sitemap
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
