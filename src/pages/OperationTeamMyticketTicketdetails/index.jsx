import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Header4 from "components/Header4";

const OperationTeamMyticketTicketdetailsPage = () => {
  return (
    <>
      <div className="bg-white-A700 font-sanchez h-[1024px] mx-auto relative w-full">
        <div className="flex h-[1024px] md:h-[2520px] justify-end m-auto md:px-5 w-full">
          <div className="bg-green-200 flex flex-col h-full items-center justify-start mb-10 ml-auto mr-[41px] mt-auto p-[13px] w-[38%]">
            <div className="flex flex-col gap-[25px] items-center justify-start mb-3 w-[34%] md:w-full">
              <Text
                className="text-black-900_01 text-center text-lg"
                size="txtSanchezRegular18"
              >
                Customer Feedback
              </Text>
              <div className="flex flex-row items-center justify-evenly w-[96%] md:w-full">
                <Img
                  className="h-[35px]"
                  src="images/img_signal.svg"
                  alt="signal"
                />
                <Img
                  className="h-[35px]"
                  src="images/img_signal.svg"
                  alt="signalone"
                />
                <Img
                  className="h-[35px]"
                  src="images/img_signal.svg"
                  alt="signaltwo"
                />
                <Img
                  className="h-[35px]"
                  src="images/img_signal.svg"
                  alt="signalthree"
                />
                <Img
                  className="h-[34px]"
                  src="images/img_signal_green_50.svg"
                  alt="signalfour"
                />
              </div>
            </div>
          </div>
          <div className="absolute bg-white-A700 flex flex-col font-roboto h-full inset-[0] items-center justify-center m-auto w-full">
            <Header4 className="bg-cyan-300 flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
            <div className="font-sanchez md:h-[2240px] h-[934px] relative w-full">
              <div className="absolute md:h-[2240px] h-[934px] inset-y-[0] left-[0] my-auto w-[95%] md:w-full">
                <div className="absolute flex flex-col gap-[51px] inset-x-[0] justify-start mx-auto top-[3%] w-[99%]">
                  <div className="sm:h-[190px] md:h-[93px] h-[98px] ml-3.5 md:ml-[0] relative w-[31%] sm:w-full">
                    <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                      <div className="flex flex-col gap-3 justify-start w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                          <Img
                            className="sm:flex-1 h-[29px] md:h-auto object-cover w-[10%] sm:w-full"
                            src="images/img_dashboardlayout.png"
                            alt="dashboardlayout"
                          />
                          <Text
                            className="sm:ml-[0] ml-[13px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                            size="txtSanchezRegular24"
                          >
                            Dashboard
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[55px] sm:mt-0 mt-[3px] text-4xl sm:text-[32px] md:text-[34px] text-black-900_01"
                            size="txtSanchezRegular36"
                          >
                            My Ticket
                          </Text>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[53px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                          size="txtSanchezRegular24"
                        >
                          Ticket Approval
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="absolute bottom-[0] h-5 left-[1%]"
                      src="images/img_television.svg"
                      alt="television"
                    />
                  </div>
                  <div className="flex flex-col justify-start w-full">
                    <div className="flex flex-row items-start justify-start w-[14%] md:w-full">
                      <Img
                        className="h-5 mt-[5px]"
                        src="images/img_arrowright.svg"
                        alt="arrowright"
                      />
                      <Img
                        className="h-[29px] md:h-auto ml-[3px] object-cover w-[19%]"
                        src="images/img_twotickets.png"
                        alt="twotickets"
                      />
                      <Text
                        className="ml-[17px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                        size="txtSanchezRegular24"
                      >
                        My Ticket
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row gap-[33px] items-start justify-end md:ml-[0] ml-[67px] mt-[39px] w-[95%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                        size="txtSanchezRegular24"
                      >
                        Performance
                      </Text>
                      <div className="bg-gray-400_5e flex md:flex-col flex-row font-roboto md:gap-5 items-start justify-end md:mt-0 mt-[23px] p-1.5 w-[86%] md:w-full">
                        <Text
                          className="md:mt-0 mt-0.5 text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px] underline"
                          size="txtRobotoRegular24"
                        >
                          1234
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[65px] md:mt-0 mt-2.5 text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                          size="txtRobotoRegular24Black900db"
                        >
                          Login issue
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[216px] md:mt-0 mt-3 text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                          size="txtRobotoRegular24Black900db"
                        >
                          High
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[47px] md:mt-0 mt-2 text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                          size="txtRobotoRegular24Black900db"
                        >
                          13/08/21
                        </Text>
                        <div className="h-[35px] md:h-[37px] md:ml-[0] ml-[25px] md:mt-0 my-0.5 relative w-[11%] md:w-full">
                          <div className="bg-green-A200 h-[35px] m-auto rounded-[10px] w-full"></div>
                          <Text
                            className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px] w-max"
                            size="txtRobotoRegular24"
                          >
                            In Progress
                          </Text>
                        </div>
                        <Img
                          className="h-[19px] ml-40 md:ml-[0] md:mt-0 mt-[11px] w-5"
                          src="images/img_user_black_900_01_22x18.svg"
                          alt="userone"
                        />
                        <Img
                          className="h-[18px] ml-1.5 md:ml-[0] md:mt-0 mt-[11px]"
                          src="images/img_user_black_900_01_21x27.svg"
                          alt="usertwo"
                        />
                        <Img
                          className="h-[18px] ml-1.5 md:ml-[0] mr-[18px] md:mt-0 mt-[11px]"
                          src="images/img_download.svg"
                          alt="download"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col font-roboto items-center justify-start md:ml-[0] ml-[246px] w-[82%] md:w-full">
                      <List
                        className="flex flex-col gap-px items-center pt-[53px] w-full"
                        orientation="vertical"
                      >
                        <div className="bg-gray-400_5e flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-end my-0 p-1 w-full">
                          <Text
                            className="md:mt-0 mt-[11px] text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px] underline"
                            size="txtRobotoRegular24"
                          >
                            1224
                          </Text>
                          <Text
                            className="sm:flex-1 leading-[18.00px] md:ml-[0] ml-[61px] md:mt-0 mt-[3px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px] w-[12%] sm:w-full"
                            size="txtRobotoRegular24Black900db"
                          >
                            New request
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[49px] md:mt-0 mt-3.5 text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                            size="txtRobotoRegular24Black900db"
                          >
                            Feedback
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[63px] md:mt-0 mt-1.5 text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                            size="txtRobotoRegular24Black900db"
                          >
                            Low
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[46px] md:mt-0 mt-[7px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                            size="txtRobotoRegular24Black900db"
                          >
                            13/08/21
                          </Text>
                          <div className="bg-black-900_01 flex md:flex-1 flex-col items-center justify-start mb-[3px] ml-8 md:ml-[0] md:mt-0 mt-2 rounded-[10px] w-[11%] md:w-full">
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
                            className="h-5 md:ml-[0] ml-[159px] md:mt-0 mt-3 w-5"
                            src="images/img_user_black_900_01_22x18.svg"
                            alt="user"
                          />
                          <Img
                            className="h-[18px] ml-1.5 md:ml-[0] md:mt-0 mt-[13px]"
                            src="images/img_user_black_900_01_21x27.svg"
                            alt="userone"
                          />
                          <Img
                            className="h-[19px] ml-1.5 md:ml-[0] mr-[21px] md:mt-0 mt-[13px]"
                            src="images/img_download.svg"
                            alt="download"
                          />
                        </div>
                        <div className="bg-gray-400_8e flex flex-1 md:flex-col flex-row md:gap-5 items-end justify-end my-0 p-[5px] w-full">
                          <Text
                            className="md:mt-0 mt-[13px] text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px] underline"
                            size="txtRobotoRegular24"
                          >
                            1124
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[381px] md:mt-0 my-1.5 text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                            size="txtRobotoRegular24Black900db"
                          >
                            Medium
                          </Text>
                          <Text
                            className="ml-6 md:ml-[0] md:mt-0 my-1.5 text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                            size="txtRobotoRegular24Black900db"
                          >
                            14/08/21
                          </Text>
                          <div className="bg-indigo-900 flex flex-col items-center justify-start md:ml-[0] ml-[30px] md:mt-0 my-[3px] rounded-[10px]">
                            <Text
                              className="mb-0.5 text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[-0.08px]"
                              size="txtRobotoRegular24WhiteA700"
                            >
                              On hold
                            </Text>
                          </div>
                          <Img
                            className="h-[19px] md:ml-[0] ml-[161px] md:mt-0 my-[11px] w-5"
                            src="images/img_user_black_900_01_22x18.svg"
                            alt="user"
                          />
                          <Img
                            className="h-[17px] ml-1.5 md:ml-[0] md:mt-0 my-3"
                            src="images/img_user_black_900_01_21x27.svg"
                            alt="userone"
                          />
                          <Img
                            className="h-[17px] ml-1.5 md:ml-[0] mr-[19px] md:mt-0 my-3"
                            src="images/img_download.svg"
                            alt="download"
                          />
                        </div>
                        <div className="bg-gray-400_8e flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-end my-0 p-[7px] w-full">
                          <Text
                            className="md:mt-0 mt-0.5 text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px] underline"
                            size="txtRobotoRegular24"
                          >
                            1244
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[232px] md:mt-0 mt-1.5 text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                            size="txtRobotoRegular24Black900db"
                          >
                            Ticketing
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[67px] md:mt-0 mt-1.5 text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                            size="txtRobotoRegular24Black900db"
                          >
                            High
                          </Text>
                          <Text
                            className="ml-11 md:ml-[0] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                            size="txtRobotoRegular24Black900db"
                          >
                            14/08/21
                          </Text>
                          <div className="h-[35px] md:ml-[0] ml-[30px] relative w-[11%] md:w-full">
                            <div className="bg-green-A200 h-[35px] m-auto rounded-[10px] w-full"></div>
                            <Text
                              className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px] w-max"
                              size="txtRobotoRegular24"
                            >
                              In Progress
                            </Text>
                          </div>
                          <Img
                            className="h-5 ml-40 md:ml-[0] md:mt-0 mt-[7px] w-5"
                            src="images/img_user_black_900_01_22x18.svg"
                            alt="user"
                          />
                          <Img
                            className="h-[18px] ml-1.5 md:ml-[0] md:mt-0 mt-2"
                            src="images/img_user_black_900_01_21x27.svg"
                            alt="userone"
                          />
                          <Img
                            className="h-[19px] ml-1.5 md:ml-[0] mr-[17px] md:mt-0 mt-2"
                            src="images/img_download.svg"
                            alt="download"
                          />
                        </div>
                        <div className="bg-gray-400_5e flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-end my-0 p-1 w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px] underline"
                            size="txtRobotoRegular24"
                          >
                            1114
                          </Text>
                          <Text
                            className="ml-16 md:ml-[0] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                            size="txtRobotoRegular24Black900db"
                          >
                            Login issue
                          </Text>
                          <Text
                            className="sm:flex-1 leading-[18.00px] ml-9 md:ml-[0] md:mt-0 mt-[3px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px] w-[12%] sm:w-full"
                            size="txtRobotoRegular24Black900db"
                          >
                            Access issue
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[53px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
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
                          <div className="h-[35px] ml-9 md:ml-[0] relative w-[11%] md:w-full">
                            <div className="bg-green-A200 h-[35px] m-auto rounded-[10px] w-full"></div>
                            <Text
                              className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px] w-max"
                              size="txtRobotoRegular24"
                            >
                              In Progress
                            </Text>
                          </div>
                          <Img
                            className="h-5 md:ml-[0] ml-[161px] w-5"
                            src="images/img_user_black_900_01_22x18.svg"
                            alt="user"
                          />
                          <Img
                            className="h-[17px] ml-1.5 md:ml-[0]"
                            src="images/img_user_black_900_01_21x27.svg"
                            alt="userone"
                          />
                          <Img
                            className="h-[18px] ml-1.5 md:ml-[0] mr-[21px]"
                            src="images/img_download.svg"
                            alt="download"
                          />
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-col justify-start right-[1%] top-[9%] w-4/5">
                  <div className="flex flex-col font-sanchez gap-6 items-start justify-start w-[24%] md:w-full">
                    <Input
                      name="groupfortynine"
                      placeholder="Find ticket"
                      className="md:text-[22px] p-0 placeholder:text-black-900_a8 sm:text-xl text-2xl text-left tracking-[-0.08px] w-full"
                      wrapClassName="flex ml-0.5 md:ml-[0] w-full"
                      suffix={
                        <div className="mt-[3px] mb-px ml-[35px] sm:w-full sm:mx-0 w-[11%] bg-black-900_e2">
                          <Img
                            className="my-auto"
                            src="images/img_rewind.svg"
                            alt="rewind"
                          />
                        </div>
                      }
                      color="gray_400_a0"
                    ></Input>
                    <div className="flex flex-row font-roboto gap-[7px] items-start justify-start w-[91%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                        size="txtRobotoRegular24"
                      >
                        Show:
                      </Text>
                      <div className="flex flex-row gap-2.5 items-start justify-between w-[69%]">
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[75px]"
                          rightIcon={
                            <div className="ml-[17px] bg-black-900_a8 my-0.5">
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
                    </div>
                  </div>
                  <Img
                    className="h-[19px] md:ml-[0] ml-[1071px] mt-1.5"
                    src="images/img_download.svg"
                    alt="downloadone"
                  />
                  <div className="flex md:flex-col flex-row font-roboto md:gap-5 items-start justify-start md:ml-[0] ml-[18px] mr-3.5 mt-[18px] w-[98%] md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                      size="txtRobotoRegular24"
                    >
                      Ticket No.
                    </Text>
                    <Text
                      className="ml-14 md:ml-[0] md:mt-0 mt-0.5 text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                      size="txtRobotoRegular24"
                    >
                      Subject
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[73px] md:mt-0 mt-0.5 text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                      size="txtRobotoRegular24"
                    >
                      Category
                    </Text>
                    <Text
                      className="ml-14 md:ml-[0] md:mt-0 mt-[3px] text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                      size="txtRobotoRegular24"
                    >
                      Priority
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[59px] text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                      size="txtRobotoRegular24"
                    >
                      Date
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[70px] text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                      size="txtRobotoRegular24"
                    >
                      Status
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[35px] text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                      size="txtRobotoRegular24"
                    >
                      Person in charge
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[34px] text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                      size="txtRobotoRegular24"
                    >
                      Action
                    </Text>
                  </div>
                  <Text
                    className="leading-[18.00px] md:ml-[0] ml-[324px] mt-[11px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px] w-[12%] sm:w-full"
                    size="txtRobotoRegular24Black900db"
                  >
                    Access issue
                  </Text>
                  <div className="flex flex-row font-roboto gap-[21px] items-center justify-start md:ml-[0] ml-[142px] w-[29%] md:w-full">
                    <Text
                      className="leading-[18.00px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px] w-[53%] sm:w-full"
                      size="txtRobotoRegular24Black900db"
                    >
                      New ticket issue
                    </Text>
                    <Text
                      className="leading-[18.00px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px] w-[41%] sm:w-full"
                      size="txtRobotoRegular24Black900db"
                    >
                      Access issue
                    </Text>
                  </div>
                  <Text
                    className="leading-[18.00px] md:ml-[0] ml-[161px] mt-12 text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px] w-[12%] sm:w-full"
                    size="txtRobotoRegular24Black900db"
                  >
                    Ticket submission
                  </Text>
                </div>
                <div className="absolute bottom-[39%] flex flex-row font-roboto md:gap-10 items-start justify-between right-[0] w-[81%]">
                  <Text
                    className="mt-0.5 text-2xl md:text-[22px] text-black-900_01 sm:text-xl tracking-[-0.08px]"
                    size="txtRobotoRegular24"
                  >
                    Showing 1 to 5 of 5 entries
                  </Text>
                  <div className="flex flex-row items-center justify-evenly mb-0.5">
                    <Img
                      className="h-[15px] w-3.5"
                      src="images/img_refresh.svg"
                      alt="refresh"
                    />
                    <Img
                      className="h-3.5"
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
                      className="h-3.5"
                      src="images/img_arrowright_black_900_01.svg"
                      alt="arrowrightone"
                    />
                    <Img
                      className="h-[15px] w-[15px]"
                      src="images/img_forward.svg"
                      alt="forward"
                    />
                  </div>
                </div>
                <Img
                  className="absolute h-[26px] left-[3%] top-[26%]"
                  src="images/img_user_black_900_01_26x30.svg"
                  alt="userthree"
                />
                <div className="absolute bg-gray-700_35 h-[934px] inset-y-[0] left-[0] my-auto w-[19%]"></div>
              </div>
              <Line className="absolute bg-black-900_01 h-px right-[5%] top-[24%] w-[77%]" />
              <div className="absolute bg-cyan-300 bottom-[0] h-[50px] right-[0] w-[83%]"></div>
            </div>
          </div>
        </div>
        <div className="absolute bg-black-900_70 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[193px] md:px-10 sm:px-5 w-full">
          <div className="bg-white-A700 border border-black-900_8c border-solid flex flex-col items-center justify-end mb-[38px] p-[26px] md:px-5 shadow-bs w-[72%] md:w-full">
            <div className="flex flex-col justify-start mt-[18px] w-[94%] md:w-full">
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
              <div className="flex sm:flex-col flex-row font-roboto sm:gap-10 items-center justify-between md:ml-[0] ml-[98px] mt-14 w-[77%] md:w-full">
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
        </div>
      </div>
    </>
  );
};

export default OperationTeamMyticketTicketdetailsPage;
