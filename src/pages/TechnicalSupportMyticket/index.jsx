import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Header1 from "components/Header1";

const TechnicalSupportMyticketPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-sanchez items-center justify-start mx-auto w-full">
        <div className="h-[1024px] sm:h-[1726px] md:h-[2734px] md:px-5 relative w-full">
          <div className="absolute bg-green-200 bottom-[4%] flex flex-col items-center justify-start p-[13px] right-[3%] w-[38%]">
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
          <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-end justify-center m-auto sm:pl-5 pl-[25px] pt-[25px] w-full">
            <div className="flex flex-col justify-start w-[85%] md:w-full">
              <Header1 className="bg-cyan-300 flex flex-row font-roboto items-center justify-center md:ml-[0] ml-[961px] mr-7 w-full" />
              <Text
                className="ml-5 md:ml-[0] mt-[51px] text-4xl sm:text-[32px] md:text-[34px] text-black-900_01"
                size="txtSanchezRegular36"
              >
                My Ticket
              </Text>
              <div className="flex flex-col font-sanchez items-start justify-start md:ml-[0] ml-[27px] mt-3.5 w-[92%] md:w-full">
                <Input
                  name="groupfortynine"
                  placeholder="Find ticket"
                  className="md:text-[22px] p-0 placeholder:text-black-900_a8 sm:text-xl text-2xl text-left tracking-[-0.08px] w-full"
                  wrapClassName="flex w-[24%]"
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
                <div className="flex md:flex-col flex-row font-roboto md:gap-5 items-start justify-start md:ml-[0] ml-[9px] mt-8 w-[99%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                    size="txtRobotoRegular24"
                  >
                    Show:
                  </Text>
                  <div className="flex flex-row gap-2.5 items-start justify-center mb-3.5 ml-1.5 md:ml-[0] w-[15%] md:w-full">
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
                    className="h-[21px] md:ml-[0] ml-[827px] md:mt-0 mt-[26px]"
                    src="images/img_download.svg"
                    alt="download"
                  />
                </div>
                <Line className="bg-black-900_01 h-px md:ml-[0] ml-[18px] mt-[22px] w-[98%]" />
                <div className="flex md:flex-col flex-row font-roboto md:gap-10 items-start justify-between md:ml-[0] ml-[15px] w-[98%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                    size="txtRobotoRegular24"
                  >
                    Ticket No.
                  </Text>
                  <Text
                    className="md:mt-0 mt-1 text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                    size="txtRobotoRegular24"
                  >
                    Subject
                  </Text>
                  <Text
                    className="md:mt-0 mt-1 text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                    size="txtRobotoRegular24"
                  >
                    Category
                  </Text>
                  <Text
                    className="md:mt-0 mt-1.5 text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                    size="txtRobotoRegular24"
                  >
                    Priority
                  </Text>
                  <Text
                    className="md:mt-0 mt-1 text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                    size="txtRobotoRegular24"
                  >
                    Date
                  </Text>
                  <Text
                    className="md:mt-0 mt-[3px] text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                    size="txtRobotoRegular24"
                  >
                    Status
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                    size="txtRobotoRegular24"
                  >
                    Person in charge
                  </Text>
                  <Text
                    className="md:mt-0 mt-0.5 text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                    size="txtRobotoRegular24"
                  >
                    Action
                  </Text>
                </div>
                <div className="bg-gray-400_5e flex md:flex-col flex-row font-roboto md:gap-5 items-start justify-end md:ml-[0] ml-[3px] mt-1 pt-2 px-2 w-full">
                  <Text
                    className="common-pointer md:mt-0 mt-1 text-2xl md:text-[22px] text-center text-indigo-A700 sm:text-xl tracking-[-0.08px] underline"
                    size="txtRobotoRegular24IndigoA700"
                    onClick={() =>
                      navigate("/technicalsupportmyticketticketdetails")
                    }
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
                    className="md:ml-[0] ml-[53px] md:mt-0 mt-4 text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
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
                    className="common-pointer h-[22px] md:ml-[0] ml-[159px] md:mt-0 mt-[13px]"
                    src="images/img_user_black_900_01_22x18.svg"
                    alt="userone"
                    onClick={() =>
                      navigate("/technicalsupportmyticketcloseticket")
                    }
                  />
                  <Img
                    className="common-pointer h-[21px] ml-1.5 md:ml-[0] md:mt-0 mt-[13px]"
                    src="images/img_user_black_900_01_21x27.svg"
                    alt="usertwo"
                    onClick={() =>
                      navigate("/technicalsupportmyticketcloseticketone")
                    }
                  />
                  <Img
                    className="h-[21px] md:ml-[0] ml-[7px] mr-[15px] md:mt-0 mt-[13px]"
                    src="images/img_download.svg"
                    alt="downloadone"
                  />
                </div>
                <div className="font-roboto h-[124px] md:h-[125px] sm:h-[830px] md:ml-[0] ml-[3px] relative w-full">
                  <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                    <List
                      className="flex flex-col gap-px items-center w-full"
                      orientation="vertical"
                    >
                      <div className="bg-gray-400_8e flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-end my-0 w-full">
                        <Text
                          className="common-pointer sm:mt-0 mt-[23px] text-2xl md:text-[22px] text-center text-indigo-A700 sm:text-xl tracking-[-0.08px] underline"
                          size="txtRobotoRegular24IndigoA700"
                          onClick={() =>
                            navigate("/technicalsupportmyticketticketdetails")
                          }
                        >
                          1124
                        </Text>
                        <Text
                          className="sm:flex-1 leading-[18.00px] sm:ml-[0] ml-[218px] sm:mt-0 mt-1.5 text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px] w-[12%] sm:w-full"
                          size="txtRobotoRegular24Black900db"
                        >
                          Access issue
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[34px] sm:mt-0 mt-3.5 text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                          size="txtRobotoRegular24Black900db"
                        >
                          Medium
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[22px] sm:mt-0 mt-3.5 text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                          size="txtRobotoRegular24Black900db"
                        >
                          14/08/21
                        </Text>
                        <Button
                          className="cursor-pointer min-w-[116px] sm:ml-[0] ml-[29px] sm:mt-0 my-[9px] text-2xl md:text-[22px] text-center sm:text-xl tracking-[-0.08px]"
                          shape="round"
                          color="indigo_900"
                          size="sm"
                          variant="fill"
                        >
                          On hold
                        </Button>
                        <Img
                          className="common-pointer h-[22px] ml-40 sm:ml-[0] sm:mt-0 mt-[19px]"
                          src="images/img_user_black_900_01_22x18.svg"
                          alt="user"
                          onClick={() =>
                            navigate("/technicalsupportmyticketcloseticket")
                          }
                        />
                        <Img
                          className="common-pointer h-5 ml-1.5 sm:ml-[0] sm:mt-0 mt-5"
                          src="images/img_user_black_900_01_21x27.svg"
                          alt="userone"
                          onClick={() =>
                            navigate("/technicalsupportmyticketcloseticketone")
                          }
                        />
                        <Img
                          className="h-5 sm:ml-[0] ml-[7px] mr-[22px] sm:mt-0 mt-5"
                          src="images/img_download.svg"
                          alt="download"
                        />
                      </div>
                      <div className="bg-gray-400_5e flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-end my-0 w-full">
                        <Text
                          className="common-pointer sm:mt-0 mt-[18px] text-2xl md:text-[22px] text-center text-indigo-A700 sm:text-xl tracking-[-0.08px] underline"
                          size="txtRobotoRegular24IndigoA700"
                          onClick={() =>
                            navigate("/technicalsupportmyticketticketdetails")
                          }
                        >
                          1224
                        </Text>
                        <Text
                          className="sm:flex-1 leading-[18.00px] sm:ml-[0] ml-[60px] sm:mt-0 mt-1.5 text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px] w-[12%] sm:w-full"
                          size="txtRobotoRegular24Black900db"
                        >
                          New request
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[49px] sm:mt-0 mt-[22px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                          size="txtRobotoRegular24Black900db"
                        >
                          Feedback
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[62px] sm:mt-0 mt-[13px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                          size="txtRobotoRegular24Black900db"
                        >
                          Low
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[45px] sm:mt-0 mt-[13px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                          size="txtRobotoRegular24Black900db"
                        >
                          13/08/21
                        </Text>
                        <Button
                          className="cursor-pointer mb-[7px] min-w-[116px] sm:ml-[0] ml-[31px] sm:mt-0 mt-[13px] text-2xl md:text-[22px] text-center sm:text-xl tracking-[-0.08px]"
                          shape="round"
                          color="black_900_01"
                          size="sm"
                          variant="fill"
                        >
                          Closed
                        </Button>
                        <Img
                          className="common-pointer h-[22px] sm:ml-[0] ml-[158px] sm:mt-0 mt-[18px]"
                          src="images/img_user_black_900_01_22x18.svg"
                          alt="user"
                          onClick={() =>
                            navigate("/technicalsupportmyticketcloseticket")
                          }
                        />
                        <Img
                          className="common-pointer h-5 ml-1.5 sm:ml-[0] sm:mt-0 mt-[19px]"
                          src="images/img_user_black_900_01_21x27.svg"
                          alt="userone"
                          onClick={() =>
                            navigate("/technicalsupportmyticketcloseticketone")
                          }
                        />
                        <Img
                          className="h-[21px] sm:ml-[0] ml-[7px] mr-[22px] sm:mt-0 mt-[19px]"
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
                <div className="bg-gray-400_8e flex md:flex-col flex-row font-roboto md:gap-5 items-start justify-end md:ml-[0] ml-[3px] p-0.5 w-full">
                  <Text
                    className="common-pointer md:mt-0 mt-3 text-2xl md:text-[22px] text-center text-indigo-A700 sm:text-xl tracking-[-0.08px] underline"
                    size="txtRobotoRegular24IndigoA700"
                    onClick={() =>
                      navigate("/technicalsupportmyticketticketdetails")
                    }
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
                    className="ml-12 md:ml-[0] md:mt-0 mt-[17px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                    size="txtRobotoRegular24Black900db"
                  >
                    Ticketing
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[65px] md:mt-0 mt-[17px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
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
                    className="common-pointer h-[22px] md:ml-[0] ml-[159px] md:mt-0 mt-4"
                    src="images/img_user_black_900_01_22x18.svg"
                    alt="userthree"
                    onClick={() =>
                      navigate("/technicalsupportmyticketcloseticket")
                    }
                  />
                  <Img
                    className="common-pointer h-5 ml-1.5 md:ml-[0] md:mt-0 mt-[17px]"
                    src="images/img_user_black_900_01_21x27.svg"
                    alt="userfour"
                    onClick={() =>
                      navigate("/technicalsupportmyticketcloseticketone")
                    }
                  />
                  <Img
                    className="h-[21px] md:ml-[0] ml-[7px] mr-[21px] md:mt-0 mt-[17px]"
                    src="images/img_download.svg"
                    alt="downloadtwo"
                  />
                </div>
                <div className="bg-gray-400_5e flex md:flex-col flex-row font-roboto md:gap-5 items-center justify-end md:ml-[0] ml-[3px] pt-2 px-2 w-full">
                  <Text
                    className="common-pointer text-2xl md:text-[22px] text-center text-indigo-A700 sm:text-xl tracking-[-0.08px] underline"
                    size="txtRobotoRegular24IndigoA700"
                    onClick={() =>
                      navigate("/technicalsupportmyticketticketdetails")
                    }
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
                    className="common-pointer h-6 ml-40 md:ml-[0]"
                    src="images/img_user_black_900_01_22x18.svg"
                    alt="userfive"
                    onClick={() =>
                      navigate("/technicalsupportmyticketcloseticket")
                    }
                  />
                  <Img
                    className="common-pointer h-5 ml-1.5 md:ml-[0]"
                    src="images/img_user_black_900_01_21x27.svg"
                    alt="usersix"
                    onClick={() =>
                      navigate("/technicalsupportmyticketcloseticketone")
                    }
                  />
                  <Img
                    className="h-[22px] md:ml-[0] ml-[7px] mr-[15px]"
                    src="images/img_download.svg"
                    alt="downloadthree"
                  />
                </div>
                <div className="flex flex-row font-roboto md:gap-10 items-start justify-between md:ml-[0] ml-[3px] mt-2.5 w-full">
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
                      alt="arrowright"
                    />
                    <Img
                      className="h-[17px] my-[5px]"
                      src="images/img_forward.svg"
                      alt="forward"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-cyan-300 h-[50px] mt-[260px] w-full"></div>
            </div>
          </div>
          <Sidebar className="!sticky !w-[249px] bg-gray-700_35 flex h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto">
            <Menu
              menuItemStyles={{
                button: {
                  padding: 0,
                  gap: "8px",
                  paddingLeft: "27px",
                  paddingRight: "18px",
                  color: "#000000",
                  fontSize: "24px",
                },
              }}
              renderExpandIcon={() => (
                <Img
                  className="h-5 mt-1 w-3.5"
                  src="images/img_arrowright.svg"
                  alt="arrowrightone"
                />
              )}
              className="flex flex-col items-center justify-start mb-[772px] mt-[23px] w-full"
            >
              <MenuItem
                icon={
                  <Img
                    className="h-[29px] md:h-auto object-cover w-[23%]"
                    src="images/img_dashboardlayout.png"
                    alt="dashboardlayout"
                  />
                }
                active={window.location.pathname === "/userdashboard"}
                href="/userdashboard"
              >
                <Text
                  className="common-pointer md:text-[22px] sm:text-xl"
                  onClick={() => navigate("/technicalsupportdashboard")}
                >
                  Dashboard
                </Text>
              </MenuItem>
              <SubMenu
                icon={
                  <Img
                    className="h-[29px] md:h-auto object-cover w-[17%]"
                    src="images/img_twotickets.png"
                    alt="twotickets"
                  />
                }
                label={
                  <Text className="mt-0.5 md:text-[22px] sm:text-xl">
                    My Ticket
                  </Text>
                }
              >
                <div className="flex flex-col items-center justify-start mt-5 w-full">
                  <MenuItem
                    icon={
                      <Img
                        className="h-[26px]"
                        src="images/img_user_black_900_01_26x30.svg"
                        alt="userseven"
                      />
                    }
                    active={
                      window.location.pathname ===
                      "/technicalsupportperformance"
                    }
                    href="/technicalsupportperformance"
                  >
                    <Text
                      className="common-pointer md:text-[22px] sm:text-xl"
                      onClick={() => navigate("/technicalsupportperformance")}
                    >
                      Performance
                    </Text>
                  </MenuItem>
                </div>
              </SubMenu>
            </Menu>
          </Sidebar>
        </div>
      </div>
    </>
  );
};

export default TechnicalSupportMyticketPage;
