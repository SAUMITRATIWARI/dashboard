import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import SignInpageModal from "modals/SignInpage";

import { Button, Img, List, Text } from "components";
import Header3 from "components/Header3";

const UserDashboardPage = () => {
  const navigate = useNavigate();
  const [isOpenSignInpageModal, setSignInpageModal] = React.useState(false);

  function handleOpenSignInpageModal() {
    setSignInpageModal(true);
  }
  function handleCloseSignInpageModal() {
    setSignInpageModal(false);
  }

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="md:h-[1002px] h-[1023px] sm:h-[1076px] md:px-5 relative w-full">
          <div className="absolute flex flex-col gap-[26px] h-max inset-y-[0] justify-start left-[0] my-auto w-[94%]">
            <Header3 className="bg-green-A200 flex flex-row items-center justify-center md:ml-[0] ml-[1193px] w-full" />
            <div className="flex sm:flex-col flex-row font-sanchez sm:gap-10 gap-[456px] items-start justify-start mr-[457px] w-[67%] md:w-full">
              <Sidebar className="!sticky !w-[250px] bg-gray-700_35 flex h-screen md:hidden justify-start overflow-auto top-[0]">
                <Menu
                  menuItemStyles={{
                    button: {
                      padding: 0,
                      gap: "19px",
                      marginTop: "34px",
                      paddingBottom: "18px",
                      color: "#000000",
                      fontSize: "26px",
                      paddingLeft: "18px",
                      paddingRight: "18px",
                    },
                  }}
                  renderExpandIcon={() => (
                    <Img
                      className="h-[19px] mt-2.5 w-3"
                      src="images/img_arrowright.svg"
                      alt="arrowright"
                    />
                  )}
                  className="flex flex-col items-center justify-start mb-[724px] mt-[35px] w-full"
                >
                  <SubMenu
                    icon={
                      <Img
                        className="h-[29px] md:h-auto mt-[5px] object-cover w-[22%]"
                        src="images/img_dashboardlayout.png"
                        alt="dashboardlayout"
                      />
                    }
                    label={
                      <Text
                        className="common-pointer md:text-2xl sm:text-[22px]"
                        onClick={() => navigate("/userdashboard")}
                      >
                        Dashboard
                      </Text>
                    }
                  >
                    <MenuItem>Submenu Item</MenuItem>
                  </SubMenu>
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
                    <Text
                      className="common-pointer mb-[15px] md:text-2xl sm:text-[22px]"
                      onClick={() => navigate("/usernewticket")}
                    >
                      New Ticket
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
                    href="/technicalsupportmyticket"
                  >
                    <Text
                      className="common-pointer md:text-2xl sm:text-[22px]"
                      onClick={() => navigate("/usermyticket")}
                    >
                      My Ticket
                    </Text>
                  </MenuItem>
                </Menu>
              </Sidebar>
              <Text
                className="sm:mt-0 mt-[26px] text-4xl sm:text-[32px] md:text-[34px] text-black-900_01 text-center"
                size="txtSanchezRegular36"
              >
                Dashboard
              </Text>
            </div>
          </div>
          <div className="absolute font-sanchez md:h-[273px] h-[280px] right-[6%] top-[19%] w-[18%]">
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
          <div className="absolute font-sanchez md:h-[273px] h-[280px] right-1/4 top-[19%] w-[18%]">
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
          <div className="absolute font-sanchez md:h-[273px] h-[280px] left-[38%] top-[19%] w-[18%]">
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
          <div className="absolute font-sanchez md:h-[273px] h-[280px] left-[19%] top-[19%] w-[18%]">
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
          <div className="absolute flex flex-col font-roboto inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
            <div className="flex flex-col justify-start w-full">
              <div className="bg-cyan-300 flex sm:flex-col flex-row md:gap-10 items-center justify-between p-[11px] w-full">
                <Text
                  className="italic ml-3 sm:ml-[0] sm:mt-0 mt-[9px] text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                  size="txtRobotoBoldItalic48WhiteA700"
                >
                  Helpdesk
                </Text>
                <div className="flex flex-row gap-[15px] items-center justify-center mr-[15px]">
                  <div className="flex flex-row gap-[17px] items-center justify-between w-[79%]">
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
                      alt="vector_One"
                    />
                    <Img
                      className="common-pointer h-7"
                      src="images/img_lock.svg"
                      alt="lock_One"
                      onClick={handleOpenSignInpageModal}
                    />
                  </div>
                  <Img
                    className="common-pointer h-[25px]"
                    src="images/img_user.svg"
                    alt="user"
                    onClick={() => navigate("/signinpage")}
                  />
                </div>
              </div>
              <div className="flex md:flex-col flex-row font-sanchez md:gap-5 items-center justify-start md:ml-[0] ml-[19px] mt-[25px] w-[61%] md:w-full">
                <Img
                  className="h-[19px]"
                  src="images/img_arrowright.svg"
                  alt="arrowright_One"
                />
                <div className="flex flex-row gap-3.5 items-end justify-start ml-1.5 md:ml-[0] w-[22%] md:w-full">
                  <Img
                    className="h-[29px] md:h-auto mt-[5px] object-cover w-[21%]"
                    src="images/img_dashboardlayout.png"
                    alt="dashboardlayout_One"
                  />
                  <Text
                    className="md:text-2xl sm:text-[22px] text-[26px] text-black-900_01"
                    size="txtSanchezRegular26"
                  >
                    Dashboard
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[480px] text-4xl sm:text-[32px] md:text-[34px] text-black-900_01 text-center"
                  size="txtSanchezRegular36"
                >
                  Dashboard
                </Text>
              </div>
              <div className="flex md:flex-col flex-row font-sanchez md:gap-[46px] items-start justify-between md:ml-[0] ml-[43px] mt-8 w-[92%] md:w-full">
                <div className="flex flex-col gap-[34px] items-start justify-start w-[15%] md:w-full">
                  <div className="flex flex-row gap-[19px] items-start justify-start w-full">
                    <Img
                      className="h-7 md:h-auto object-cover w-[27px]"
                      src="images/img_newticket.png"
                      alt="newticket_Two"
                    />
                    <Text
                      className="md:text-2xl sm:text-[22px] text-[26px] text-black-900_01"
                      size="txtSanchezRegular26"
                    >
                      New Ticket
                    </Text>
                  </div>
                  <div
                    className="common-pointer flex flex-row gap-[19px] items-start justify-start w-[92%] md:w-full"
                    onClick={() => navigate("/usermyticket")}
                  >
                    <Img
                      className="h-7 md:h-auto object-cover w-[27px]"
                      src="images/img_twotickets.png"
                      alt="twotickets_One"
                    />
                    <Text
                      className="md:text-2xl sm:text-[22px] text-[26px] text-black-900_01"
                      size="txtSanchezRegular26"
                    >
                      My Ticket
                    </Text>
                  </div>
                </div>
                <List
                  className="sm:flex-col flex-row gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-[83%] md:w-full"
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
              </div>
            </div>
          </div>
          <Button
            className="absolute bottom-[0] cursor-pointer font-bold leading-[normal] min-w-[1190px] md:min-w-full right-[0] text-center text-xs"
            shape="square"
            color="cyan_300"
            size="xl"
            variant="fill"
          >
            Footer Area
          </Button>
        </div>
      </div>
      {isOpenSignInpageModal ? (
        <SignInpageModal
          isOpen={isOpenSignInpageModal}
          onRequestClose={handleCloseSignInpageModal}
        />
      ) : null}
    </>
  );
};

export default UserDashboardPage;
