import { Menu } from "antd";
import Image from "next/image";
import { NextPage } from "next/types";
import { useState } from "react";
import VPBankNeo_Logo from "../public/VPBankNeo_Logo.png";
import VPBank_Logo from "../public/VPBank_Logo.svg";
import RetailDropdown from "./RetailDropdown";
import { motion } from "framer-motion";

const style = {
  color: "black",
  fontSize: "1.1rem",
};

const dropdownStyle = {
  color: "black",
  fontSize: "1.1rem",
  textDecoration: "none",
  padding: "0.4rem 2rem",
};

const NavbarBottom: NextPage = () => {
  const [retailDrodown, setRetailDropdown] = useState(false);
  const [householdDropdown, setHouseholdDropdown] = useState(false);
  const [smeDropdown, setSmeDropdown] = useState(false);
  const [corporateDropdown, setCorporateDropdown] = useState(false);

  const onSearch = (value: string) => {};

  return (
    <>
      <div style={{ position: "relative", zIndex: 1 }}>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["mail"]}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#FFFFFF",
            height: "4rem",
            paddingBottom: 0,
          }}
        >
          <Menu.Item>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image src={VPBank_Logo} width="150" height="37" />
            </div>
          </Menu.Item>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 4rem",
              height: "100%",
            }}
          >
            <Menu.Item
              key="retail"
              style={style}
              onMouseEnter={() => {
                setRetailDropdown(!retailDrodown);
              }}
            >
              Retail
            </Menu.Item>
            <Menu.Item key="household" style={style}>
              Household
            </Menu.Item>
            <Menu.Item key="sme" style={style}>
              SME
            </Menu.Item>
            <Menu.Item key="corporate" style={style}>
              Corporate
            </Menu.Item>
            <Menu.Item key="vp_bank" style={style}>
              VPBank Diamond
            </Menu.Item>
          </div>
          <Menu.Item key="neo_logo" style={style}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderLeft: "1px solid #E0E0E0",
                marginLeft: "1rem",
                padding: "0 1rem",
              }}
            >
              <Image src={VPBankNeo_Logo} width="200" height="40" />
            </div>
          </Menu.Item>
        </Menu>
      </div>
      {retailDrodown && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut" }}
        >
          <RetailDropdown
            dropdownStyle={dropdownStyle}
            leave={() => setRetailDropdown(false)}
          />
        </motion.div>
      )}
    </>
  );
};

export default NavbarBottom;
