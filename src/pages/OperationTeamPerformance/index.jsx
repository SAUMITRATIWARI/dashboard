import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import Header from "components/Header";

const OperationTeamPerformancePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-sanchez items-center justify-start mx-auto w-full">
        <div className="flex h-[1024px] md:h-[1398px] justify-end md:px-5 relative w-full">
          <div className="bg-green-200 flex flex-col h-full items-center justify-start mb-10 ml-auto mr-[41px] mt-auto p-3.5 w-[38%]">
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
          <div className="absolute bg-white-A700 flex flex-col font-roboto gap-[31px] h-full inset-[0] justify-center m-auto pt-[30px] w-full">
            <Header className="bg-cyan-300 flex md:flex-col flex-row md:gap-5 items-center justify-center md:ml-[0] ml-[1212px] mr-[29px] w-full" />
            <div className="font-sanchez md:h-[1261px] h-[934px] relative w-full">
              <Sidebar className="!sticky !w-[250px] bg-gray-700_35 flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto top-[0]">
                <Img
                  className="h-5 md:ml-[0] ml-[37px] mr-[182px] mt-[105px]"
                  src="images/img_television.svg"
                  alt="television"
                />
                <Menu
                  menuItemStyles={{
                    button: {
                      padding: 0,
                      gap: "13px",
                      paddingLeft: "22px",
                      paddingRight: "18px",
                      color: "#000000",
                      fontSize: "24px",
                    },
                  }}
                  renderExpandIcon={() => (
                    <Img
                      className="h-5 mt-[5px] w-3.5"
                      src="images/img_arrowright.svg"
                      alt="arrowright"
                    />
                  )}
                  className="flex flex-col h-[250px] items-center justify-start mb-[656px] w-[250px]"
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
                      className="common-pointer md:text-[22px] sm:text-xl"
                      onClick={() => navigate("/operationteamdashboard")}
                    >
                      Dashboard
                    </Text>
                  </MenuItem>
                  <SubMenu
                    icon={
                      <Img
                        className="h-[26px]"
                        src="images/img_user_black_900_01.svg"
                        alt="userone"
                      />
                    }
                    label={
                      <Text className="md:text-[22px] sm:text-xl">
                        Performance
                      </Text>
                    }
                  >
                    <MenuItem>Submenu Item</MenuItem>
                  </SubMenu>
                </Menu>
              </Sidebar>
              <div className="absolute flex md:flex-col flex-row md:gap-5 items-end justify-start right-[12%] top-[2%] w-[69%]">
                <div className="flex flex-col gap-[50px] justify-start mb-1 w-3/5 md:w-full">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-black-900_01"
                    size="txtSanchezRegular36"
                  >
                    Performance
                  </Text>
                  <div className="flex flex-col gap-[18px] items-center justify-start md:ml-[0] ml-[7px] w-[99%] md:w-full">
                    <div className="flex sm:flex-col flex-row gap-[23px] items-center justify-between w-[99%] md:w-full">
                      <Img
                        className="h-[184px] mb-[3px]"
                        src="images/img_group64.svg"
                        alt="groupsixtyfour"
                      />
                      <div className="flex flex-col gap-10 items-start justify-start">
                        <Text
                          className="text-4xl sm:text-[32px] md:text-[34px] text-black-900_01"
                          size="txtSanchezRegular36"
                        >
                          Operation Name
                        </Text>
                        <div className="h-[94px] relative w-full">
                          <Text
                            className="m-auto text-black-900_01 text-lg"
                            size="txtSanchezRegular18"
                          >
                            <>
                              Contact No: 0123456789
                              <br />
                              Department: ABC
                            </>
                          </Text>
                          <div className="absolute bg-black-900_1e h-[94px] inset-[0] justify-center m-auto rounded-[25px] w-full"></div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[200px] items-center justify-end p-[19px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group4003.svg')",
                      }}
                    >
                      <div className="flex flex-col items-start justify-start mt-3.5 w-[98%] md:w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                          size="txtSanchezRegular24"
                        >
                          Total Ticket Handle 5
                        </Text>
                        <Text
                          className="mt-3 text-black-900_01 text-xl"
                          size="txtSanchezRegular20"
                        >
                          <>
                            Ticket Solved 2<br />
                            Ticket Pending 1<br />
                            Ticket in progress 2<br />
                            Rating
                          </>
                        </Text>
                        <Img
                          className="h-[26px] md:ml-[0] ml-[399px] mt-[37px]"
                          src="images/img_group69.svg"
                          alt="groupseventyfiv"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[18px] items-center justify-start md:ml-[0] ml-[71px] md:mt-0 mt-[140px] w-[11%] md:w-full">
                  <Img
                    className="h-[110px]"
                    src="images/img_group64.svg"
                    alt="groupseventyone"
                  />
                  <Img
                    className="h-[110px]"
                    src="images/img_group64.svg"
                    alt="groupseventytwo"
                  />
                  <Img
                    className="h-[110px]"
                    src="images/img_group64.svg"
                    alt="groupseventythr"
                  />
                </div>
                <div className="flex flex-col items-center justify-start mb-1 ml-5 md:ml-[0] md:mt-0 mt-[153px] w-[22%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                    size="txtSanchezRegular24"
                  >
                    Operation Name 1
                  </Text>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[186px] mt-2.5 rounded-[20px] text-center text-xl"
                    color="cyan_300"
                    size="lg"
                    variant="fill"
                  >
                    View details
                  </Button>
                  <Text
                    className="mt-[35px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                    size="txtSanchezRegular24"
                  >
                    Operation Name 2
                  </Text>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[186px] mt-2.5 rounded-[20px] text-center text-xl"
                    color="cyan_300"
                    size="lg"
                    variant="fill"
                  >
                    View details
                  </Button>
                  <Text
                    className="mt-[35px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                    size="txtSanchezRegular24"
                  >
                    Operation Name 3
                  </Text>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[186px] mt-2.5 rounded-[20px] text-center text-xl"
                    color="cyan_300"
                    size="lg"
                    variant="fill"
                  >
                    View details
                  </Button>
                </div>
              </div>
              <Text
                className="common-pointer absolute left-[6%] text-2xl md:text-[22px] text-black-900_01 sm:text-xl top-[10%]"
                size="txtSanchezRegular24"
                onClick={() => navigate("/operationteamticketapproval")}
              >
                Ticket Approval
              </Text>
              <div className="absolute bg-cyan-300 bottom-[0] h-[50px] right-[0] w-[84%]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OperationTeamPerformancePage;
