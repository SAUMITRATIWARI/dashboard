import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Img, List, Text } from "components";
import Header from "components/Header";

const OperationTeamDashboardPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

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
        <div className="absolute bg-white-A700 flex flex-col font-roboto gap-[30px] h-full inset-[0] justify-center m-auto pt-[31px] w-full">
          <Header className="bg-cyan-300 flex md:flex-col flex-row md:gap-5 items-center justify-center md:ml-[0] ml-[1208px] mr-[33px] md:px-5 w-full" />
          <div className="font-sanchez sm:h-[1599px] h-[934px] md:h-[989px] md:px-5 relative w-full">
            <div className="flex flex-col md:gap-10 gap-[342px] h-full items-start justify-start ml-auto mr-[49px] mt-[22px] w-[78%]">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900_01"
                size="txtSanchezRegular36"
              >
                Dashboard
              </Text>
              <div className="flex md:flex-col flex-row md:gap-[43px] items-start justify-between w-full">
                <div className="bg-cyan-300 flex md:flex-1 flex-col items-center justify-end p-20 md:px-10 sm:px-5 w-[49%] md:w-full">
                  <Img
                    className="h-[253px] mt-[5px]"
                    src="images/img_group.svg"
                    alt="group"
                  />
                </div>
                <div className="bg-cyan-300 flex md:flex-1 sm:flex-col flex-row gap-[43px] items-start justify-center mb-[139px] p-4 w-[49%] md:w-full">
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
                  <div className="h-[234px] md:h-[246px] mr-[31px] sm:mt-0 mt-3 relative w-[37%] sm:w-full">
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
              </div>
            </div>
            <div className="absolute sm:h-[1599px] h-[934px] inset-[0] justify-center m-auto w-full">
              <Sidebar
                onClick={() => collapseSidebar(!collapsed)}
                className="!sticky !w-[250px] bg-gray-700_35 flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto top-[0]"
              >
                <div className="flex flex-row gap-3.5 items-end justify-center md:ml-[0] mt-4 mx-8 w-[74%]">
                  <div className="h-[29px] md:h-[34px] mt-[5px] relative w-[26%]">
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
                    className="common-pointer mb-1 text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                    size="txtSanchezRegular24"
                    onClick={() => navigate("/userdashboard")}
                  >
                    Dashboard
                  </Text>
                </div>
                <Img
                  className="h-[21px] md:ml-[0] ml-[43px] mr-[174px] mt-[46px]"
                  src="images/img_television.svg"
                  alt="television"
                />
                <Menu
                  menuItemStyles={{
                    button: {
                      padding: 0,
                      gap: "17px",
                      paddingBottom: "10px",
                      color: "#000000",
                      fontSize: "24px",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                    },
                  }}
                  className="flex flex-col items-center justify-start mb-[678px] mt-[51px] w-full"
                >
                  <MenuItem
                    icon={
                      <Img
                        className="h-[29px] md:h-auto object-cover w-[18%]"
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
                      className="common-pointer md:text-[22px] sm:text-xl"
                      onClick={() => navigate("/operationteammyticket")}
                    >
                      My Ticket
                    </Text>
                  </MenuItem>
                  <MenuItem
                    icon={
                      <Img
                        className="h-[26px]"
                        src="images/img_user_black_900_01.svg"
                        alt="userone"
                      />
                    }
                    active={
                      window.location.pathname ===
                      "/technicalsupportperformance"
                    }
                    href="/technicalsupportperformance"
                  >
                    <Text className="mb-[11px] md:text-[22px] sm:text-xl">
                      Performance
                    </Text>
                  </MenuItem>
                </Menu>
              </Sidebar>
              <Text
                className="common-pointer absolute left-[7%] text-2xl md:text-[22px] text-black-900_01 sm:text-xl top-[9%]"
                size="txtSanchezRegular24"
                onClick={() => navigate("/operationteamticketapproval")}
              >
                Ticket Approval
              </Text>
              <div className="absolute flex flex-col md:gap-10 gap-[324px] h-max inset-y-[0] justify-start my-auto right-[3%] w-[78%]">
                <List
                  className="sm:flex-col flex-row gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mr-[35px] w-[97%]"
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
                <div className="bg-cyan-300 flex flex-col items-start justify-start md:ml-[0] ml-[575px] p-[13px] rounded-[20px] w-[49%] md:w-full">
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
              <div className="absolute bg-cyan-300 bottom-[0] h-[50px] right-[0] w-[83%]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OperationTeamDashboardPage;
