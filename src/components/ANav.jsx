import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
const { Item } = Menu;
function ANav() {
  return (
    <>
      <Menu mode="inline">
        <Item key="1">
          <Link style={{ paddingLeft: "0.5em" }} to="/">
            Home
          </Link>
        </Item>
        <Item key="2">
          <Link style={{ paddingLeft: "0.5em" }} to="/about">
            About
          </Link>
        </Item>
        <Item key="3">
          <Link style={{ paddingLeft: "0.5em" }} to="/service">
            Service
          </Link>
        </Item>
        <Item key="4">
          <Link style={{ paddingLeft: "0.5em" }} to="/contact">
            Contact
          </Link>
        </Item>
      </Menu>
    </>
  );
}

export default ANav;
