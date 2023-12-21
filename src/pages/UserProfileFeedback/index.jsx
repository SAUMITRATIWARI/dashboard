import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, RatingBar, Text } from "components";
import Header5 from "components/Header5";

const UserProfileFeedbackPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-sanchez items-center justify-end mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly mt-[29px] w-full">
          <Sidebar className="!sticky !w-[250px] bg-gray-700_35 flex h-screen md:hidden justify-start md:mt-0 mt-[60px] overflow-auto md:px-5 top-[0]">
            <Menu
              menuItemStyles={{
                button: {
                  padding: 0,
                  gap: "14px",
                  paddingBottom: "22px",
                  color: "#000000",
                  fontSize: "26px",
                  paddingLeft: "22px",
                  paddingRight: "22px",
                },
              }}
              className="flex flex-col items-center justify-start mb-[732px] mt-3 w-full"
            >
              <MenuItem
                icon={
                  <Img
                    className="h-7 md:h-auto mt-0.5 object-cover w-1/5"
                    src="images/img_dashboardlayout.png"
                    alt="dashboardlayout"
                  />
                }
                active={window.location.pathname === "/userdashboard"}
                href="/userdashboard"
              >
                <Text
                  className="common-pointer mb-1.5 md:text-2xl sm:text-[22px]"
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
                <Text
                  className="common-pointer mb-[13px] md:text-2xl sm:text-[22px]"
                  onClick={() => navigate("/usernewticket")}
                >
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
                  <>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[19px] items-center justify-start mt-1.5 w-[7%]"
                      style={{
                        backgroundImage: "url('images/img_arrowright.svg')",
                      }}
                    >
                      <Img
                        className="h-[19px] w-3.5"
                        src="images/img_arrowright.svg"
                        alt="arrowright"
                      />
                    </div>
                    <Text
                      className="common-pointer my-[7px] md:text-2xl sm:text-[22px]"
                      onClick={() => navigate("/usermyticket")}
                    >
                      My Ticket
                    </Text>
                  </>
                }
              >
                <MenuItem>Submenu Item</MenuItem>
              </SubMenu>
            </Menu>
          </Sidebar>
          <div className="flex flex-1 flex-col justify-start md:px-5 w-full">
            <Header5 className="bg-cyan-300 flex md:flex-col flex-row font-roboto md:gap-5 items-center justify-center md:ml-[0] ml-[948px] mr-[35px] w-full" />
            <Text
              className="md:ml-[0] ml-[42px] mt-[43px] text-4xl sm:text-[32px] md:text-[34px] text-black-900_01"
              size="txtSanchezRegular36"
            >
              User Profile
            </Text>
            <div className="bg-cyan-300_ad flex md:flex-col flex-row font-sanchez gap-[59px] items-start justify-start md:ml-[0] ml-[54px] mr-12 mt-[18px] p-11 md:px-10 sm:px-5 w-[92%] md:w-full">
              <div className="h-[426px] md:h-[616px] mb-[193px] md:ml-[0] ml-[23px] relative w-[48%] md:w-full">
                <Img
                  className="h-9 ml-auto mr-[54px] mt-[140px] object-cover w-[9%]"
                  src="images/img_7835671.png"
                  alt="7835671"
                />
                <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] justify-center m-auto p-[17px] rounded-[22px] shadow-bs w-full">
                  <Img
                    className="common-pointer h-8 md:ml-[0] ml-[400px] w-[31px]"
                    src="images/img_user_black_900_01_22x18.svg"
                    alt="userone"
                    onClick={() => navigate("/userprofilesetting")}
                  />
                  <div className="h-[162px] md:h-[169px] md:ml-[0] ml-[129px] mt-[7px] relative w-[41%]">
                    <div className="bg-gray-400 h-[162px] m-auto rounded-[89px] w-full"></div>
                    <Img
                      className="absolute h-[95px] inset-[0] justify-center m-auto w-[94px]"
                      src="images/img_lock.svg"
                      alt="lockone"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start mb-[30px] md:ml-[0] ml-[11px] mr-[235px] mt-9">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                      size="txtSanchezRegular24"
                    >
                      Username
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                      size="txtSanchezRegular24"
                    >
                      Contact Number
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                      size="txtSanchezRegular24"
                    >
                      Email
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                      size="txtSanchezRegular24"
                    >
                      Department
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-end mb-96 p-[21px] sm:px-5 rounded-[22px] shadow-bs w-2/5 md:w-full">
                <Text
                  className="mt-[3px] text-black-900_01 text-lg"
                  size="txtSanchezRegular18"
                >
                  Give Your Feedback
                </Text>
                <Input
                  name="loremipsum"
                  placeholder="[Lorem Ipsum]"
                  className="leading-[normal] p-0 placeholder:text-black-900_01 text-left text-lg w-full"
                  wrapClassName="mt-1 w-[86%]"
                  shape="square"
                  color="gray_500_01"
                  size="md"
                ></Input>
                <RatingBar
                  className="flex justify-between mt-3.5 w-[143px]"
                  value={6}
                  starCount={6}
                  color="#c4c4c4"
                  size={24}
                ></RatingBar>
                <Button
                  className="cursor-pointer leading-[normal] min-w-[297px] mt-3.5 text-2xl md:text-[22px] text-center sm:text-xl"
                  shape="round"
                  color="cyan_300"
                  size="lg"
                  variant="fill"
                >
                  Submit Feedback
                </Button>
              </div>
            </div>
            <div className="bg-cyan-300 h-[49px] mt-[99px] w-full"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfileFeedbackPage;
