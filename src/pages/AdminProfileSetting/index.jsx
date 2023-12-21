import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Text } from "components";
import Header6 from "components/Header6";
import Sidebar1 from "components/Sidebar1";

const AdminProfileSettingPage = () => {
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
      <div className="bg-white-A700 font-roboto h-[1024px] mx-auto pt-[37px] relative w-full">
        <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto md:px-5 right-[0] w-[83%]">
          <div className="flex flex-col items-end justify-start w-full">
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
        <div className="absolute bottom-[0] font-sanchez h-[934px] left-[0] md:px-5 w-[18%]">
          <Sidebar1 className="!sticky !w-[250px] bg-gray-700_35 flex h-screen md:hidden inset-[0] justify-center m-auto overflow-auto top-[0]" />
          <Text
            className="absolute right-[0] text-2xl md:text-[22px] text-black-900_01 sm:text-xl top-[24%]"
            size="txtSanchezRegular24"
          >
            User Log History
          </Text>
        </div>
      </div>
    </>
  );
};

export default AdminProfileSettingPage;
