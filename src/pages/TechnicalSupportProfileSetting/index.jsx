import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import Header6 from "components/Header6";

const TechnicalSupportProfileSettingPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-[29px] md:h-auto object-cover w-[21%]"
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
          className="h-[29px] md:h-auto object-cover w-[18%]"
          src="images/img_twotickets.png"
          alt="twotickets"
        />
      ),
      label: "My Ticket",
      href: "/technicalsupportmyticket",
      active: window.location.pathname === "/technicalsupportmyticket",
    },
    {
      icon: (
        <Img
          className="h-[26px]"
          src="images/img_user_black_900_01.svg"
          alt="user"
        />
      ),
      label: "Performance",
      href: "/technicalsupportperformance",
      active: window.location.pathname === "/technicalsupportperformance",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-sanchez items-center justify-end mx-auto pt-[37px] w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar
            onClick={() => collapseSidebar(!collapsed)}
            className="!sticky !w-[250px] bg-gray-700_35 flex h-screen md:hidden justify-start md:mt-0 mt-[53px] overflow-auto md:px-5 top-[0]"
          >
            <Menu
              menuItemStyles={{
                button: {
                  padding: 0,
                  paddingBottom: "31px",
                  paddingLeft: "32px",
                  paddingRight: "31px",
                  gap: "13px",
                  marginTop: "6px",
                  color: "#000000",
                  fontSize: "24px",
                },
              }}
              className="flex flex-col items-center justify-start mb-[747px] mt-[22px] w-full"
            >
              {sideBarMenu?.map((menu, i) => (
                <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </Menu>
          </Sidebar>
          <div className="flex flex-1 flex-col font-roboto items-end justify-start md:px-5 w-full">
            <Header6 className="bg-cyan-300 flex flex-row items-center justify-center mr-[26px] w-full" />
            <div className="flex flex-col font-sanchez gap-[7px] items-start justify-start mt-[34px] w-[96%] md:w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900_01"
                size="txtSanchezRegular36"
              >
                User Profile
              </Text>
              <Text
                className="bg-cyan-300 h-[59px] justify-center pb-1.5 pl-[31px] pr-[35px] pt-[18px] sm:px-5 md:text-2xl sm:text-[22px] text-[26px] text-black-900_01 w-[231px]"
                size="txtSanchezRegular26"
              >
                Edit Account
              </Text>
              <div className="md:h-[1068px] h-[528px] relative w-full">
                <div className="absolute md:h-[1068px] h-[528px] inset-[0] justify-center m-auto w-full">
                  <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                      <div className="bg-gray-400 flex md:flex-1 flex-col items-start justify-start py-[7px] w-1/2 md:w-full">
                        <div className="bg-blue_gray-400 flex flex-col items-start justify-end p-[3px] w-full">
                          <Text
                            className="ml-4 md:ml-[0] mt-[7px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                            size="txtSanchezRegular26WhiteA700"
                          >
                            Username
                          </Text>
                        </div>
                        <Text
                          className="bg-blue_gray-400 h-12 justify-center mt-[9px] pb-[3px] pl-3 sm:pr-5 pr-[35px] pt-2.5 md:text-2xl sm:text-[22px] text-[26px] text-white-A700 w-[568px]"
                          size="txtSanchezRegular26WhiteA700"
                        >
                          Current Password
                        </Text>
                        <div className="bg-blue_gray-400 flex flex-col items-start justify-end mt-[9px] p-[3px] w-full">
                          <Text
                            className="ml-2 md:ml-[0] mt-[7px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                            size="txtSanchezRegular26WhiteA700"
                          >
                            New Password
                          </Text>
                        </div>
                        <div className="bg-blue_gray-400 flex flex-col items-start justify-start mt-[9px] pt-3 px-3 w-full">
                          <Text
                            className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                            size="txtSanchezRegular26WhiteA700"
                          >
                            Comfirm Password
                          </Text>
                        </div>
                        <div className="bg-blue_gray-400 flex flex-col items-start justify-end mt-[9px] p-[3px] w-full">
                          <Text
                            className="ml-2 md:ml-[0] mt-[7px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                            size="txtSanchezRegular26WhiteA700"
                          >
                            Email
                          </Text>
                        </div>
                        <div className="h-12 md:h-14 mt-2 relative w-full">
                          <div className="absolute bg-blue_gray-400 h-12 inset-[0] justify-center m-auto w-full"></div>
                          <Text
                            className="absolute left-[2%] md:text-2xl sm:text-[22px] text-[26px] text-white-A700 top-[0]"
                            size="txtSanchezRegular26WhiteA700"
                          >
                            Real Name
                          </Text>
                        </div>
                        <div className="bg-blue_gray-400 flex flex-col items-start justify-end mt-[9px] p-[3px] w-full">
                          <Text
                            className="ml-2 md:ml-[0] mt-[7px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                            size="txtSanchezRegular26WhiteA700"
                          >
                            Access Level
                          </Text>
                        </div>
                        <Button
                          className="cursor-pointer leading-[normal] mb-[3px] min-w-[297px] ml-3 md:ml-[0] mt-[63px] text-2xl md:text-[22px] text-center sm:text-xl"
                          shape="round"
                          color="cyan_300"
                          size="lg"
                          variant="fill"
                        >
                          Update User
                        </Button>
                      </div>
                      <div className="bg-gray-400 h-[528px] w-1/2"></div>
                    </div>
                  </div>
                  <div className="absolute bg-white-A700_01 bottom-[36%] h-12 right-[0] w-1/2"></div>
                  <div className="absolute bg-white-A700_01 bottom-1/4 h-12 right-[0] w-1/2"></div>
                  <div className="absolute bg-white-A700_01 bottom-[14%] h-12 right-[0] w-1/2"></div>
                </div>
                <div className="absolute bg-white-A700_01 h-12 inset-y-[0] my-auto right-[0] w-1/2"></div>
                <div className="absolute bg-white-A700_01 h-12 right-[0] top-[34%] w-1/2"></div>
                <div className="absolute bg-white-A700_01 h-12 right-[0] top-[1%] w-1/2"></div>
                <div className="absolute bg-white-A700_01 h-12 right-[0] top-[12%] w-1/2"></div>
                <div className="absolute bg-white-A700_01 h-12 right-[0] top-[23%] w-1/2"></div>
                <Text
                  className="absolute bg-blue_gray-400 bottom-[14%] h-12 justify-center left-[0] pl-[11px] sm:pr-5 pr-[35px] py-1.5 md:text-2xl sm:text-[22px] text-[26px] text-white-A700 w-[568px]"
                  size="txtSanchezRegular26WhiteA700"
                >
                  Project Access Level
                </Text>
              </div>
            </div>
            <div className="bg-cyan-300 h-[50px] mt-[231px] w-full"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnicalSupportProfileSettingPage;
