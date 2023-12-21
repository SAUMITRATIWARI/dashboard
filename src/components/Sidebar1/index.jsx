import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const Sidebar1 = (props) => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-[29px] md:h-auto my-1 object-cover w-1/5"
          src="images/img_dashboardlayout.png"
          alt="dashboardlayout"
        />
      ),
      label: "Dashboard",
      href: "/userdashboard",
      active: window.location.pathname === "/userdashboard",
    },
    {
      icon: (
        <Img
          className="h-[31px]"
          src="images/img_settings.svg"
          alt="settings"
        />
      ),
      label: "Database",
      href: "/admindatabase",
      active: window.location.pathname === "/admindatabase",
    },
    {
      icon: (
        <Img
          className="h-8 w-[33px]"
          src="images/img_search.svg"
          alt="search"
        />
      ),
      label: "Setting",
      href: "/adminsetting",
      active: window.location.pathname === "/adminsetting",
    },
  ];

  return (
    <>
      <Sidebar
        onClick={() => collapseSidebar(!collapsed)}
        className={props.className}
      >
        <Menu
          menuItemStyles={{
            button: {
              padding: 0,
              gap: "14px",
              marginTop: "17px",
              paddingBottom: "31px",
              paddingLeft: "41px",
              paddingRight: "31px",
              color: "#000000",
              fontSize: "26px",
              fontFamily: "Sanchez",
            },
          }}
          className="flex flex-col items-center justify-start mt-3.5 w-full"
        >
          {sideBarMenu?.map((menu, i) => (
            <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
              {menu.label}
            </MenuItem>
          ))}
        </Menu>
        {!collapsed && (
          <Img
            className="h-9 mb-[665px] ml-11 md:ml-[0] mr-44 mt-[33px]"
            src="images/img_reply.svg"
            alt="reply"
          />
        )}
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
