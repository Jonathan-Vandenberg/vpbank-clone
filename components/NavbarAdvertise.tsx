import CloseOutlined from "@ant-design/icons/lib/icons/CloseOutlined";
import Button from "antd/lib/button";
import Menu from "antd/lib/menu";
import { NextPage } from "next/types";

interface Props {
  onClick: () => void;
}

const NavbarAdvertise: NextPage<Props> = ({ onClick }) => {
  return (
    <div>
      <Menu
        mode="horizontal"
        style={{
          backgroundColor: "#EBFAEF",
        }}
      >
        <div
          style={{
            width: "95vw",
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
            height: "auto",
          }}
        >
          <h3>
            VPBank launches a financial brand dedicated to the breakthrough
            generation: VPBank Prime
          </h3>
        </div>

        <Button
          onClick={onClick}
          type="text"
          icon={<CloseOutlined />}
          style={{
            border: "none",
            cursor: "pointer",
            width: "auto",
            height: "auto",
            borderRadius: "100px",
            boxShadow: "none",
          }}
        />
      </Menu>
    </div>
  );
};

export default NavbarAdvertise;
