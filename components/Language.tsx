import { UserOutlined } from "@ant-design/icons";
import { Dropdown, Menu, message, Space } from "antd";
import "antd/dist/antd.css";
import "./index.css";

const handleMenuClick = (e: any) => {
  message.info("Click on menu item.");
  console.log("click", e);
};

const menu = (
  <Menu
    onClick={handleMenuClick}
    items={[
      {
        label: "2nd menu item",
        key: "2",
        icon: <UserOutlined />,
      },
    ]}
  />
);

const Language = () => (
  <Space wrap>
    <Dropdown.Button
      overlay={menu}
      placement="bottom"
      icon={<UserOutlined />}
    ></Dropdown.Button>
  </Space>
);

export default Language;
