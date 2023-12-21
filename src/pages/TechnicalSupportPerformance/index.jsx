import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import SignInpageModal from "modals/SignInpage";

import { Button, Img, Text } from "components";

const TechnicalSupportPerformancePage = () => {
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
      <div className="bg-white-A700 flex flex-col font-sanchez items-center justify-start mx-auto w-full">
        <div className="flex h-[1024px] md:h-[2406px] justify-end md:px-5 relative w-full">
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
          <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto pt-7 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
              <Sidebar className="!sticky !w-[250px] bg-gray-700_35 flex h-screen md:hidden justify-start md:mt-0 mt-[62px] overflow-auto top-[0]">
                <Menu
                  menuItemStyles={{
                    button: {
                      padding: 0,
                      paddingBottom: "25px",
                      paddingRight: "25px",
                      gap: "13px",
                      paddingLeft: "31px",
                      color: "#000000",
                      fontSize: "24px",
                    },
                  }}
                  renderExpandIcon={() => (
                    <Img
                      className="h-5 mt-0.5 w-3.5"
                      src="images/img_arrowright.svg"
                      alt="arrowright"
                    />
                  )}
                  className="flex flex-col items-center justify-start mb-[784px] mt-[15px] w-full"
                >
                  <MenuItem
                    icon={
                      <Img
                        className="h-[29px] md:h-auto object-cover w-1/5"
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
                  <MenuItem
                    icon={
                      <Img
                        className="h-[29px] md:h-auto object-cover w-[18%]"
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
                      className="common-pointer md:text-[22px] sm:text-xl"
                      onClick={() => navigate("/technicalsupportmyticket")}
                    >
                      My Ticket
                    </Text>
                  </MenuItem>
                  <SubMenu
                    icon={
                      <Img
                        className="h-[26px]"
                        src="images/img_user_black_900_01.svg"
                        alt="user"
                      />
                    }
                    label={
                      <Text className="mb-2.5 md:text-[22px] sm:text-xl">
                        Performance
                      </Text>
                    }
                  >
                    <MenuItem>Submenu Item</MenuItem>
                  </SubMenu>
                </Menu>
              </Sidebar>
              <div
                className="common-pointer flex flex-1 flex-col md:gap-10 gap-[346px] items-center justify-start w-full"
                onClick={handleOpenSignInpageModal}
              >
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[95%] md:w-full">
                  <div className="flex flex-col items-start justify-start md:mt-0 mt-[78px] w-[52%] md:w-full">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-black-900_01"
                      size="txtSanchezRegular36"
                    >
                      Performance
                    </Text>
                    <div className="flex sm:flex-col flex-row gap-[23px] items-center justify-between md:ml-[0] ml-[7px] mt-[50px] w-[99%] md:w-full">
                      <Img
                        className="h-[184px] mb-[3px]"
                        src="images/img_group64.svg"
                        alt="groupsixtyfour"
                      />
                      <div className="flex flex-col gap-[54px] items-start justify-start">
                        <Text
                          className="md:text-2xl sm:text-[22px] text-[26px] text-black-900_01"
                          size="txtSanchezRegular26"
                        >
                          Technical Support Name
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
                      className="bg-cover bg-no-repeat flex flex-col h-[200px] items-center justify-end mt-5 p-[19px] w-full"
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
                          alt="groupsixtynine"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[18px] items-center justify-start md:ml-[0] ml-[92px] md:mt-0 mt-[234px] w-[10%] md:w-full">
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
                  <div className="flex flex-col font-roboto md:gap-10 gap-[212px] justify-start mb-1 ml-5 md:ml-[0] w-[30%] md:w-full">
                    <header className="bg-cyan-300 flex flex-row items-center justify-center md:ml-[0] ml-[130px] w-full">
                      <div className="flex flex-col items-center justify-start w-[43%]">
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[35px] items-start justify-end p-1 w-full"
                          style={{
                            backgroundImage: "url('images/img_group1.svg')",
                          }}
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
                        className="h-[30px] ml-[17px] my-0.5"
                        src="images/img_vector.svg"
                        alt="vector"
                      />
                      <Img
                        className="common-pointer h-7 ml-2.5 my-[3px]"
                        src="images/img_lock.svg"
                        alt="lock"
                        onClick={() =>
                          navigate("/technicalsupportprofilefeedback")
                        }
                      />
                      <Img
                        className="h-[25px] ml-3 my-[5px]"
                        src="images/img_user.svg"
                        alt="userone"
                      />
                    </header>
                    <div className="flex flex-col font-sanchez items-start justify-start mr-[103px] w-[70%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                        size="txtSanchezRegular24"
                      >
                        Technical Support 1
                      </Text>
                      <Button
                        className="cursor-pointer leading-[normal] min-w-[186px] ml-4 md:ml-[0] mt-2.5 rounded-[20px] text-center text-xl"
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
                        Technical Support 2
                      </Text>
                      <Button
                        className="cursor-pointer leading-[normal] min-w-[186px] ml-4 md:ml-[0] mt-2.5 rounded-[20px] text-center text-xl"
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
                        Technical Support 3
                      </Text>
                      <Button
                        className="cursor-pointer leading-[normal] min-w-[186px] ml-4 md:ml-[0] mt-2.5 rounded-[20px] text-center text-xl"
                        color="cyan_300"
                        size="lg"
                        variant="fill"
                      >
                        View details
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-cyan-300 h-[50px] w-full"></div>
              </div>
            </div>
          </div>
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

export default TechnicalSupportPerformancePage;
