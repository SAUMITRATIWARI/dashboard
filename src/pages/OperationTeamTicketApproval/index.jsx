import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Img, Input, List, Text } from "components";
import Header from "components/Header";

const OperationTeamTicketApprovalPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-sanchez items-center justify-start mx-auto w-full">
        <div className="sm:h-[1010px] h-[1024px] md:h-[2985px] md:px-5 relative w-full">
          <div className="absolute sm:h-[1010px] h-[1024px] md:h-[2985px] inset-[0] justify-center m-auto w-full">
            <div className="absolute flex sm:h-[1010px] h-[1015px] md:h-[2985px] inset-[0] justify-end m-auto w-full">
              <div className="bg-green-200 flex flex-col h-full items-center justify-start mb-[31px] ml-auto mr-[37px] mt-auto p-3.5 w-[38%]">
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
              <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-end justify-center m-auto p-[47px] md:px-10 sm:px-5 w-full">
                <div className="flex flex-col items-start justify-start mb-[236px] mt-[59px] w-[83%] md:w-full">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-black-900_01"
                    size="txtSanchezRegular36"
                  >
                    Ticket Approval
                  </Text>
                  <Input
                    name="group4100"
                    placeholder="Find ticket"
                    className="md:text-[22px] p-0 placeholder:text-black-900_a8 sm:text-xl text-2xl text-left tracking-[-0.08px] w-full"
                    wrapClassName="flex mt-1.5 w-[29%]"
                    suffix={
                      <div className="mt-px ml-[35px] sm:w-full sm:mx-0 w-[4%] bg-black-900_e2">
                        <Img
                          className="my-auto"
                          src="images/img_rewind.svg"
                          alt="rewind"
                        />
                      </div>
                    }
                    color="gray_400_a0"
                    size="md"
                  ></Input>
                  <div className="flex flex-row font-roboto gap-4 items-center justify-start ml-1 md:ml-[0] mt-[39px] w-1/4 md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                      size="txtRobotoRegular24"
                    >
                      Show:
                    </Text>
                    <div className="flex flex-row gap-5 items-center justify-between w-[70%]">
                      <div className="bg-gray-400 flex flex-row gap-[25px] items-center justify-between p-[3px] w-1/2">
                        <Text
                          className="ml-[11px] text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                          size="txtRobotoRegular24"
                        >
                          10
                        </Text>
                        <Img
                          className="h-9 my-0.5"
                          src="images/img_lock_black_900_01.svg"
                          alt="lock"
                        />
                      </div>
                      <Text
                        className="text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                        size="txtRobotoRegular24"
                      >
                        Entries
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row font-roboto md:gap-5 items-start justify-start md:ml-[0] ml-[17px] mt-[25px] w-[95%] md:w-full">
                    <Text
                      className="mb-[3px] text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                      size="txtRobotoRegular24"
                    >
                      Ticket No.
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[58px] md:mt-0 my-0.5 text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                      size="txtRobotoRegular24"
                    >
                      Subject
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[74px] md:mt-0 my-0.5 text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                      size="txtRobotoRegular24"
                    >
                      Category
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[76px] md:mt-0 mt-1 text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                      size="txtRobotoRegular24"
                    >
                      Priority
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[88px] md:mt-0 my-0.5 text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                      size="txtRobotoRegular24"
                    >
                      Date
                    </Text>
                    <Text
                      className="mb-1 md:ml-[0] ml-[86px] text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                      size="txtRobotoRegular24"
                    >
                      Action
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[78px] md:mt-0 my-0.5 text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                      size="txtRobotoRegular24"
                    >
                      Assign to
                    </Text>
                  </div>
                  <div className="bg-gray-400_5e flex md:flex-col flex-row font-roboto md:gap-5 items-start justify-end md:ml-[0] ml-[5px] mt-[9px] p-0.5 w-full">
                    <Text
                      className="md:mt-0 mt-2.5 text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px] underline"
                      size="txtRobotoRegular24"
                    >
                      1234
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[66px] md:mt-0 mt-[19px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                      size="txtRobotoRegular24Black900db"
                    >
                      Login issue
                    </Text>
                    <Text
                      className="sm:flex-1 leading-[18.00px] ml-10 md:ml-[0] md:mt-0 mt-1.5 text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px] w-[12%] sm:w-full"
                      size="txtRobotoRegular24Black900db"
                    >
                      Access issue
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[73px] md:mt-0 mt-[22px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                      size="txtRobotoRegular24Black900db"
                    >
                      High
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[75px] md:mt-0 mt-[17px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                      size="txtRobotoRegular24Black900db"
                    >
                      13/08/21
                    </Text>
                    <Img
                      className="h-[18px] md:ml-[0] ml-[70px] md:mt-0 mt-[19px]"
                      src="images/img_checkmark.svg"
                      alt="checkmark"
                    />
                    <Img
                      className="h-6 ml-4 md:ml-[0] md:mt-0 mt-5 w-6"
                      src="images/img_close.svg"
                      alt="close"
                    />
                    <div className="bg-gray-400 flex md:flex-1 flex-col items-end justify-start mb-[5px] md:ml-[0] ml-[82px] mr-6 md:mt-0 mt-[9px] p-[3px] w-[11%] md:w-full">
                      <Img
                        className="h-9"
                        src="images/img_lock_black_900_01.svg"
                        alt="lockone"
                      />
                    </div>
                  </div>
                  <div className="font-roboto sm:h-32 h-[127px] md:h-[769px] md:ml-[0] ml-[5px] relative w-full">
                    <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                      <List
                        className="flex flex-col gap-px items-center w-full"
                        orientation="vertical"
                      >
                        <div className="bg-gray-400_8e flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-end my-0 p-0.5 w-full">
                          <Text
                            className="md:mt-0 mt-[22px] text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px] underline"
                            size="txtRobotoRegular24"
                          >
                            1124
                          </Text>
                          <Text
                            className="sm:flex-1 leading-[18.00px] md:ml-[0] ml-[225px] md:mt-0 mt-[5px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px] w-[12%] sm:w-full"
                            size="txtRobotoRegular24Black900db"
                          >
                            Access issue
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[54px] md:mt-0 mt-[15px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                            size="txtRobotoRegular24Black900db"
                          >
                            Medium
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[54px] md:mt-0 mt-[13px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                            size="txtRobotoRegular24Black900db"
                          >
                            14/08/21
                          </Text>
                          <Img
                            className="h-[18px] md:ml-[0] ml-[73px] md:mt-0 mt-5"
                            src="images/img_checkmark.svg"
                            alt="checkmark"
                          />
                          <Img
                            className="h-6 md:ml-[0] ml-[15px] md:mt-0 mt-5 w-6"
                            src="images/img_close.svg"
                            alt="close"
                          />
                          <div className="bg-gray-400 flex md:flex-1 flex-col items-end justify-start mb-[11px] md:ml-[0] ml-[83px] mr-6 md:mt-0 mt-0.5 p-[3px] w-[11%] md:w-full">
                            <Img
                              className="h-9"
                              src="images/img_lock_black_900_01.svg"
                              alt="lock"
                            />
                          </div>
                        </div>
                        <div className="bg-gray-400_5e flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-end my-0 p-0.5 w-full">
                          <Text
                            className="md:mt-0 mt-[18px] text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px] underline"
                            size="txtRobotoRegular24"
                          >
                            1224
                          </Text>
                          <Text
                            className="sm:flex-1 leading-[18.00px] md:ml-[0] ml-[62px] md:mt-0 mt-1.5 text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px] w-[12%] sm:w-full"
                            size="txtRobotoRegular24Black900db"
                          >
                            New request
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[51px] md:mt-0 mt-[22px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                            size="txtRobotoRegular24Black900db"
                          >
                            Feedback
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[93px] md:mt-0 mt-[9px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                            size="txtRobotoRegular24Black900db"
                          >
                            Low
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[72px] md:mt-0 mt-[11px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                            size="txtRobotoRegular24Black900db"
                          >
                            13/08/21
                          </Text>
                          <Img
                            className="h-[18px] md:ml-[0] ml-[68px] md:mt-0 mt-[21px]"
                            src="images/img_checkmark.svg"
                            alt="checkmark"
                          />
                          <Img
                            className="h-6 ml-4 md:ml-[0] md:mt-0 mt-[18px] w-6"
                            src="images/img_close.svg"
                            alt="close"
                          />
                          <div className="bg-gray-400 flex md:flex-1 flex-col items-end justify-start mb-2.5 md:ml-[0] ml-[82px] mr-6 md:mt-0 mt-1 p-[3px] w-[11%] md:w-full">
                            <Img
                              className="h-9"
                              src="images/img_lock_black_900_01.svg"
                              alt="lock"
                            />
                          </div>
                        </div>
                      </List>
                    </div>
                    <Text
                      className="absolute leading-[18.00px] left-[12%] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl top-[10%] tracking-[-0.08px] w-[15%] sm:w-full"
                      size="txtRobotoRegular24Black900db"
                    >
                      New ticket issue
                    </Text>
                  </div>
                  <div className="bg-gray-400_8e flex md:flex-col flex-row font-roboto md:gap-5 items-center justify-end md:ml-[0] ml-[5px] p-0.5 w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px] underline"
                      size="txtRobotoRegular24"
                    >
                      1244
                    </Text>
                    <Text
                      className="sm:flex-1 leading-[18.00px] mb-[5px] md:ml-[0] ml-[60px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px] w-[12%] sm:w-full"
                      size="txtRobotoRegular24Black900db"
                    >
                      Ticket submission
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[50px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                      size="txtRobotoRegular24Black900db"
                    >
                      Ticketing
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[97px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                      size="txtRobotoRegular24Black900db"
                    >
                      High
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[65px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                      size="txtRobotoRegular24Black900db"
                    >
                      14/08/21
                    </Text>
                    <Img
                      className="h-[18px] md:ml-[0] ml-[73px]"
                      src="images/img_checkmark.svg"
                      alt="checkmarkone"
                    />
                    <Img
                      className="h-6 md:ml-[0] ml-[17px] w-6"
                      src="images/img_close.svg"
                      alt="closeone"
                    />
                    <div className="bg-gray-400 flex md:flex-1 flex-col items-end justify-start md:ml-[0] ml-[81px] mr-6 md:mt-0 my-1.5 p-[3px] w-[11%] md:w-full">
                      <Img
                        className="h-9"
                        src="images/img_lock_black_900_01.svg"
                        alt="locktwo"
                      />
                    </div>
                  </div>
                  <div className="bg-gray-400_5e flex md:flex-col flex-row font-roboto md:gap-5 items-start justify-end md:ml-[0] ml-[5px] p-[3px] w-full">
                    <Text
                      className="md:mt-0 mt-[15px] text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px] underline"
                      size="txtRobotoRegular24"
                    >
                      1114
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[65px] md:mt-0 mt-[18px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                      size="txtRobotoRegular24Black900db"
                    >
                      Login issue
                    </Text>
                    <Text
                      className="sm:flex-1 leading-[18.00px] md:ml-[0] ml-[38px] md:mt-0 mt-1 text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px] w-[12%] sm:w-full"
                      size="txtRobotoRegular24Black900db"
                    >
                      Access issue
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[82px] md:mt-0 mt-4 text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                      size="txtRobotoRegular24Black900db"
                    >
                      High
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[76px] md:mt-0 mt-3.5 text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                      size="txtRobotoRegular24Black900db"
                    >
                      3/08/21
                    </Text>
                    <Img
                      className="h-[18px] md:ml-[0] ml-[75px] md:mt-0 mt-[21px]"
                      src="images/img_checkmark.svg"
                      alt="checkmarktwo"
                    />
                    <Img
                      className="h-6 md:ml-[0] ml-[17px] md:mt-0 mt-[21px] w-6"
                      src="images/img_close.svg"
                      alt="closetwo"
                    />
                    <div className="bg-gray-400 flex md:flex-1 flex-col items-end justify-start mb-2 md:ml-[0] ml-[81px] mr-[23px] md:mt-0 mt-1 p-[3px] w-[11%] md:w-full">
                      <Img
                        className="h-9"
                        src="images/img_lock_black_900_01.svg"
                        alt="lockthree"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row font-roboto md:gap-10 items-start justify-between md:ml-[0] ml-[5px] mt-2.5 w-full">
                    <Text
                      className="mt-0.5 text-2xl md:text-[22px] text-black-900_01 sm:text-xl tracking-[-0.08px]"
                      size="txtRobotoRegular24"
                    >
                      Showing 1 to 5 of 5 entries
                    </Text>
                    <div className="flex flex-row items-end justify-evenly mb-0.5">
                      <Img
                        className="h-[18px] my-[5px]"
                        src="images/img_refresh.svg"
                        alt="refresh"
                      />
                      <Img
                        className="h-[17px] my-[5px]"
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
                        className="h-[17px] my-[5px]"
                        src="images/img_arrowright_black_900_01.svg"
                        alt="arrowright"
                      />
                      <Img
                        className="h-[18px] my-[5px]"
                        src="images/img_forward.svg"
                        alt="forward"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Header className="absolute bg-cyan-300 flex flex-row font-roboto items-center justify-center right-[2%] top-[3%] w-full" />
            <Sidebar
              onClick={() => collapseSidebar(!collapsed)}
              className="!sticky !w-[250px] bg-gray-700_35 flex font-sanchez h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto"
            >
              <div className="flex flex-row items-center justify-center md:ml-[0] ml-[21px] mr-[182px] mt-[109px] w-[19%]">
                <Img
                  className="h-5"
                  src="images/img_arrowright.svg"
                  alt="arrowrightone"
                />
                <Img
                  className="h-5 ml-[3px]"
                  src="images/img_television.svg"
                  alt="television"
                />
              </div>
              <Menu
                menuItemStyles={{
                  button: {
                    padding: 0,
                    gap: "13px",
                    paddingBottom: "18px",
                    color: "#000000",
                    fontSize: "24px",
                    paddingLeft: "18px",
                    paddingRight: "18px",
                  },
                }}
                className="flex flex-col h-[250px] items-center justify-start mb-[652px] w-[250px]"
              >
                <MenuItem
                  icon={
                    <Img
                      className="h-[29px] md:h-auto object-cover w-[21%]"
                      src="images/img_dashboardlayout.png"
                      alt="dashboardlayout"
                    />
                  }
                  active={window.location.pathname === "/userdashboard"}
                  href="/userdashboard"
                >
                  <Text
                    className="common-pointer mb-[156px] md:text-[22px] sm:text-xl"
                    onClick={() => navigate("/operationteamdashboard")}
                  >
                    Dashboard
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
                    window.location.pathname === "/technicalsupportperformance"
                  }
                  href="/technicalsupportperformance"
                >
                  <Text
                    className="common-pointer mb-[170px] md:text-[22px] sm:text-xl"
                    onClick={() => navigate("/operationteamperformance")}
                  >
                    Performance
                  </Text>
                </MenuItem>
              </Menu>
            </Sidebar>
          </div>
          <Text
            className="common-pointer absolute flex items-stretch justify-between left-[6%] text-2xl md:text-[22px] text-black-900_01 sm:text-xl top-[18%]"
            size="txtSanchezRegular24"
            onClick={() => navigate("/operationteamticketapproval")}
          >
            Ticket Approval
          </Text>
          <div className="absolute bg-cyan-300 bottom-[0] h-[50px] right-[0] w-[83%]"></div>
        </div>
      </div>
    </>
  );
};

export default OperationTeamTicketApprovalPage;
