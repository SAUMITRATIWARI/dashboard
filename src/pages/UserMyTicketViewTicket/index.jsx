import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, List, Text } from "components";
import Header3 from "components/Header3";

const UserMyTicketViewTicketPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-[29px] md:h-auto mb-2.5 mt-[5px] object-cover w-1/5"
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
          className="h-7 md:h-auto object-cover w-[27px]"
          src="images/img_newticket.png"
          alt="newticket"
        />
      ),
      label: "New Ticket",
      href: "/usernewticket",
      active: window.location.pathname === "/usernewticket",
    },
    {
      icon: (
        <Img
          className="h-[19px] mt-[3px]"
          src="images/img_arrowright.svg"
          alt="arrowright"
        />
      ),
      label: "My Ticket",
      href: "/technicalsupportmyticket",
      active: window.location.pathname === "/technicalsupportmyticket",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 font-sanchez h-[1024px] mx-auto relative w-full">
        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto pt-[34px] w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
            <Sidebar
              onClick={() => collapseSidebar(!collapsed)}
              className="!sticky !w-[250px] bg-gray-700_4c flex h-screen md:hidden justify-start md:mt-0 mt-[55px] overflow-auto md:px-5 top-[0]"
            >
              <Menu
                menuItemStyles={{
                  button: {
                    padding: 0,
                    paddingBottom: "24px",
                    gap: "14px",
                    color: "#000000",
                    fontSize: "26px",
                    paddingLeft: "24px",
                    paddingRight: "24px",
                  },
                }}
                className="flex flex-col items-center justify-start mb-[724px] mt-[35px] w-full"
              >
                {sideBarMenu?.map((menu, i) => (
                  <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </Menu>
            </Sidebar>
            <div className="flex flex-1 flex-col justify-start md:px-5 w-full">
              <Header3 className="bg-cyan-300 flex flex-row font-roboto items-center justify-center md:ml-[0] ml-[943px] mr-[90px] w-full" />
              <Text
                className="md:ml-[0] ml-[433px] mt-[52px] text-4xl sm:text-[32px] md:text-[34px] text-black-900_01 text-center"
                size="txtSanchezRegular36"
              >
                List of Ticket
              </Text>
              <div className="flex flex-col font-sanchez items-center justify-start md:ml-[0] ml-[62px] mt-10 w-[89%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[9px] items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="h-[135px] relative w-[30%]">
                        <Img
                          className="h-10 ml-auto mr-3 mt-[9px]"
                          src="images/img_rewind.svg"
                          alt="rewind"
                        />
                        <div className="absolute flex flex-col gap-[33px] h-full inset-[0] justify-center m-auto w-full">
                          <div className="bg-gray-400_a0 flex flex-row items-center justify-between p-[7px] rounded-[10px] shadow-bs w-full">
                            <Text
                              className="ml-3 text-3xl sm:text-[26px] md:text-[28px] text-black-900_a8 tracking-[-0.08px]"
                              size="txtSanchezRegular30Black900a8"
                            >
                              Find ticket
                            </Text>
                            <Img
                              className="h-10 mr-[5px] mt-0.5"
                              src="images/img_rewind.svg"
                              alt="rewindone"
                            />
                          </div>
                          <div className="flex flex-row font-roboto items-center justify-start md:ml-[0] ml-[19px] w-[81%] md:w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                              size="txtRobotoRegular24"
                            >
                              Show:
                            </Text>
                            <div className="bg-gray-400 flex flex-row gap-[26px] items-center justify-center ml-[9px] pl-[5px] py-[5px] w-[37%]">
                              <Text
                                className="ml-2 text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                                size="txtRobotoRegular24"
                              >
                                10
                              </Text>
                              <Img
                                className="h-9"
                                src="images/img_lock_black_900_01.svg"
                                alt="lockone"
                              />
                            </div>
                            <Text
                              className="ml-[7px] text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                              size="txtRobotoRegular24"
                            >
                              Entries
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row font-roboto md:gap-5 items-start justify-start md:ml-[0] ml-[17px] mt-6 w-[93%] md:w-full">
                        <Text
                          className="mb-0.5 text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                          size="txtRobotoRegular24"
                        >
                          Ticket No.
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[101px] md:mt-0 mt-0.5 text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                          size="txtRobotoRegular24"
                        >
                          Subject
                        </Text>
                        <Text
                          className="mb-0.5 md:ml-[0] ml-[93px] text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                          size="txtRobotoRegular24"
                        >
                          Status
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[97px] md:mt-0 mt-0.5 text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                          size="txtRobotoRegular24"
                        >
                          Support by
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[97px] text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                          size="txtRobotoRegular24"
                        >
                          Date
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[110px] text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                          size="txtRobotoRegular24"
                        >
                          Rate
                        </Text>
                      </div>
                      <div className="font-roboto h-[126px] sm:h-[528px] md:h-[798px] mt-[19px] relative w-full">
                        <div className="absolute flex flex-col gap-3 inset-x-[0] justify-start mx-auto top-[0] w-full">
                          <div className="h-16 md:h-[501px] relative w-full">
                            <div className="flex md:flex-col flex-row md:gap-5 h-full items-center justify-start ml-auto mr-5 my-auto w-[62%]">
                              <div className="bg-cyan-300 h-[42px] rounded-[10px] w-[19%]"></div>
                              <Img
                                className="h-[26px] md:ml-[0] ml-[404px]"
                                src="images/img_signal_black_900_01.svg"
                                alt="signal"
                              />
                              <Img
                                className="h-[26px] ml-1 md:ml-[0]"
                                src="images/img_signal_black_900_01.svg"
                                alt="signalone"
                              />
                              <Img
                                className="h-[26px] md:ml-[0] ml-[3px]"
                                src="images/img_signal_black_900_01.svg"
                                alt="signaltwo"
                              />
                              <Img
                                className="h-[26px] md:ml-[0] ml-[3px]"
                                src="images/img_signal_black_900_01_26x22.svg"
                                alt="signalthree"
                              />
                              <Img
                                className="h-[26px] md:ml-[0] ml-[3px]"
                                src="images/img_signal_black_900_01.svg"
                                alt="signalfour"
                              />
                            </div>
                            <div className="absolute bg-gray-400_5e flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-center justify-center m-auto p-1 w-full">
                              <Text
                                className="text-2xl md:text-[22px] text-center text-indigo-A700_01 sm:text-xl tracking-[-0.08px] underline"
                                size="txtRobotoRegular24IndigoA70001"
                              >
                                1234
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[107px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                                size="txtRobotoRegular24Black900db"
                              >
                                Login issue
                              </Text>
                              <div className="h-[42px] md:ml-[0] ml-[52px] relative w-[12%] md:w-full">
                                <Text
                                  className="leading-[18.00px] m-auto text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px] w-full"
                                  size="txtRobotoRegular24"
                                >
                                  In Progress
                                </Text>
                                <Text
                                  className="absolute h-full inset-[0] justify-center leading-[18.00px] m-auto text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px] w-full"
                                  size="txtRobotoRegular24"
                                >
                                  In Progress
                                </Text>
                              </div>
                              <Text
                                className="sm:flex-1 leading-[18.00px] ml-16 md:ml-[0] md:mt-0 mt-0.5 text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px] w-[12%] sm:w-full"
                                size="txtRobotoRegular24Black900db"
                              >
                                Tech support
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[68px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                                size="txtRobotoRegular24Black900db"
                              >
                                13/08/21
                              </Text>
                              <Img
                                className="h-[26px] md:ml-[0] ml-[51px]"
                                src="images/img_signal_black_900_01.svg"
                                alt="signalfive"
                              />
                              <Img
                                className="h-[26px] ml-1 md:ml-[0]"
                                src="images/img_signal_black_900_01.svg"
                                alt="signalsix"
                              />
                              <Img
                                className="h-[26px] md:ml-[0] ml-[3px]"
                                src="images/img_signal_black_900_01.svg"
                                alt="signalseven"
                              />
                              <Img
                                className="h-[26px] md:ml-[0] ml-[3px]"
                                src="images/img_signal_black_900_01_26x22.svg"
                                alt="signaleight"
                              />
                              <Img
                                className="h-[26px] md:ml-[0] ml-[3px] mr-4"
                                src="images/img_signal_black_900_01.svg"
                                alt="signalnine"
                              />
                            </div>
                          </div>
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end ml-96 md:ml-[0] w-[62%] md:w-full">
                            <div className="bg-indigo-900 h-[41px] rounded-[10px] w-[18%]"></div>
                            <Img
                              className="h-[25px] md:ml-[0] ml-[406px]"
                              src="images/img_signal_black_900_01_26x22.svg"
                              alt="signalten"
                            />
                            <Img
                              className="h-[25px] ml-0.5 md:ml-[0]"
                              src="images/img_signal_black_900_01_25x22.svg"
                              alt="signaleleven"
                            />
                            <Img
                              className="h-[25px] ml-1 md:ml-[0]"
                              src="images/img_signal_black_900_01_26x22.svg"
                              alt="signaltwelve"
                            />
                            <Img
                              className="h-[25px] md:ml-[0] ml-[3px]"
                              src="images/img_signal_black_900_01_26x22.svg"
                              alt="signalthirteen"
                            />
                            <Img
                              className="h-[25px] ml-1 md:ml-[0]"
                              src="images/img_signal_black_900_01_26x22.svg"
                              alt="signalfourteen"
                            />
                          </div>
                        </div>
                        <div className="absolute bg-gray-400_8e bottom-[0] flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-start justify-end mx-auto pt-[9px] px-[9px] w-full">
                          <Text
                            className="sm:mt-0 mt-3 text-2xl md:text-[22px] text-center text-deep_purple-A700 sm:text-xl tracking-[-0.08px] underline"
                            size="txtRobotoRegular24DeeppurpleA700"
                          >
                            1124
                          </Text>
                          <Text
                            className="sm:flex-1 leading-[18.00px] sm:ml-[0] ml-[87px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px] w-[16%] sm:w-full"
                            size="txtRobotoRegular24Black900db"
                          >
                            New ticket issue
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[51px] sm:mt-0 mt-[9px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[-0.08px]"
                            size="txtRobotoRegular24WhiteA700"
                          >
                            On hold
                          </Text>
                          <Text
                            className="sm:flex-1 leading-[18.00px] sm:ml-[0] ml-[67px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px] w-[15%] sm:w-full"
                            size="txtRobotoRegular24Black900db"
                          >
                            Operation Team
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[53px] sm:mt-0 mt-[11px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                            size="txtRobotoRegular24Black900db"
                          >
                            14/08/21
                          </Text>
                          <Img
                            className="h-[25px] sm:ml-[0] ml-[53px] sm:mt-0 mt-3"
                            src="images/img_signal_black_900_01_26x22.svg"
                            alt="signalfifteen"
                          />
                          <Img
                            className="h-[25px] ml-0.5 sm:ml-[0] sm:mt-0 mt-3"
                            src="images/img_signal_black_900_01_25x22.svg"
                            alt="signalsixteen"
                          />
                          <Img
                            className="h-[25px] ml-1 sm:ml-[0] sm:mt-0 mt-3"
                            src="images/img_signal_black_900_01_26x22.svg"
                            alt="signalseventeen"
                          />
                          <Img
                            className="h-[25px] sm:ml-[0] ml-[3px] sm:mt-0 mt-3"
                            src="images/img_signal_black_900_01_26x22.svg"
                            alt="signaleighteen"
                          />
                          <Img
                            className="h-[25px] ml-1 sm:ml-[0] mr-[9px] sm:mt-0 mt-[13px]"
                            src="images/img_signal_black_900_01_26x22.svg"
                            alt="signalnineteen"
                          />
                        </div>
                      </div>
                      <List
                        className="flex flex-col font-roboto gap-px items-center w-full"
                        orientation="vertical"
                      >
                        <div className="md:h-[508px] h-[63px] my-0 relative w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 h-full items-end justify-start ml-auto mr-[19px] mt-[9px] w-[62%]">
                            <div className="bg-black-900_01 h-10 rounded-[10px] w-[19%]"></div>
                            <Img
                              className="h-[25px] mb-[5px] md:ml-[0] ml-[404px] md:mt-0 mt-2.5"
                              src="images/img_signal_yellow_700.svg"
                              alt="signal"
                            />
                            <Img
                              className="h-[25px] mb-[5px] ml-1 md:ml-[0] md:mt-0 mt-2.5"
                              src="images/img_signal_yellow_700.svg"
                              alt="signalone"
                            />
                            <Img
                              className="h-[25px] mb-[5px] md:ml-[0] ml-[3px] md:mt-0 mt-2.5"
                              src="images/img_signal_yellow_700.svg"
                              alt="signaltwo"
                            />
                            <Img
                              className="h-[25px] mb-[5px] md:ml-[0] ml-[3px] md:mt-0 mt-2.5"
                              src="images/img_signal_yellow_700.svg"
                              alt="signalthree"
                            />
                            <Img
                              className="h-[25px] mb-[5px] ml-1 md:ml-[0] md:mt-0 mt-2.5"
                              src="images/img_signal_yellow_700_25x21.svg"
                              alt="signalfour"
                            />
                          </div>
                          <div className="absolute bg-gray-400_5e flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-center justify-center m-auto p-1 w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-center text-deep_purple-A700 sm:text-xl tracking-[-0.08px] underline"
                              size="txtRobotoRegular24DeeppurpleA700"
                            >
                              1224
                            </Text>
                            <Text
                              className="sm:flex-1 leading-[18.00px] md:ml-[0] ml-[105px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px] w-[12%] sm:w-full"
                              size="txtRobotoRegular24Black900db"
                            >
                              New request
                            </Text>
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[75px]">
                              <Text
                                className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[-0.08px]"
                                size="txtRobotoRegular24WhiteA700"
                              >
                                Closed
                              </Text>
                            </div>
                            <Text
                              className="sm:flex-1 leading-[18.00px] md:ml-[0] ml-[86px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px] w-[12%] sm:w-full"
                              size="txtRobotoRegular24Black900db"
                            >
                              Tech support
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[68px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                              size="txtRobotoRegular24Black900db"
                            >
                              13/08/21
                            </Text>
                            <Img
                              className="h-[25px] md:ml-[0] ml-[51px]"
                              src="images/img_signal_yellow_700.svg"
                              alt="signalfive"
                            />
                            <Img
                              className="h-[25px] ml-1 md:ml-[0]"
                              src="images/img_signal_yellow_700.svg"
                              alt="signalsix"
                            />
                            <Img
                              className="h-[25px] md:ml-[0] ml-[3px]"
                              src="images/img_signal_yellow_700.svg"
                              alt="signalseven"
                            />
                            <Img
                              className="h-[25px] md:ml-[0] ml-[3px]"
                              src="images/img_signal_yellow_700.svg"
                              alt="signaleight"
                            />
                            <Img
                              className="h-[25px] ml-1 md:ml-[0] mr-[15px]"
                              src="images/img_signal_yellow_700_25x21.svg"
                              alt="signalnine"
                            />
                          </div>
                        </div>
                        <div className="md:h-[278px] sm:h-[528px] h-[63px] my-0 relative w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 h-full items-center justify-start ml-auto mr-[18px] mt-2 w-[62%]">
                            <div className="bg-teal-200 h-10 rounded-[10px] w-[18%]"></div>
                            <Img
                              className="h-[26px] md:ml-[0] ml-[406px]"
                              src="images/img_signal_black_900_01.svg"
                              alt="signal"
                            />
                            <Img
                              className="h-[26px] ml-0.5 md:ml-[0]"
                              src="images/img_signal_black_900_01_26x22.svg"
                              alt="signalone"
                            />
                            <Img
                              className="h-[26px] ml-1 md:ml-[0]"
                              src="images/img_signal_black_900_01.svg"
                              alt="signaltwo"
                            />
                            <Img
                              className="h-[26px] md:ml-[0] ml-[3px]"
                              src="images/img_signal_black_900_01.svg"
                              alt="signalthree"
                            />
                            <Img
                              className="h-[26px] ml-1 md:ml-[0]"
                              src="images/img_signal_black_900_01.svg"
                              alt="signalfour"
                            />
                          </div>
                          <div className="absolute bg-gray-400_8e flex sm:flex-col flex-row sm:gap-5 h-full inset-[0] items-start justify-center m-auto p-[3px] w-full">
                            <Text
                              className="sm:mt-0 mt-3 text-2xl md:text-[22px] text-center text-deep_purple-A700 sm:text-xl tracking-[-0.08px] underline"
                              size="txtRobotoRegular24DeeppurpleA700"
                            >
                              1244
                            </Text>
                            <Text
                              className="sm:flex-1 leading-[18.00px] mb-[3px] sm:ml-[0] ml-[105px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px] w-[12%] sm:w-full"
                              size="txtRobotoRegular24Black900db"
                            >
                              Ticket submission
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[52px] sm:mt-0 mt-[5px] text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                              size="txtRobotoRegular24"
                            >
                              In Progress
                            </Text>
                            <Text
                              className="sm:flex-1 leading-[18.00px] mb-[3px] sm:ml-[0] ml-[43px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px] w-[16%] sm:w-full"
                              size="txtRobotoRegular24Black900db"
                            >
                              Operation Team
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[55px] sm:mt-0 mt-[11px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                              size="txtRobotoRegular24Black900db"
                            >
                              14/08/21
                            </Text>
                            <Img
                              className="h-[26px] sm:ml-[0] ml-[53px] sm:mt-0 mt-[11px]"
                              src="images/img_signal_black_900_01.svg"
                              alt="signalfive"
                            />
                            <Img
                              className="h-[26px] ml-0.5 sm:ml-[0] sm:mt-0 mt-[11px]"
                              src="images/img_signal_black_900_01_26x22.svg"
                              alt="signalsix"
                            />
                            <Img
                              className="h-[26px] ml-1 sm:ml-[0] sm:mt-0 mt-[11px]"
                              src="images/img_signal_black_900_01.svg"
                              alt="signalseven"
                            />
                            <Img
                              className="h-[26px] sm:ml-[0] ml-[3px] sm:mt-0 mt-[11px]"
                              src="images/img_signal_black_900_01.svg"
                              alt="signaleight"
                            />
                            <Img
                              className="h-[26px] ml-1 sm:ml-[0] mr-[15px] sm:mt-0 mt-3"
                              src="images/img_signal_black_900_01.svg"
                              alt="signalnine"
                            />
                          </div>
                        </div>
                        <div className="md:h-[278px] sm:h-[500px] h-[63px] my-0 relative w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 h-full items-center justify-start ml-auto mr-[18px] mt-2 w-[62%]">
                            <div className="bg-teal-200_01 h-10 rounded-[10px] w-[18%]"></div>
                            <Img
                              className="h-[26px] md:ml-[0] ml-[406px]"
                              src="images/img_signal_black_900_01.svg"
                              alt="signal"
                            />
                            <Img
                              className="h-[26px] ml-0.5 md:ml-[0]"
                              src="images/img_signal_black_900_01_26x22.svg"
                              alt="signalone"
                            />
                            <Img
                              className="h-[26px] ml-1 md:ml-[0]"
                              src="images/img_signal_black_900_01.svg"
                              alt="signaltwo"
                            />
                            <Img
                              className="h-[26px] md:ml-[0] ml-[3px]"
                              src="images/img_signal_black_900_01.svg"
                              alt="signalthree"
                            />
                            <Img
                              className="h-[26px] ml-1 md:ml-[0]"
                              src="images/img_signal_black_900_01.svg"
                              alt="signalfour"
                            />
                          </div>
                          <div className="absolute bg-gray-400_5e flex sm:flex-col flex-row sm:gap-5 h-full inset-[0] items-start justify-center m-auto p-[3px] w-full">
                            <Text
                              className="sm:mt-0 mt-3 text-2xl md:text-[22px] text-center text-deep_purple-A700 sm:text-xl tracking-[-0.08px] underline"
                              size="txtRobotoRegular24DeeppurpleA700"
                            >
                              1114
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[107px] sm:mt-0 mt-[13px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                              size="txtRobotoRegular24Black900db"
                            >
                              Login issue
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[52px] sm:mt-0 mt-[5px] text-2xl md:text-[22px] text-black-900_01 text-center text-shadow-ts sm:text-xl tracking-[-0.08px]"
                              size="txtRobotoRegular24"
                            >
                              In Progress
                            </Text>
                            <Text
                              className="sm:flex-1 leading-[18.00px] mb-[3px] ml-16 sm:ml-[0] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px] w-[12%] sm:w-full"
                              size="txtRobotoRegular24Black900db"
                            >
                              Tech support
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[73px] sm:mt-0 mt-[11px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                              size="txtRobotoRegular24Black900db"
                            >
                              3/08/21
                            </Text>
                            <Img
                              className="h-[26px] sm:ml-[0] ml-[59px] sm:mt-0 mt-3"
                              src="images/img_signal_black_900_01.svg"
                              alt="signalfive"
                            />
                            <Img
                              className="h-[26px] ml-0.5 sm:ml-[0] sm:mt-0 mt-3"
                              src="images/img_signal_black_900_01_26x22.svg"
                              alt="signalsix"
                            />
                            <Img
                              className="h-[26px] ml-1 sm:ml-[0] sm:mt-0 mt-3"
                              src="images/img_signal_black_900_01.svg"
                              alt="signalseven"
                            />
                            <Img
                              className="h-[26px] sm:ml-[0] ml-[3px] sm:mt-0 mt-3"
                              src="images/img_signal_black_900_01.svg"
                              alt="signaleight"
                            />
                            <Img
                              className="h-[26px] ml-1 sm:ml-[0] mr-[15px] sm:mt-0 mt-[13px]"
                              src="images/img_signal_black_900_01.svg"
                              alt="signalnine"
                            />
                          </div>
                        </div>
                      </List>
                    </div>
                    <div className="flex sm:flex-col flex-row font-roboto sm:gap-5 items-start justify-end w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl tracking-[-0.08px]"
                        size="txtRobotoRegular24"
                      >
                        Showing 1 to 5 of 5 entries
                      </Text>
                      <Img
                        className="h-[18px] sm:ml-[0] ml-[690px] sm:mt-0 mt-1"
                        src="images/img_refresh.svg"
                        alt="refresh"
                      />
                      <Img
                        className="h-[17px] ml-0.5 sm:ml-[0] sm:mt-0 mt-1.5"
                        src="images/img_arrowleft.svg"
                        alt="arrowleft"
                      />
                      <Text
                        className="ml-2.5 sm:ml-[0] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                        size="txtRobotoRegular24Black900db"
                      >
                        1
                      </Text>
                      <Img
                        className="h-[17px] ml-3 sm:ml-[0] sm:mt-0 mt-1.5"
                        src="images/img_arrowright_black_900_01.svg"
                        alt="arrowrightone"
                      />
                      <Img
                        className="h-[18px] sm:ml-[0] ml-[5px] sm:mt-0 mt-1"
                        src="images/img_forward.svg"
                        alt="forward"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Button
                className="cursor-pointer font-bold font-roboto leading-[normal] min-w-[1190px] md:min-w-full mt-[203px] text-center text-xs"
                shape="square"
                color="cyan_300_77"
                size="xl"
                variant="fill"
              >
                Footer Area
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bg-black-900_70 flex flex-col md:gap-10 gap-[154px] h-full inset-[0] justify-center m-auto p-9 sm:px-5 w-full">
          <Img
            className="h-[25px] md:ml-[0] ml-[1337px]"
            src="images/img_user.svg"
            alt="user"
          />
          <div className="bg-white-A700 border border-black-900_8c border-solid flex flex-col items-center justify-end mb-[205px] md:ml-[0] ml-[388px] mr-[228px] p-[22px] md:px-5 shadow-bs w-[55%] md:w-full">
            <Text
              className="mt-[22px] text-3xl sm:text-[26px] md:text-[28px] text-black-900_01 text-center"
              size="txtSanchezRegular30"
            >
              Ticket Details
            </Text>
            <Text
              className="mt-[39px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
              size="txtSanchezRegular24"
            >
              <>
                Ticket No: 1234
                <br />
                Date:
                <br />
                Name: <br />
                Dept:
                <br />
                <br />
                Title:
                <br />
                Description:
                <br />
                Category:
                <br />
                Type:
                <br />
                Priority:
                <br />
                Status:
                <br />
                Attachment:
              </>
            </Text>
            <Button className="bg-green-500 cursor-pointer font-roboto leading-[normal] min-w-[188px] mt-[27px] py-[9px] rounded-[10px] text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl">
              Close
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserMyTicketViewTicketPage;
