import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import Header2 from "components/Header2";

const UserMyTicketPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-sanchez items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-end pt-[31px] w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
            <Sidebar className="!sticky !w-[250px] bg-gray-700_35 flex h-screen md:hidden justify-start md:mt-0 mt-[58px] overflow-auto md:px-5 top-[0]">
              <Menu
                menuItemStyles={{
                  button: {
                    padding: 0,
                    gap: "14px",
                    paddingBottom: "18px",
                    color: "#000000",
                    fontSize: "26px",
                    paddingLeft: "18px",
                    paddingRight: "18px",
                  },
                }}
                renderExpandIcon={() => (
                  <Img
                    className="h-[19px] mt-[5px] w-3"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                )}
                className="flex flex-col items-center justify-start mb-[724px] mt-[35px] w-full"
              >
                <MenuItem
                  icon={
                    <Img
                      className="h-[29px] md:h-auto mb-2.5 mt-[5px] object-cover w-1/5"
                      src="images/img_dashboardlayout.png"
                      alt="dashboardlayout"
                    />
                  }
                  active={window.location.pathname === "/userdashboard"}
                  href="/userdashboard"
                >
                  <Text
                    className="common-pointer mb-[11px] md:text-2xl sm:text-[22px]"
                    onClick={() => navigate("/userdashboard")}
                  >
                    Dashboard
                  </Text>
                </MenuItem>
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
                  <Text className="mb-4 md:text-2xl sm:text-[22px]">
                    New Ticket
                  </Text>
                </MenuItem>
                <SubMenu
                  icon={
                    <Img
                      className="h-7 md:h-auto object-cover w-[27px]"
                      src="images/img_twotickets.png"
                      alt="twotickets"
                    />
                  }
                  label={
                    <Text className="md:text-2xl sm:text-[22px]">
                      My Ticket
                    </Text>
                  }
                >
                  <MenuItem>Submenu Item</MenuItem>
                </SubMenu>
              </Menu>
            </Sidebar>
            <div className="flex flex-1 flex-col justify-start md:px-5 w-full">
              <Header2 className="bg-cyan-300 flex flex-row font-roboto items-center justify-center md:ml-[0] ml-[962px] mr-[29px] w-full" />
              <Text
                className="md:ml-[0] ml-[433px] mt-[55px] text-4xl sm:text-[32px] md:text-[34px] text-black-900_01 text-center"
                size="txtSanchezRegular36"
              >
                List of Ticket
              </Text>
              <div className="flex flex-col font-sanchez items-center justify-start md:ml-[0] ml-[65px] mt-[50px] w-[90%] md:w-full">
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
                      <div className="font-roboto md:h-[1359px] h-[315px] sm:h-[549px] mt-[19px] relative w-full">
                        <div className="md:h-[1340px] h-[315px] sm:h-[437px] m-auto w-full">
                          <div className="absolute bottom-[0] flex flex-col gap-4 inset-x-[0] justify-start mx-auto w-full">
                            <div className="flex flex-col gap-[39px] items-center justify-start md:ml-[0] ml-[906px] w-[13%] md:w-full">
                              <div className="flex flex-row items-center justify-evenly w-[99%] md:w-full">
                                <Img
                                  className="h-[26px]"
                                  src="images/img_signal_black_900_01.svg"
                                  alt="signal"
                                />
                                <Img
                                  className="h-[26px]"
                                  src="images/img_signal_black_900_01.svg"
                                  alt="signalone"
                                />
                                <Img
                                  className="h-[26px]"
                                  src="images/img_signal_black_900_01.svg"
                                  alt="signaltwo"
                                />
                                <Img
                                  className="h-[26px]"
                                  src="images/img_signal_black_900_01_26x22.svg"
                                  alt="signalthree"
                                />
                                <Img
                                  className="h-[26px]"
                                  src="images/img_signal_black_900_01.svg"
                                  alt="signalfour"
                                />
                              </div>
                              <div className="flex flex-row items-center justify-evenly w-[99%] md:w-full">
                                <Img
                                  className="h-[25px]"
                                  src="images/img_signal_black_900_01_26x22.svg"
                                  alt="signalfive"
                                />
                                <Img
                                  className="h-[25px]"
                                  src="images/img_signal_black_900_01_25x22.svg"
                                  alt="signalsix"
                                />
                                <Img
                                  className="h-[25px]"
                                  src="images/img_signal_black_900_01_26x22.svg"
                                  alt="signalseven"
                                />
                                <Img
                                  className="h-[25px]"
                                  src="images/img_signal_black_900_01_26x22.svg"
                                  alt="signaleight"
                                />
                                <Img
                                  className="h-[25px]"
                                  src="images/img_signal_black_900_01_26x22.svg"
                                  alt="signalnine"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="md:h-[508px] h-[63px] relative w-full">
                                <div className="flex md:flex-col flex-row md:gap-5 h-full items-end justify-start ml-auto mr-[19px] mt-[9px] w-[62%]">
                                  <div className="bg-black-900_01 h-10 rounded-[10px] w-[19%]"></div>
                                  <Img
                                    className="h-[25px] mb-[5px] md:ml-[0] ml-[404px] md:mt-0 mt-2.5"
                                    src="images/img_signal_yellow_700.svg"
                                    alt="signalten"
                                  />
                                  <Img
                                    className="h-[25px] mb-[5px] ml-1 md:ml-[0] md:mt-0 mt-2.5"
                                    src="images/img_signal_yellow_700.svg"
                                    alt="signaleleven"
                                  />
                                  <Img
                                    className="h-[25px] mb-[5px] md:ml-[0] ml-[3px] md:mt-0 mt-2.5"
                                    src="images/img_signal_yellow_700.svg"
                                    alt="signaltwelve"
                                  />
                                  <Img
                                    className="h-[25px] mb-[5px] md:ml-[0] ml-[3px] md:mt-0 mt-2.5"
                                    src="images/img_signal_yellow_700.svg"
                                    alt="signalthirteen"
                                  />
                                  <Img
                                    className="h-[25px] mb-[5px] ml-1 md:ml-[0] md:mt-0 mt-2.5"
                                    src="images/img_signal_yellow_700_25x21.svg"
                                    alt="signalfourteen"
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
                                    alt="signalfifteen"
                                  />
                                  <Img
                                    className="h-[25px] ml-1 md:ml-[0]"
                                    src="images/img_signal_yellow_700.svg"
                                    alt="signalsixteen"
                                  />
                                  <Img
                                    className="h-[25px] md:ml-[0] ml-[3px]"
                                    src="images/img_signal_yellow_700.svg"
                                    alt="signalseventeen"
                                  />
                                  <Img
                                    className="h-[25px] md:ml-[0] ml-[3px]"
                                    src="images/img_signal_yellow_700.svg"
                                    alt="signaleighteen"
                                  />
                                  <Img
                                    className="h-[25px] ml-1 md:ml-[0] mr-[15px]"
                                    src="images/img_signal_yellow_700_25x21.svg"
                                    alt="signalnineteen"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="bg-gray-400_8e flex md:flex-col flex-row md:gap-5 items-start justify-end p-[3px] w-full">
                                  <Text
                                    className="md:mt-0 mt-3 text-2xl md:text-[22px] text-center text-deep_purple-A700 sm:text-xl tracking-[-0.08px] underline"
                                    size="txtRobotoRegular24DeeppurpleA700"
                                  >
                                    1244
                                  </Text>
                                  <Text
                                    className="sm:flex-1 leading-[18.00px] mb-[3px] md:ml-[0] ml-[105px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px] w-[12%] sm:w-full"
                                    size="txtRobotoRegular24Black900db"
                                  >
                                    Ticket submission
                                  </Text>
                                  <Text
                                    className="sm:flex-1 leading-[18.00px] mb-[3px] md:ml-[0] ml-[214px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px] w-[16%] sm:w-full"
                                    size="txtRobotoRegular24Black900db"
                                  >
                                    Operation Team
                                  </Text>
                                  <Text
                                    className="md:ml-[0] ml-[55px] md:mt-0 mt-[11px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                                    size="txtRobotoRegular24Black900db"
                                  >
                                    14/08/21
                                  </Text>
                                  <div className="h-[26px] md:ml-[0] ml-[52px] md:mt-0 mt-[11px] relative w-[3%] md:w-full">
                                    <Img
                                      className="absolute h-[26px] inset-y-[0] my-auto right-[0]"
                                      src="images/img_signal_black_900_01.svg"
                                      alt="signaltwenty"
                                    />
                                    <Img
                                      className="absolute h-[26px] inset-y-[0] left-[0] my-auto"
                                      src="images/img_signal_black_900_01.svg"
                                      alt="signaltwentyone"
                                    />
                                  </div>
                                  <div className="h-[26px] md:mt-0 mt-[11px] relative w-[3%] md:w-full">
                                    <Img
                                      className="absolute h-[26px] inset-y-[0] my-auto right-[0]"
                                      src="images/img_signal_black_900_01_26x22.svg"
                                      alt="signaltwentytwo"
                                    />
                                    <Img
                                      className="absolute h-[26px] inset-y-[0] left-[0] my-auto"
                                      src="images/img_signal_black_900_01_26x22.svg"
                                      alt="signaltwentythr"
                                    />
                                  </div>
                                  <div className="h-[26px] md:ml-[0] ml-[3px] md:mt-0 mt-[11px] relative w-[3%] md:w-full">
                                    <Img
                                      className="absolute h-[26px] inset-y-[0] my-auto right-[0]"
                                      src="images/img_signal_black_900_01.svg"
                                      alt="signaltwentyfou"
                                    />
                                    <Img
                                      className="absolute h-[26px] inset-y-[0] left-[0] my-auto"
                                      src="images/img_signal_black_900_01.svg"
                                      alt="signaltwentyfiv"
                                    />
                                  </div>
                                  <div className="h-[26px] ml-0.5 md:ml-[0] md:mt-0 mt-[11px] relative w-[3%] md:w-full">
                                    <Img
                                      className="absolute h-[26px] inset-y-[0] my-auto right-[0]"
                                      src="images/img_signal_black_900_01.svg"
                                      alt="signaltwentysix"
                                    />
                                    <Img
                                      className="absolute h-[26px] inset-y-[0] left-[0] my-auto"
                                      src="images/img_signal_black_900_01.svg"
                                      alt="signaltwentysev"
                                    />
                                  </div>
                                  <div className="h-[26px] md:ml-[0] ml-[3px] mr-[15px] md:mt-0 mt-3 relative w-[3%] md:w-full">
                                    <Img
                                      className="absolute h-[26px] inset-y-[0] my-auto right-[0]"
                                      src="images/img_signal_black_900_01.svg"
                                      alt="signaltwentyeig"
                                    />
                                    <Img
                                      className="absolute h-[26px] inset-y-[0] left-[0] my-auto"
                                      src="images/img_signal_black_900_01.svg"
                                      alt="signaltwentynin"
                                    />
                                  </div>
                                </div>
                                <div className="bg-gray-400_5e flex md:flex-col flex-row md:gap-5 items-start justify-end p-[3px] w-full">
                                  <Text
                                    className="md:mt-0 mt-3 text-2xl md:text-[22px] text-center text-deep_purple-A700 sm:text-xl tracking-[-0.08px] underline"
                                    size="txtRobotoRegular24DeeppurpleA700"
                                  >
                                    1114
                                  </Text>
                                  <Text
                                    className="md:ml-[0] ml-[107px] md:mt-0 mt-[13px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                                    size="txtRobotoRegular24Black900db"
                                  >
                                    Login issue
                                  </Text>
                                  <Text
                                    className="sm:flex-1 leading-[18.00px] mb-[3px] md:ml-[0] ml-[235px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px] w-[12%] sm:w-full"
                                    size="txtRobotoRegular24Black900db"
                                  >
                                    Tech support
                                  </Text>
                                  <Text
                                    className="md:ml-[0] ml-[73px] md:mt-0 mt-[11px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                                    size="txtRobotoRegular24Black900db"
                                  >
                                    3/08/21
                                  </Text>
                                  <List
                                    className="md:flex-1 sm:flex-col flex-row gap-[3px] grid grid-cols-5 md:ml-[0] ml-[59px] mr-4 md:mt-0 mt-3 w-[13%] md:w-full"
                                    orientation="horizontal"
                                  >
                                    <div
                                      className="bg-cover bg-no-repeat flex flex-col h-[26px] items-center justify-start w-full"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_signal_black_900_01.svg')",
                                      }}
                                    >
                                      <Img
                                        className="h-[26px]"
                                        src="images/img_signal_black_900_01.svg"
                                        alt="signal"
                                      />
                                    </div>
                                    <div
                                      className="bg-cover bg-no-repeat flex flex-col h-[26px] items-center justify-start w-full"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_signal_black_900_01_26x22.svg')",
                                      }}
                                    >
                                      <Img
                                        className="h-[26px]"
                                        src="images/img_signal_black_900_01_26x22.svg"
                                        alt="signal"
                                      />
                                    </div>
                                    <div
                                      className="bg-cover bg-no-repeat flex flex-col h-[26px] items-center justify-start w-full"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_signal_black_900_01.svg')",
                                      }}
                                    >
                                      <Img
                                        className="h-[26px]"
                                        src="images/img_signal_black_900_01.svg"
                                        alt="signal"
                                      />
                                    </div>
                                    <div
                                      className="bg-cover bg-no-repeat flex flex-col h-[26px] items-center justify-start w-full"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_signal_black_900_01.svg')",
                                      }}
                                    >
                                      <Img
                                        className="h-[26px]"
                                        src="images/img_signal_black_900_01.svg"
                                        alt="signal"
                                      />
                                    </div>
                                    <div
                                      className="bg-cover bg-no-repeat flex flex-col h-[26px] items-center justify-start w-full"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_signal_black_900_01.svg')",
                                      }}
                                    >
                                      <Img
                                        className="h-[26px]"
                                        src="images/img_signal_black_900_01.svg"
                                        alt="signal"
                                      />
                                    </div>
                                  </List>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute flex flex-col inset-[0] justify-center m-auto w-full">
                            <div className="bg-gray-400_5e flex sm:flex-col flex-row sm:gap-5 items-center justify-end mx-auto p-[3px] w-full">
                              <Text
                                className="text-2xl md:text-[22px] text-center text-indigo-A700_01 sm:text-xl tracking-[-0.08px] underline"
                                size="txtRobotoRegular24IndigoA70001"
                              >
                                1234
                              </Text>
                              <Text
                                className="sm:ml-[0] ml-[107px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                                size="txtRobotoRegular24Black900db"
                              >
                                Login issue
                              </Text>
                              <Text
                                className="sm:flex-1 leading-[18.00px] sm:ml-[0] ml-[235px] sm:mt-0 mt-[3px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px] w-[12%] sm:w-full"
                                size="txtRobotoRegular24Black900db"
                              >
                                Tech support
                              </Text>
                              <Text
                                className="sm:ml-[0] ml-[68px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                                size="txtRobotoRegular24Black900db"
                              >
                                13/08/21
                              </Text>
                              <Img
                                className="h-[26px] sm:ml-[0] ml-[51px]"
                                src="images/img_signal_black_900_01.svg"
                                alt="signalthirty"
                              />
                              <Img
                                className="h-[26px] ml-1 sm:ml-[0]"
                                src="images/img_signal_black_900_01.svg"
                                alt="signalthirtyone"
                              />
                              <Img
                                className="h-[26px] sm:ml-[0] ml-[3px]"
                                src="images/img_signal_black_900_01.svg"
                                alt="signalthirtytwo"
                              />
                              <Img
                                className="h-[26px] sm:ml-[0] ml-[3px]"
                                src="images/img_signal_black_900_01_26x22.svg"
                                alt="signalthirtythr"
                              />
                              <Img
                                className="h-[26px] sm:ml-[0] ml-[3px] mr-[17px]"
                                src="images/img_signal_black_900_01.svg"
                                alt="signalthirtyfou"
                              />
                            </div>
                            <div className="flex flex-col items-center justify-start mb-auto ml-96 mt-[-54.5px] w-[12%] z-[1]">
                              <div className="h-11 md:h-[42px] relative w-full">
                                <div className="absolute bg-green-A200 bottom-[0] h-[42px] inset-x-[0] mx-auto rounded-[10px] w-full"></div>
                                <Text
                                  className="absolute inset-x-[0] leading-[18.00px] mx-auto text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl top-[0] tracking-[-0.08px] w-full"
                                  size="txtRobotoRegular24"
                                >
                                  In Progress
                                </Text>
                              </div>
                              <div className="md:h-[185px] h-[43px] mt-[143px] relative w-full">
                                <div className="absolute bg-green-A200 h-[42px] inset-[0] justify-center m-auto rounded-[10px] w-full"></div>
                                <Text
                                  className="absolute h-max inset-[0] justify-center leading-[18.00px] m-auto text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px] w-full"
                                  size="txtRobotoRegular24"
                                >
                                  In Progress
                                </Text>
                              </div>
                              <div className="md:h-16 h-[43px] mt-[22px] relative w-full">
                                <div className="absolute bg-green-A200 h-[42px] inset-[0] justify-center m-auto rounded-[10px] w-full"></div>
                                <Text
                                  className="absolute h-max inset-[0] justify-center leading-[18.00px] m-auto text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px] w-full"
                                  size="txtRobotoRegular24"
                                >
                                  In Progress
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bg-gray-400_8e flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-start justify-end mx-auto pt-[9px] px-[9px] top-[20%] w-full">
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
                          <Button
                            className="cursor-pointer mb-[9px] min-w-[117px] sm:ml-[0] ml-[34px] sm:mt-0 mt-1 text-2xl md:text-[22px] text-center sm:text-xl tracking-[-0.08px]"
                            shape="round"
                            color="indigo_900"
                            size="sm"
                            variant="fill"
                          >
                            On hold
                          </Button>
                          <Text
                            className="sm:flex-1 leading-[18.00px] ml-12 sm:ml-[0] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px] w-[15%] sm:w-full"
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
                            alt="signalthirtyfiv"
                          />
                          <Img
                            className="h-[25px] ml-0.5 sm:ml-[0] sm:mt-0 mt-3"
                            src="images/img_signal_black_900_01_25x22.svg"
                            alt="signalthirtysix"
                          />
                          <Img
                            className="h-[25px] ml-1 sm:ml-[0] sm:mt-0 mt-3"
                            src="images/img_signal_black_900_01_26x22.svg"
                            alt="signalthirtysev"
                          />
                          <Img
                            className="h-[25px] sm:ml-[0] ml-[3px] sm:mt-0 mt-3"
                            src="images/img_signal_black_900_01_26x22.svg"
                            alt="signalthirtyeig"
                          />
                          <Img
                            className="h-[25px] ml-1 sm:ml-[0] mr-2.5 sm:mt-0 mt-[13px]"
                            src="images/img_signal_black_900_01_26x22.svg"
                            alt="signalthirtynin"
                          />
                        </div>
                      </div>
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
                className="cursor-pointer font-bold font-roboto leading-[normal] min-w-[1190px] md:min-w-full mt-[193px] text-center text-xs"
                shape="square"
                color="cyan_300"
                size="xl"
                variant="fill"
              >
                Footer Area
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserMyTicketPage;
