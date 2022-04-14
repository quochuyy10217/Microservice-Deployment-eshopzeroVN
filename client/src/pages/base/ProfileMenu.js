import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { UnorderedListOutlined, LogoutOutlined } from "@ant-design/icons";

const ProfileMenu = () => {
  return (
    <Menu>
      <Menu.Item key="1">
        <Link to="/order">
          <UnorderedListOutlined />
          Đơn hàng
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/logout">
          <LogoutOutlined />
          Đăng xuất
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default ProfileMenu;
