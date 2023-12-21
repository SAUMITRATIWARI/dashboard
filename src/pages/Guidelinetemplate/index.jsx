import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const GuidelinetemplatePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-sanchez items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-end pt-[7px] w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
            <Sidebar className="!sticky !w-[250px] bg-gray-700_4c flex h-screen md:hidden justify-start md:mt-0 mt-[81px] overflow-auto md:px-5 top-[0]">
              <Text
                className="ml-2.5 md:ml-[0] mr-[67px] mt-[3px] text-black-900_01 text-center text-lg"
                size="txtSanchezRegular18"
              >
                Menu div 250 x 934{" "}
              </Text>
              <Menu
                menuItemStyles={{
                  button: {
                    padding: 0,
                    gap: "19px",
                    marginTop: "34px",
                    paddingBottom: "18px",
                    color: "#000000",
                    fontSize: "26px",
                    paddingLeft: "18px",
                    paddingRight: "18px",
                  },
                }}
                renderExpandIcon={() => (
                  <Img
                    className="h-[19px] mt-2.5 w-3"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                )}
                className="flex flex-col items-center justify-start mb-[724px] mt-2 w-full"
              >
                <SubMenu
                  icon={
                    <Img
                      className="h-[29px] md:h-auto mt-[5px] object-cover w-[22%]"
                      src="images/img_dashboardlayout.png"
                      alt="dashboardlayout"
                    />
                  }
                  label={
                    <Text className="md:text-2xl sm:text-[22px]">
                      Dashboard
                    </Text>
                  }
                >
                  <MenuItem>Submenu Item</MenuItem>
                </SubMenu>
                <MenuItem
                  icon={
                    <Img
                      className="h-7 md:h-auto object-cover w-[27px]"
                      src="images/img_newticket.png"
                      alt="newticket"
                    />
                  }
                  active={window.location.pathname === "/usernewticket"}
                  href="/usernewticket"
                >
                  <Text className="mb-[15px] md:text-2xl sm:text-[22px]">
                    New Ticket
                  </Text>
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      className="h-7 md:h-auto object-cover w-[27px]"
                      src="images/img_twotickets.png"
                      alt="twotickets"
                    />
                  }
                  active={
                    window.location.pathname === "/technicalsupportmyticket"
                  }
                  href="/technicalsupportmyticket"
                >
                  <Text
                    className="common-pointer md:text-2xl sm:text-[22px]"
                    onClick={() => navigate("/usermyticket")}
                  >
                    My Ticket
                  </Text>
                </MenuItem>
              </Menu>
            </Sidebar>
            <div className="flex flex-1 flex-col gap-[29px] justify-start md:px-5 w-full">
              <header className="bg-cyan-300 flex md:flex-col flex-row md:gap-5 items-center justify-center md:ml-[0] ml-[121px] mr-[33px] w-full">
                <Text
                  className="mb-7 text-black-900_01 text-center text-lg"
                  size="txtSanchezRegular18"
                >
                  Header 1440 x 90{" "}
                </Text>
                <div className="flex md:flex-1 flex-row font-roboto gap-[17px] items-center justify-center md:ml-[0] ml-[682px] md:mt-0 mt-[23px] w-[16%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-[48%]">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[27px] items-start justify-end p-1 w-full"
                      style={{
                        backgroundImage: "url('images/img_group1.svg')",
                      }}
                    >
                      <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[5px] mt-0.5 w-[71%] md:w-full">
                        <Text
                          className="text-white-A700 text-xs"
                          size="txtRobotoBold12"
                        >
                          BM
                        </Text>
                        <Text
                          className="text-black-900_01 text-xs"
                          size="txtRobotoBold12Black90001"
                        >
                          BI
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="h-7"
                    src="images/img_vector.svg"
                    alt="vector"
                  />
                  <Img className="h-7" src="images/img_lock.svg" alt="lock" />
                </div>
                <Img
                  className="h-[25px] mb-0.5 md:ml-[0] ml-[15px] md:mt-0 mt-[25px]"
                  src="images/img_user.svg"
                  alt="user"
                />
              </header>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="md:h-[882px] h-[884px] relative w-full">
                  <Text
                    className="ml-[456px] mt-[26px] text-4xl sm:text-[32px] md:text-[34px] text-black-900_01 text-center"
                    size="txtSanchezRegular36"
                  >
                    Dashboard
                  </Text>
                  <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-start justify-center m-auto p-8 sm:px-5 w-full">
                    <Text
                      className="mb-[794px] md:ml-[0] ml-[19px] text-black-900_01 text-center text-lg"
                      size="txtSanchezRegular18"
                    >
                      Content 1190 x 884{" "}
                    </Text>
                  </div>
                </div>
                <div className="bg-cyan-300 flex flex-row md:gap-10 gap-[374px] items-center justify-start p-[5px] w-full">
                  <Text
                    className="mb-3.5 ml-[38px] text-black-900_01 text-center text-lg"
                    size="txtSanchezRegular18"
                  >
                    Footer 1190 x 50{" "}
                  </Text>
                  <Text
                    className="text-black-900_01 text-xs"
                    size="txtRobotoBold12Black90001"
                  >
                    Footer Area
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuidelinetemplatePage;
