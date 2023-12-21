import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Img, List, Text } from "components";

const AdminDashboardPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  const sideBarMenu = [
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
    {
      icon: (
        <Img className="h-9 mb-3.5" src="images/img_reply.svg" alt="reply" />
      ),
      label: "User Log History",
      href: "/adminuserloghistory",
      active: window.location.pathname === "/adminuserloghistory",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex font-sanchez h-[1024px] justify-end mx-auto relative w-full">
        <div className="bg-green-200 flex flex-col h-full items-center justify-start mb-10 ml-auto mr-[41px] mt-auto p-3.5 md:px-5 w-[38%]">
          <div className="flex flex-col items-center justify-start mb-3 w-[47%] md:w-full">
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-black-900_01 text-center"
              size="txtSanchezRegular30"
            >
              Customer Feedback
            </Text>
            <div className="flex flex-row items-center justify-center mt-0.5 w-[69%] md:w-full">
              <Img
                className="h-[35px]"
                src="images/img_signal.svg"
                alt="signal"
              />
              <Img
                className="h-[35px] ml-[5px]"
                src="images/img_signal.svg"
                alt="signalone"
              />
              <Img
                className="h-[35px] ml-1.5"
                src="images/img_signal.svg"
                alt="signaltwo"
              />
              <Img
                className="h-[35px] ml-[5px]"
                src="images/img_signal.svg"
                alt="signalthree"
              />
              <Img
                className="h-[34px] ml-[5px]"
                src="images/img_signal_green_50.svg"
                alt="signalfour"
              />
            </div>
          </div>
        </div>
        <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto sm:pr-5 pr-[31px] pt-[31px] w-full">
          <div className="flex md:flex-col flex-row gap-6 items-start justify-between md:px-5 w-full">
            <Sidebar
              onClick={() => collapseSidebar(!collapsed)}
              className="!sticky !w-[250px] bg-gray-700_35 flex h-screen md:hidden justify-start md:mt-0 mt-[59px] overflow-auto top-[0]"
            >
              <div className="flex flex-row gap-3.5 items-end justify-start md:ml-[0] ml-[19px] mr-[35px] mt-3.5 w-[78%]">
                <div className="h-[29px] md:h-[34px] mt-[5px] relative w-1/4">
                  <Img
                    className="absolute h-[29px] inset-y-[0] my-auto object-cover right-[0] w-[83%]"
                    src="images/img_dashboardlayout.png"
                    alt="dashboardlayout"
                  />
                  <Img
                    className="absolute h-[19px] left-[0] top-[10%]"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </div>
                <Text
                  className="md:text-2xl sm:text-[22px] text-[26px] text-black-900_01"
                  size="txtSanchezRegular26"
                >
                  Dashboard
                </Text>
              </div>
              <Menu
                menuItemStyles={{
                  button: {
                    padding: 0,
                    gap: "20px",
                    paddingBottom: "31px",
                    paddingLeft: "32px",
                    paddingRight: "31px",
                    color: "#000000",
                    fontSize: "26px",
                  },
                }}
                className="flex flex-col items-center justify-start mb-[687px] mt-[30px] w-full"
              >
                {sideBarMenu?.map((menu, i) => (
                  <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </Menu>
            </Sidebar>
            <div className="flex flex-1 flex-col font-roboto gap-[42px] justify-start w-full">
              <header className="bg-cyan-300 flex md:flex-col flex-row md:gap-5 items-center justify-center md:ml-[0] ml-[918px] mr-[5px] w-full">
                <div className="flex md:flex-1 flex-row gap-[17px] items-center justify-between w-[79%] md:w-full">
                  <div className="flex flex-col items-center justify-start">
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
                  <Img
                    className="common-pointer h-7"
                    src="images/img_lock.svg"
                    alt="lock"
                    onClick={() => navigate("/adminprofilefeedback")}
                  />
                </div>
                <Img
                  className="common-pointer h-[25px] md:ml-[0] ml-[17px] md:mt-0 mt-1"
                  src="images/img_user.svg"
                  alt="user"
                  onClick={() => navigate("/signinpage")}
                />
              </header>
              <div className="flex flex-col font-sanchez gap-7 items-start justify-start w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-black-900_01"
                  size="txtSanchezRegular36"
                >
                  Dashboard
                </Text>
                <List
                  className="sm:flex-col flex-row gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center md:ml-[0] ml-[3px] w-[96%]"
                  orientation="horizontal"
                >
                  <div className="md:h-[273px] h-[280px] relative w-full">
                    <div className="absolute bg-gray-500 h-[273px] inset-[0] justify-center m-auto rounded-[20px] w-[98%]"></div>
                    <div className="absolute bg-blue-A400 flex flex-col md:gap-10 gap-[60px] h-max inset-[0] items-center justify-center m-auto p-[15px] rounded-[20px]">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl"
                        size="txtSanchezRegular24"
                      >
                        Total Tickets
                      </Text>
                      <Text
                        className="mb-[27px] md:text-5xl text-8xl text-center text-indigo-900"
                        size="txtSanchezRegular96"
                      >
                        12
                      </Text>
                    </div>
                  </div>
                  <div className="md:h-[273px] h-[280px] relative w-full">
                    <div className="absolute bg-gray-500 h-[273px] inset-[0] justify-center m-auto rounded-[20px] w-[98%]"></div>
                    <div className="absolute bg-green-A400 flex flex-col md:gap-10 gap-[61px] h-max inset-[0] items-center justify-center m-auto p-[15px] rounded-[20px]">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl"
                        size="txtSanchezRegular24"
                      >
                        Total Solved
                      </Text>
                      <Text
                        className="mb-[27px] md:text-5xl text-8xl text-center text-indigo-900"
                        size="txtSanchezRegular96"
                      >
                        8
                      </Text>
                    </div>
                  </div>
                  <div className="md:h-[273px] h-[280px] relative w-full">
                    <div className="absolute bg-gray-500 h-[273px] inset-[0] justify-center m-auto rounded-[20px] w-[97%]"></div>
                    <div className="absolute bg-red-A200 flex flex-col gap-[43px] h-max inset-[0] items-center justify-center m-auto p-[17px] rounded-[20px]">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl w-[79%] sm:w-full"
                        size="txtSanchezRegular24"
                      >
                        Total Awaiting Approval
                      </Text>
                      <Text
                        className="mb-[26px] md:text-5xl text-8xl text-center text-indigo-900"
                        size="txtSanchezRegular96"
                      >
                        2
                      </Text>
                    </div>
                  </div>
                  <div className="md:h-[273px] h-[280px] relative w-full">
                    <div className="absolute bg-gray-500 h-[273px] inset-[0] justify-center m-auto rounded-[20px] w-[99%]"></div>
                    <div className="absolute bg-yellow-300 flex flex-col gap-[41px] h-max inset-[0] items-center justify-center m-auto p-[19px] rounded-[20px]">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl w-[88%] sm:w-full"
                        size="txtSanchezRegular24"
                      >
                        Total in Progress
                      </Text>
                      <Text
                        className="mb-[23px] md:text-5xl text-8xl text-center text-indigo-900"
                        size="txtSanchezRegular96"
                      >
                        2
                      </Text>
                    </div>
                  </div>
                </List>
                <div className="flex md:flex-col flex-row md:gap-[43px] items-center justify-between md:ml-[0] ml-[3px] w-full">
                  <div className="bg-cyan-300 flex md:flex-1 flex-col items-center justify-end p-20 md:px-10 sm:px-5 w-[49%] md:w-full">
                    <Img
                      className="h-[253px] mt-[5px]"
                      src="images/img_group.svg"
                      alt="group"
                    />
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[11px] items-center justify-start w-[49%] md:w-full">
                    <div className="bg-cyan-300 flex sm:flex-col flex-row gap-[43px] items-start justify-start p-4 w-full">
                      <div className="h-[235px] md:h-[247px] sm:ml-[0] ml-[39px] sm:mt-0 mt-3 relative w-[42%] sm:w-full">
                        <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                          <div className="flex flex-col gap-9 items-center justify-start w-full">
                            <Img
                              className="h-[153px] md:h-auto object-cover w-1/2"
                              src="images/img_soportetecnicoiconopng1.png"
                              alt="soportetecnicoi"
                            />
                            <Text
                              className="text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl w-full"
                              size="txtSanchezRegular24"
                            >
                              Technical Supports
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="absolute bottom-[15%] inset-x-[0] mx-auto text-4xl sm:text-[32px] md:text-[34px] text-center text-indigo-900 w-max"
                          size="txtSanchezRegular36Indigo900"
                        >
                          3
                        </Text>
                      </div>
                      <div className="h-[234px] md:h-[246px] sm:mt-0 mt-3 relative w-[37%] sm:w-full">
                        <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                          <div className="flex flex-col gap-[35px] items-center justify-start w-full">
                            <Img
                              className="h-[153px] md:h-auto object-cover w-[66%]"
                              src="images/img_691142.png"
                              alt="691142"
                            />
                            <Text
                              className="text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl w-full"
                              size="txtSanchezRegular24"
                            >
                              Operation Team
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="absolute bottom-[16%] left-[40%] text-4xl sm:text-[32px] md:text-[34px] text-center text-indigo-900"
                          size="txtSanchezRegular36Indigo900"
                        >
                          4
                        </Text>
                      </div>
                    </div>
                    <div className="bg-cyan-300 flex flex-col items-start justify-start p-[13px] rounded-[20px] w-full">
                      <div className="flex flex-col gap-[7px] justify-start mb-[18px] md:ml-[0] ml-[94px] w-[56%] md:w-full">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-black-900_01 text-center"
                          size="txtSanchezRegular30"
                        >
                          Customer Feedback
                        </Text>
                        <div className="flex flex-row items-center justify-end md:ml-[0] ml-[71px] w-[64%] md:w-full">
                          <Img
                            className="h-9"
                            src="images/img_signal.svg"
                            alt="signalfive"
                          />
                          <Img
                            className="h-9 ml-1.5"
                            src="images/img_signal.svg"
                            alt="signalsix"
                          />
                          <Img
                            className="h-9 ml-1.5"
                            src="images/img_signal.svg"
                            alt="signalseven"
                          />
                          <Img
                            className="h-9 ml-[5px]"
                            src="images/img_signal.svg"
                            alt="signaleight"
                          />
                          <Img
                            className="h-[35px] ml-1.5"
                            src="images/img_signal_green_50.svg"
                            alt="signalnine"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
