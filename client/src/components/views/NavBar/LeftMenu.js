import React from "react";
import { Menu } from "antd";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu() {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home">
        <a href="/">Home</a>
      </Menu.Item>
      {}
      <Menu.Item key="favorite">
        <a href="/favorites">My Favorite</a>
      </Menu.Item>
      
    </Menu>
  );
}

export default LeftMenu;
