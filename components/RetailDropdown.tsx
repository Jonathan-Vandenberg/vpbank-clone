import Link from "next/link";
import { NextPage } from "next/types";

interface Props {
  dropdownStyle: React.CSSProperties;
}

const RetailDropdown: NextPage<Props> = ({ dropdownStyle }) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "60vw",
        height: "auto",
        backgroundColor: "white",
        left: "20rem",
        padding: "1rem",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={dropdownStyle}>
        <Link href={"/"}>
          <a style={{ color: "black" }}>Card Services</a>
        </Link>
      </div>
      <div style={dropdownStyle}>
        <Link href={"/"}>
          <a style={{ color: "black" }}>Debit Card</a>
        </Link>
      </div>
      <div style={dropdownStyle}>
        <Link href={"/"}>
          <a style={{ color: "black" }}>Loans</a>
        </Link>
      </div>
      <div style={dropdownStyle}>
        <Link href={"/"}>
          <a style={{ color: "black" }}>Savings</a>
        </Link>
      </div>
      <div style={dropdownStyle}>
        <Link href={"/"}>
          <a style={{ color: "black" }}>Account</a>
        </Link>
      </div>
      <div style={dropdownStyle}>
        <Link href={"/"}>
          <a style={{ color: "black" }}>E-Banking Services</a>
        </Link>
      </div>
      <div style={dropdownStyle}>
        <Link href={"/"}>
          <a style={{ color: "black" }}>Insurance</a>
        </Link>
      </div>
      <div style={dropdownStyle}>
        <Link href={"/"}>
          <a style={{ color: "black" }}>Personal Services</a>
        </Link>
      </div>
      <div style={dropdownStyle}>
        <Link href={"/"}>
          <a style={{ color: "black" }}>VPBank Loyalty</a>
        </Link>
      </div>
      <div style={dropdownStyle}>
        <Link href={"/"}>
          <a style={{ color: "black" }}>VPBank Diamond</a>
        </Link>
      </div>
    </div>
  );
};

export default RetailDropdown;
