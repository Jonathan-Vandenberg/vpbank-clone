import {
  EnvironmentOutlined,
  HeartOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import Search from "antd/lib/input/Search";

const style = {
  color: "rgb(196,245,208)",
};

const NavbarTop = () => {
  const onSearch = (value: string) => {};

  return (
    <div>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["mail"]}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: `linear-gradient(to right, rgb(2,89,173), rgb(0,183,78))`,
        }}
      >
        <Menu.Item key="about" style={style}>
          About us
        </Menu.Item>
        <Menu.Item key="investor" style={style}>
          Investor Relations
        </Menu.Item>
        <Menu.Item key="news" style={style}>
          News
        </Menu.Item>
        <Menu.Item key="recruit" style={style}>
          Recruit
        </Menu.Item>
        <Menu.Item key="contact" style={style}>
          <Search
            key="search"
            placeholder="Search Keyword"
            onSearch={onSearch}
            style={{
              width: 200,
              verticalAlign: "middle",
              borderRadius: 20,
            }}
          />
        </Menu.Item>
        <Menu.Item
          key="favourite"
          style={style}
          icon={<HeartOutlined style={{ color: "rgb(244, 247, 248)" }} />}
        >
          Favourite
        </Menu.Item>
        <Menu.Item
          key="support"
          style={style}
          icon={
            <QuestionCircleOutlined style={{ color: "rgb(244, 247, 248)" }} />
          }
        >
          Support
        </Menu.Item>
        <Menu.Item
          key="branches"
          style={style}
          icon={<EnvironmentOutlined style={{ color: "rgb(244, 247, 248)" }} />}
        >
          Branches & ATMs
        </Menu.Item>
        <Menu.Item key="language" style={style}>
          Language
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default NavbarTop;
