import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

const TechnicalSupportMyticketticketdetailsPage = () => {
  return (
    <>
      <div className="bg-white-A700 font-sanchez h-[1024px] mx-auto relative w-full">
        <div className="h-[1024px] sm:h-[1261px] md:h-[3366px] m-auto md:px-5 w-full">
          <div className="flex h-[1024px] sm:h-[1261px] md:h-[3366px] justify-end m-auto w-full">
            <div className="bg-green-200 flex flex-col h-full items-center justify-start mb-10 ml-auto mr-[41px] mt-auto p-[13px] w-[38%]">
              <div className="flex flex-col gap-[18px] items-center justify-start mb-3 w-[45%] md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl"
                  size="txtSanchezRegular24"
                >
                  Customer Feedback
                </Text>
                <div className="flex flex-row items-center justify-center w-[72%] md:w-full">
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
            <div className="absolute bg-white-A700 flex flex-col font-roboto h-full inset-[0] items-center justify-center m-auto w-full">
              <div className="flex flex-col justify-start w-full">
                <div className="bg-cyan-300 flex flex-col items-start justify-end p-2.5 w-full">
                  <Text
                    className="italic md:ml-[0] ml-[21px] mt-[11px] text-5xl sm:text-[38px] md:text-[44px] text-green-50"
                    size="txtRobotoBoldItalic48Green50"
                  >
                    Helpdesk
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row font-sanchez sm:gap-5 items-center justify-start md:ml-[0] ml-[37px] mt-[15px] w-[29%] md:w-full">
                  <Img
                    className="h-[29px] md:h-auto object-cover w-[10%] sm:w-full"
                    src="images/img_dashboardlayout.png"
                    alt="dashboardlayout"
                  />
                  <Text
                    className="ml-2 sm:ml-[0] text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                    size="txtSanchezRegular24"
                  >
                    Dashboard
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[61px] text-4xl sm:text-[32px] md:text-[34px] text-black-900_01"
                    size="txtSanchezRegular36"
                  >
                    My Ticket
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row font-sanchez sm:gap-5 items-start justify-start md:ml-[0] ml-[18px] mt-3.5 w-[36%] md:w-full">
                  <Img
                    className="h-5 sm:mt-0 mt-1"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                  <Img
                    className="h-[29px] md:h-auto sm:ml-[0] ml-[9px] object-cover w-[7%] sm:w-full"
                    src="images/img_twotickets.png"
                    alt="twotickets"
                  />
                  <Text
                    className="sm:ml-[0] ml-[11px] sm:mt-0 mt-0.5 text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                    size="txtSanchezRegular24"
                  >
                    My Ticket
                  </Text>
                  <Input
                    name="groupfortynine"
                    placeholder="Find ticket"
                    className="md:text-[22px] p-0 placeholder:text-black-900_a8 sm:text-xl text-2xl text-left tracking-[-0.08px] w-full"
                    wrapClassName="flex sm:ml-[0] ml-[76px] w-1/2 sm:w-full"
                    suffix={
                      <div className="mt-[3px] mb-px ml-[35px] w-7 bg-black-900_e2">
                        <Img
                          className="my-auto"
                          src="images/img_rewind.svg"
                          alt="rewind"
                        />
                      </div>
                    }
                    color="gray_400_a0"
                  ></Input>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[37px] mt-[5px] w-[92%] md:w-full">
                  <Img
                    className="h-[26px]"
                    src="images/img_user_black_900_01_26x30.svg"
                    alt="user"
                  />
                  <Text
                    className="md:ml-[0] ml-[17px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                    size="txtSanchezRegular24"
                  >
                    Performance
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[55px] md:mt-0 mt-[26px] text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                    size="txtRobotoRegular24"
                  >
                    Show:
                  </Text>
                  <div className="flex flex-row font-roboto gap-2.5 items-start justify-center mb-3.5 ml-1.5 md:ml-[0] md:mt-0 mt-[27px] w-[12%] md:w-full">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[75px]"
                      rightIcon={
                        <div className="mt-0.5 mb-px ml-[17px] bg-black-900_a8">
                          <Img
                            src="images/img_lock_black_900_01.svg"
                            alt="lock"
                          />
                        </div>
                      }
                      shape="square"
                      color="gray_400"
                      size="xs"
                      variant="fill"
                    >
                      <div className="md:text-[22px] sm:text-xl text-2xl text-center tracking-[-0.08px]">
                        10
                      </div>
                    </Button>
                    <Text
                      className="mt-[3px] text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                      size="txtRobotoRegular24"
                    >
                      Entries
                    </Text>
                  </div>
                  <Img
                    className="h-[21px] md:ml-[0] ml-[827px] md:mt-0 mt-[53px]"
                    src="images/img_download.svg"
                    alt="download"
                  />
                </div>
                <Line className="bg-black-900_01 h-px md:ml-[0] ml-[273px] mr-[108px] mt-[9px] w-[74%]" />
                <div className="flex md:flex-col flex-row font-roboto md:gap-5 items-start justify-end md:ml-[0] ml-[292px] mt-3.5 w-[74%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                    size="txtRobotoRegular24"
                  >
                    Ticket No.
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[54px] md:mt-0 mt-1 text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                    size="txtRobotoRegular24"
                  >
                    Subject
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[71px] md:mt-0 mt-1 text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                    size="txtRobotoRegular24"
                  >
                    Category
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[55px] md:mt-0 mt-1.5 text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                    size="txtRobotoRegular24"
                  >
                    Priority
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[58px] md:mt-0 mt-1 text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                    size="txtRobotoRegular24"
                  >
                    Date
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[68px] md:mt-0 mt-[3px] text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                    size="txtRobotoRegular24"
                  >
                    Status
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[34px] text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                    size="txtRobotoRegular24"
                  >
                    Person in charge
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[43px] md:mt-0 mt-0.5 text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                    size="txtRobotoRegular24"
                  >
                    Action
                  </Text>
                </div>
                <div className="flex flex-col font-roboto items-center justify-start md:ml-[0] ml-[280px] mt-1 w-[76%] md:w-full">
                  <div className="bg-gray-400_5e flex md:flex-col flex-row md:gap-5 items-start justify-end pt-2 px-2 w-full">
                    <Text
                      className="md:mt-0 mt-1 text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px] underline"
                      size="txtRobotoRegular24"
                    >
                      1234
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[61px] md:mt-0 mt-[13px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                      size="txtRobotoRegular24Black900db"
                    >
                      Login issue
                    </Text>
                    <Text
                      className="sm:flex-1 leading-[18.00px] md:ml-[0] ml-[37px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px] w-[12%] sm:w-full"
                      size="txtRobotoRegular24Black900db"
                    >
                      Access issue
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[53px] md:mt-0 mt-[15px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                      size="txtRobotoRegular24Black900db"
                    >
                      High
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[46px] md:mt-0 mt-[11px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                      size="txtRobotoRegular24Black900db"
                    >
                      13/08/21
                    </Text>
                    <div className="h-10 ml-6 md:ml-[0] md:mt-0 mt-[3px] relative w-[11%] md:w-full">
                      <div className="bg-green-A200 h-10 m-auto rounded-[10px] w-full"></div>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px] w-max"
                        size="txtRobotoRegular24"
                      >
                        In Progress
                      </Text>
                    </div>
                    <Img
                      className="h-[22px] md:ml-[0] ml-[159px] md:mt-0 mt-[13px]"
                      src="images/img_user_black_900_01_22x18.svg"
                      alt="userone"
                    />
                    <Img
                      className="h-[21px] ml-1.5 md:ml-[0] md:mt-0 mt-[13px]"
                      src="images/img_user_black_900_01_21x27.svg"
                      alt="usertwo"
                    />
                    <Img
                      className="h-[21px] md:ml-[0] ml-[7px] mr-[15px] md:mt-0 mt-[13px]"
                      src="images/img_download.svg"
                      alt="downloadone"
                    />
                  </div>
                  <div className="h-[124px] sm:h-[125px] md:h-[827px] relative w-full">
                    <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                      <List
                        className="flex flex-col gap-px items-center w-full"
                        orientation="vertical"
                      >
                        <div className="bg-gray-400_8e flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-end my-0 w-full">
                          <Text
                            className="md:mt-0 mt-[23px] text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px] underline"
                            size="txtRobotoRegular24"
                          >
                            1124
                          </Text>
                          <Text
                            className="sm:flex-1 leading-[18.00px] md:ml-[0] ml-[218px] md:mt-0 mt-1.5 text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px] w-[12%] sm:w-full"
                            size="txtRobotoRegular24Black900db"
                          >
                            Access issue
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[34px] md:mt-0 mt-3.5 text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                            size="txtRobotoRegular24Black900db"
                          >
                            Medium
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[22px] md:mt-0 mt-3.5 text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                            size="txtRobotoRegular24Black900db"
                          >
                            14/08/21
                          </Text>
                          <div className="bg-indigo-900 flex flex-col items-center justify-start md:ml-[0] ml-[29px] md:mt-0 my-[9px] p-1 rounded-[10px]">
                            <Text
                              className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[-0.08px]"
                              size="txtRobotoRegular24WhiteA700"
                            >
                              On hold
                            </Text>
                          </div>
                          <Img
                            className="h-[22px] ml-40 md:ml-[0] md:mt-0 mt-[19px]"
                            src="images/img_user_black_900_01_22x18.svg"
                            alt="user"
                          />
                          <Img
                            className="h-5 ml-1.5 md:ml-[0] md:mt-0 mt-5"
                            src="images/img_user_black_900_01_21x27.svg"
                            alt="userone"
                          />
                          <Img
                            className="h-5 md:ml-[0] ml-[7px] mr-[22px] md:mt-0 mt-5"
                            src="images/img_download.svg"
                            alt="download"
                          />
                        </div>
                        <div className="bg-gray-400_5e flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-end my-0 w-full">
                          <Text
                            className="md:mt-0 mt-[18px] text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px] underline"
                            size="txtRobotoRegular24"
                          >
                            1224
                          </Text>
                          <Text
                            className="sm:flex-1 leading-[18.00px] md:ml-[0] ml-[60px] md:mt-0 mt-1.5 text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px] w-[12%] sm:w-full"
                            size="txtRobotoRegular24Black900db"
                          >
                            New request
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[49px] md:mt-0 mt-[22px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                            size="txtRobotoRegular24Black900db"
                          >
                            Feedback
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[62px] md:mt-0 mt-[13px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                            size="txtRobotoRegular24Black900db"
                          >
                            Low
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[45px] md:mt-0 mt-[13px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                            size="txtRobotoRegular24Black900db"
                          >
                            13/08/21
                          </Text>
                          <div className="bg-black-900_01 flex md:flex-1 flex-col items-center justify-start mb-[7px] md:ml-[0] ml-[31px] md:mt-0 mt-[13px] p-1 rounded-[10px] w-[11%] md:w-full">
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[-0.08px]"
                                size="txtRobotoRegular24WhiteA700"
                              >
                                Closed
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-[22px] md:ml-[0] ml-[158px] md:mt-0 mt-[18px]"
                            src="images/img_user_black_900_01_22x18.svg"
                            alt="user"
                          />
                          <Img
                            className="h-5 ml-1.5 md:ml-[0] md:mt-0 mt-[19px]"
                            src="images/img_user_black_900_01_21x27.svg"
                            alt="userone"
                          />
                          <Img
                            className="h-[21px] md:ml-[0] ml-[7px] mr-[22px] md:mt-0 mt-[19px]"
                            src="images/img_download.svg"
                            alt="download"
                          />
                        </div>
                      </List>
                    </div>
                    <Text
                      className="absolute leading-[18.00px] left-[12%] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl top-[11%] tracking-[-0.08px] w-[15%] sm:w-full"
                      size="txtRobotoRegular24Black900db"
                    >
                      New ticket issue
                    </Text>
                  </div>
                  <List
                    className="flex flex-col gap-px items-center w-full"
                    orientation="vertical"
                  >
                    <div className="bg-gray-400_8e flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-end my-0 p-0.5 w-full">
                      <Text
                        className="md:mt-0 mt-3 text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px] underline"
                        size="txtRobotoRegular24"
                      >
                        1244
                      </Text>
                      <Text
                        className="sm:flex-1 leading-[18.00px] mb-1.5 md:ml-[0] ml-[58px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px] w-[12%] sm:w-full"
                        size="txtRobotoRegular24Black900db"
                      >
                        Ticket submission
                      </Text>
                      <Text
                        className="ml-12 md:ml-[0] md:mt-0 mt-4 text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                        size="txtRobotoRegular24Black900db"
                      >
                        Ticketing
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[65px] md:mt-0 mt-4 text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                        size="txtRobotoRegular24Black900db"
                      >
                        High
                      </Text>
                      <Text
                        className="ml-11 md:ml-[0] md:mt-0 mt-2.5 text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                        size="txtRobotoRegular24Black900db"
                      >
                        14/08/21
                      </Text>
                      <div className="h-10 md:ml-[0] ml-[29px] md:mt-0 mt-[7px] relative w-[11%] md:w-full">
                        <div className="bg-green-A200 h-10 m-auto rounded-[10px] w-full"></div>
                        <Text
                          className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px] w-max"
                          size="txtRobotoRegular24"
                        >
                          In Progress
                        </Text>
                      </div>
                      <Img
                        className="h-[22px] md:ml-[0] ml-[159px] md:mt-0 mt-4"
                        src="images/img_user_black_900_01_22x18.svg"
                        alt="user"
                      />
                      <Img
                        className="h-5 ml-1.5 md:ml-[0] md:mt-0 mt-[17px]"
                        src="images/img_user_black_900_01_21x27.svg"
                        alt="userone"
                      />
                      <Img
                        className="h-[21px] md:ml-[0] ml-[7px] mr-[21px] md:mt-0 mt-[17px]"
                        src="images/img_download.svg"
                        alt="download"
                      />
                    </div>
                    <div className="bg-gray-400_5e flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-end my-0 pt-2 px-2 w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px] underline"
                        size="txtRobotoRegular24"
                      >
                        1114
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[60px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                        size="txtRobotoRegular24Black900db"
                      >
                        Login issue
                      </Text>
                      <Text
                        className="sm:flex-1 leading-[18.00px] ml-9 md:ml-[0] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px] w-[12%] sm:w-full"
                        size="txtRobotoRegular24Black900db"
                      >
                        Access issue
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[52px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                        size="txtRobotoRegular24Black900db"
                      >
                        High
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[50px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                        size="txtRobotoRegular24Black900db"
                      >
                        3/08/21
                      </Text>
                      <div className="h-10 md:ml-[0] ml-[35px] relative w-[11%] md:w-full">
                        <div className="bg-green-A200 h-10 m-auto rounded-[10px] w-full"></div>
                        <Text
                          className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px] w-max"
                          size="txtRobotoRegular24"
                        >
                          In Progress
                        </Text>
                      </div>
                      <Img
                        className="h-6 ml-40 md:ml-[0]"
                        src="images/img_user_black_900_01_22x18.svg"
                        alt="user"
                      />
                      <Img
                        className="h-5 ml-1.5 md:ml-[0]"
                        src="images/img_user_black_900_01_21x27.svg"
                        alt="userone"
                      />
                      <Img
                        className="h-[22px] md:ml-[0] ml-[7px] mr-[15px]"
                        src="images/img_download.svg"
                        alt="download"
                      />
                    </div>
                  </List>
                  <div className="flex flex-row md:gap-10 items-start justify-between mt-2.5 w-full">
                    <Text
                      className="mt-[3px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl tracking-[-0.08px]"
                      size="txtRobotoRegular24"
                    >
                      Showing 1 to 5 of 5 entries
                    </Text>
                    <div className="flex flex-row items-end justify-evenly mb-[3px]">
                      <Img
                        className="h-[17px] my-[5px]"
                        src="images/img_refresh.svg"
                        alt="refresh"
                      />
                      <Img
                        className="h-4 my-[5px]"
                        src="images/img_arrowleft.svg"
                        alt="arrowleft"
                      />
                      <Text
                        className="text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                        size="txtRobotoRegular24Black900db"
                      >
                        1
                      </Text>
                      <Img
                        className="h-4 my-[5px]"
                        src="images/img_arrowright_black_900_01.svg"
                        alt="arrowrightone"
                      />
                      <Img
                        className="h-[17px] my-[5px]"
                        src="images/img_forward.svg"
                        alt="forward"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-cyan-300 h-[50px] md:ml-[0] ml-[250px] mt-[260px] w-[83%]"></div>
              </div>
            </div>
          </div>
          <Img
            className="absolute bottom-[0] h-[934px] left-[0] object-cover w-[18%]"
            src="images/img_menubox.png"
            alt="menubox"
          />
        </div>
        <div className="absolute bg-black-900_70 flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-start justify-center m-auto p-6 sm:px-5 w-full">
          <div className="bg-white-A700 border border-black-900_8c border-solid flex md:flex-1 flex-col items-center justify-end mb-[162px] md:mt-0 mt-[197px] p-8 md:px-5 shadow-bs w-[55%] md:w-full">
            <div className="flex flex-col justify-start mt-3 w-[95%] md:w-full">
              <Text
                className="md:ml-[0] ml-[228px] text-3xl sm:text-[26px] md:text-[28px] text-black-900_01 text-center"
                size="txtSanchezRegular30"
              >
                Ticket Details
              </Text>
              <Text
                className="mt-[39px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                size="txtSanchezRegular24"
              >
                <>
                  Ticket No: 12345
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
              <div className="flex sm:flex-col flex-row font-roboto sm:gap-10 items-center justify-between md:ml-[0] ml-[106px] mt-[67px] w-[77%] md:w-full">
                <Button
                  className="cursor-pointer leading-[normal] min-w-[188px] text-2xl md:text-[22px] text-center sm:text-xl"
                  shape="round"
                  color="indigo_A100"
                  size="md"
                  variant="fill"
                >
                  Update
                </Button>
                <Button className="bg-green-500 cursor-pointer leading-[normal] min-w-[188px] py-[9px] rounded-[10px] text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl">
                  Close
                </Button>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col font-roboto items-center justify-start md:ml-[0] ml-[105px] md:mt-0 mt-[3px] md:px-5 w-[7%] md:w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[35px] items-start justify-end p-1 w-full"
              style={{ backgroundImage: "url('images/img_group1.svg')" }}
            >
              <div className="flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[3px] mt-[5px] w-4/5 md:w-full">
                <Text
                  className="text-lg text-white-A700"
                  size="txtRobotoBold18"
                >
                  BM
                </Text>
                <Text
                  className="text-black-900_01 text-lg"
                  size="txtRobotoBold18Black90001"
                >
                  BI
                </Text>
              </div>
            </div>
          </div>
          <Img
            className="h-[30px] md:ml-[0] ml-[17px] md:mt-0 mt-1.5"
            src="images/img_vector.svg"
            alt="vector"
          />
          <Img
            className="h-7 ml-2.5 md:ml-[0] md:mt-0 mt-1.5"
            src="images/img_lock.svg"
            alt="lockone"
          />
          <Img
            className="h-[25px] ml-3 md:ml-[0] md:mt-0 mt-[11px]"
            src="images/img_user.svg"
            alt="userthree"
          />
        </div>
      </div>
    </>
  );
};

export default TechnicalSupportMyticketticketdetailsPage;
