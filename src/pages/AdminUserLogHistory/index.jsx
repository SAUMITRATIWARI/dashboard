import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const AdminUserLogHistoryPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-sanchez items-center justify-start mx-auto w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-end pt-[31px] w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
            <Sidebar className="!sticky !w-[250px] bg-gray-700_35 flex h-screen md:hidden justify-start md:mt-0 mt-[59px] overflow-auto md:px-5 top-[0]">
              <Menu
                menuItemStyles={{
                  button: {
                    padding: 0,
                    gap: "14px",
                    paddingBottom: "31px",
                    paddingLeft: "33px",
                    paddingRight: "31px",
                    color: "#000000",
                    fontSize: "26px",
                  },
                }}
                renderExpandIcon={() => (
                  <Img
                    className="h-[19px] mt-1.5 w-3"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                )}
                className="flex flex-col items-center justify-start mb-[648px] mt-8 w-full"
              >
                <MenuItem
                  icon={
                    <Img
                      className="h-[29px] md:h-auto mb-0.5 mt-[5px] object-cover w-[21%]"
                      src="images/img_dashboardlayout.png"
                      alt="dashboardlayout"
                    />
                  }
                  active={window.location.pathname === "/userdashboard"}
                  href="/userdashboard"
                >
                  <Text
                    className="common-pointer mb-[3px] md:text-2xl sm:text-[22px]"
                    onClick={() => navigate("/admindashboard")}
                  >
                    Dashboard
                  </Text>
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      className="h-[31px]"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                  }
                  active={window.location.pathname === "/admindatabase"}
                  href="/admindatabase"
                >
                  <Text
                    className="common-pointer md:text-2xl sm:text-[22px]"
                    onClick={() => navigate("/admindatabase")}
                  >
                    Database
                  </Text>
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      className="h-8 w-[33px]"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  }
                  active={window.location.pathname === "/adminsetting"}
                  href="/adminsetting"
                >
                  <Text
                    className="common-pointer md:text-2xl sm:text-[22px]"
                    onClick={() => navigate("/adminsetting")}
                  >
                    Setting
                  </Text>
                </MenuItem>
                <SubMenu
                  icon={
                    <Img
                      className="h-9 mb-[18px] mt-1.5"
                      src="images/img_reply.svg"
                      alt="reply"
                    />
                  }
                  label={
                    <Text className="text-2xl md:text-[22px] sm:text-xl">
                      User Log History
                    </Text>
                  }
                >
                  <MenuItem>Submenu Item</MenuItem>
                </SubMenu>
              </Menu>
            </Sidebar>
            <div className="flex flex-1 flex-col justify-start md:px-5 w-full">
              <header className="bg-cyan-300 flex md:flex-col flex-row font-roboto md:gap-5 items-center justify-center md:ml-[0] ml-[947px] mr-[37px] w-full">
                <div className="flex md:flex-1 flex-row gap-[17px] items-center justify-between w-[77%] md:w-full">
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
                  className="h-[25px] md:ml-[0] ml-[22px] md:mt-0 my-0.5"
                  src="images/img_user.svg"
                  alt="user"
                />
              </header>
              <Text
                className="md:ml-[0] ml-[23px] mt-[52px] text-4xl sm:text-[32px] md:text-[34px] text-black-900_01"
                size="txtSanchezRegular36"
              >
                User Log History
              </Text>
              <div className="flex flex-row font-roboto gap-1.5 items-start justify-start md:ml-[0] ml-[37px] mt-3.5 w-[19%] md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                  size="txtRobotoRegular24"
                >
                  Show:
                </Text>
                <div className="flex flex-row gap-[9px] items-start justify-between w-[69%]">
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[73px]"
                    rightIcon={
                      <div className="mt-0.5 mb-px ml-4 bg-black-900_a8">
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
              <div className="flex flex-col font-roboto items-center justify-start ml-8 md:ml-[0] mt-[23px] w-[89%] md:w-full">
                <Line className="bg-black-900_01 h-px w-full" />
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[13px] w-[94%] md:w-full">
                  <Text
                    className="md:mt-0 my-[3px] text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                    size="txtRobotoRegular24"
                  >
                    No.
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[57px] md:mt-0 my-[3px] text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                    size="txtRobotoRegular24"
                  >
                    Date/Sign InTime
                  </Text>
                  <Text
                    className="mb-1.5 ml-11 md:ml-[0] text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                    size="txtRobotoRegular24"
                  >
                    Staff ID
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[41px] md:mt-0 mt-[5px] text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                    size="txtRobotoRegular24"
                  >
                    Department
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[50px] md:mt-0 my-0.5 text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                    size="txtRobotoRegular24"
                  >
                    Activity
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[85px] md:mt-0 mt-1.5 text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                    size="txtRobotoRegular24"
                  >
                    Date/Sign Out time
                  </Text>
                </div>
                <div className="bg-gray-400_5e flex sm:flex-col flex-row sm:gap-5 items-start justify-end mt-[7px] p-[11px] w-full">
                  <Text
                    className="mb-0.5 sm:mt-0 mt-[7px] text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                    size="txtRobotoRegular24"
                  >
                    1.
                  </Text>
                  <Text
                    className="mb-0.5 sm:ml-[0] ml-[79px] sm:mt-0 mt-2 text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                    size="txtRobotoRegular24Black900db"
                  >
                    130821 / 0800
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[43px] sm:mt-0 my-1 text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                    size="txtRobotoRegular24Black900db"
                  >
                    XL000001
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[77px] sm:mt-0 my-1 text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                    size="txtRobotoRegular24Black900db"
                  >
                    OT
                  </Text>
                  <Text
                    className="mb-0.5 ml-20 sm:ml-[0] sm:mt-0 mt-[7px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                    size="txtRobotoRegular24Black900db"
                  >
                    Create Team
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[71px] mr-[31px] sm:mt-0 mt-2.5 text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                    size="txtRobotoRegular24Black900db"
                  >
                    130821 / 0815
                  </Text>
                </div>
                <div className="bg-gray-400_8e flex sm:flex-col flex-row sm:gap-5 items-start justify-end p-[9px] w-full">
                  <Text
                    className="sm:mt-0 mt-[13px] text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                    size="txtRobotoRegular24"
                  >
                    2.
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[79px] sm:mt-0 mt-3.5 text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                    size="txtRobotoRegular24Black900db"
                  >
                    130821 / 0805
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[545px] mr-[33px] sm:mt-0 my-[7px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                    size="txtRobotoRegular24Black900db"
                  >
                    130821 / 0810
                  </Text>
                </div>
                <Text
                  className="bg-gray-400_5e h-[62px] justify-center max-w-[1055px] md:max-w-full sm:px-5 px-[35px] py-4 text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px] w-full"
                  size="txtRobotoRegular24"
                >
                  3.
                </Text>
                <Text
                  className="bg-gray-400_8e h-[61px] justify-center max-w-[1055px] md:max-w-full pb-[18px] pt-[13px] sm:px-5 px-[35px] text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px] w-full"
                  size="txtRobotoRegular24"
                >
                  4.
                </Text>
                <Text
                  className="bg-gray-400_5e h-[62px] justify-center max-w-[1055px] md:max-w-full sm:px-5 px-[35px] py-4 text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px] w-full"
                  size="txtRobotoRegular24"
                >
                  5.
                </Text>
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
              <div className="bg-cyan-300 h-[50px] mt-[333px] w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminUserLogHistoryPage;
