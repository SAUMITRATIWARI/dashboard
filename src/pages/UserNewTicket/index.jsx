import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import Header2 from "components/Header2";

const UserNewTicketPage = () => {
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
                    marginTop: "33px",
                    paddingBottom: "34px",
                    color: "#000000",
                    fontSize: "26px",
                    paddingLeft: "34px",
                    paddingRight: "34px",
                  },
                }}
                renderExpandIcon={() => (
                  <Img
                    className="h-[19px] mt-2 w-3"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                )}
                className="flex flex-col items-center justify-start mb-[724px] mt-[35px] w-full"
              >
                <MenuItem
                  icon={
                    <Img
                      className="h-[29px] md:h-auto mb-[79px] mt-[5px] object-cover w-1/5"
                      src="images/img_dashboardlayout.png"
                      alt="dashboardlayout"
                    />
                  }
                  active={window.location.pathname === "/userdashboard"}
                  href="/userdashboard"
                >
                  <Text
                    className="common-pointer mb-20 md:text-2xl sm:text-[22px]"
                    onClick={() => navigate("/userdashboard")}
                  >
                    Dashboard
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
                  href="/usermyticket"
                >
                  <Text
                    className="common-pointer mb-[70px] md:text-2xl sm:text-[22px]"
                    onClick={() => navigate("/usermyticket")}
                  >
                    My Ticket
                  </Text>
                </MenuItem>
                <SubMenu
                  icon={
                    <Img
                      className="h-7 md:h-auto object-cover w-[27px]"
                      src="images/img_newticket.png"
                      alt="newticket"
                    />
                  }
                  label={
                    <Text className="mb-[61px] md:text-2xl sm:text-[22px]">
                      New Ticket
                    </Text>
                  }
                >
                  <MenuItem>Submenu Item</MenuItem>
                </SubMenu>
              </Menu>
            </Sidebar>
            <div className="flex flex-1 flex-col justify-start md:px-5 w-full">
              <Header2 className="bg-cyan-300 flex flex-row font-roboto items-center justify-center md:ml-[0] ml-[955px] mr-9 w-full" />
              <Text
                className="md:ml-[0] ml-[389px] mt-[55px] text-4xl sm:text-[32px] md:text-[34px] text-black-900_01 text-center"
                size="txtSanchezRegular36"
              >
                Create New Ticket
              </Text>
              <div className="flex flex-col font-sanchez gap-[23px] items-center justify-start md:ml-[0] ml-[71px] mt-8 w-[83%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <List
                      className="flex flex-col gap-[18px] items-center w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start my-0 w-full">
                        <Text
                          className="sm:mt-0 mt-1 text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                          size="txtSanchezRegular24"
                        >
                          Ticket No.
                        </Text>
                        <div className="bg-gray-400_a0 h-[43px] ml-6 sm:ml-[0] rounded-[10px] shadow-bs w-[31%]"></div>
                        <Text
                          className="sm:ml-[0] ml-[82px] sm:mt-0 mt-1 text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                          size="txtSanchezRegular24"
                        >
                          Date:
                        </Text>
                        <div className="bg-gray-400_a0 h-[43px] sm:ml-[0] ml-[109px] rounded-[10px] shadow-bs w-[31%]"></div>
                      </div>
                      <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start my-0 w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                          size="txtSanchezRegular24"
                        >
                          Name:{" "}
                        </Text>
                        <div className="bg-gray-400_a0 h-[43px] sm:ml-[0] ml-[67px] sm:mt-0 mt-0.5 rounded-[10px] shadow-bs w-[31%]"></div>
                        <Text
                          className="sm:ml-[0] ml-[84px] sm:mt-0 mt-[9px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                          size="txtSanchezRegular24"
                        >
                          Department:
                        </Text>
                        <div className="bg-gray-400_a0 h-[43px] mb-0.5 sm:ml-[0] ml-[25px] rounded-[10px] shadow-bs w-[31%]"></div>
                      </div>
                    </List>
                    <Text
                      className="mt-[17px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                      size="txtSanchezRegular24"
                    >
                      Subject:{" "}
                    </Text>
                    <div className="bg-gray-400_a0 h-[41px] mt-[15px] rounded-[10px] shadow-bs w-full"></div>
                    <div className="flex flex-row sm:gap-10 items-center justify-between mt-[26px] w-[57%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                        size="txtSanchezRegular24"
                      >
                        Category:
                      </Text>
                      <Text
                        className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                        size="txtSanchezRegular24"
                      >
                        Description:
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row gap-[25px] items-center justify-between mt-[15px] w-full">
                      <div className="flex md:flex-1 flex-col items-start justify-start w-[41%] md:w-full">
                        <div className="bg-gray-400_a0 h-[42px] rounded-[10px] shadow-bs w-full"></div>
                        <Text
                          className="mt-[18px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                          size="txtSanchezRegular24"
                        >
                          Type:
                        </Text>
                        <div className="bg-gray-400_a0 h-[43px] mt-3 rounded-[10px] shadow-bs w-full"></div>
                        <Text
                          className="mt-[17px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                          size="txtSanchezRegular24"
                        >
                          Priority:
                        </Text>
                        <div className="bg-gray-400_a0 h-[43px] mt-3 rounded-[10px] shadow-bs w-full"></div>
                      </div>
                      <div className="bg-gray-400_a0 flex md:flex-1 flex-col items-end justify-end md:mt-0 mt-0.5 p-[9px] rounded-[10px] shadow-bs w-[57%] md:w-full">
                        <div className="bg-cyan-300 flex flex-col items-center justify-start mt-[184px] p-[9px] rounded-[10px] w-[10%] md:w-full">
                          <Img
                            className="h-7"
                            src="images/img_thumbsup.svg"
                            alt="thumbsup"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between w-full">
                  <Img
                    className="h-36 md:h-auto rounded-[50%]"
                    src="images/img_loginnocaptch.png"
                    alt="loginnocaptch"
                  />
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[297px] sm:mt-0 mt-[87px] text-2xl md:text-[22px] text-center sm:text-xl"
                    shape="round"
                    color="cyan_300"
                    size="lg"
                    variant="fill"
                  >
                    Submit
                  </Button>
                </div>
              </div>
              <Button
                className="cursor-pointer font-bold font-roboto leading-[normal] min-w-[1190px] md:min-w-full mt-[72px] text-center text-xs"
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

export default UserNewTicketPage;
