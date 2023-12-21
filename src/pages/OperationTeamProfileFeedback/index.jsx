import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, RatingBar, Text } from "components";
import Header1 from "components/Header1";

const OperationTeamProfileFeedbackPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 font-sanchez h-[1024px] mx-auto relative w-full">
        <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto md:px-5 right-[0] w-[83%]">
          <div className="flex flex-col justify-start w-full">
            <Header1 className="bg-cyan-300 flex flex-row font-roboto items-center justify-center md:ml-[0] ml-[960px] mr-[29px] w-full" />
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
                    onClick={() => navigate("/operationteamprofilesetting")}
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
        <div className="absolute bottom-[0] h-[933px] left-[0] md:px-5 w-1/5">
          <Sidebar
            onClick={() => collapseSidebar(!collapsed)}
            className="!sticky !w-[250px] bg-gray-700_35 flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto top-[0]"
          >
            <Img
              className="h-5 ml-11 md:ml-[0] mr-[175px] mt-[100px]"
              src="images/img_television.svg"
              alt="television"
            />
            <Menu
              menuItemStyles={{
                button: {
                  padding: 0,
                  gap: "13px",
                  paddingBottom: "11px",
                  color: "#000000",
                  fontSize: "24px",
                  paddingLeft: "11px",
                  paddingRight: "11px",
                },
              }}
              className="flex flex-col h-[250px] items-center justify-start mb-[660px] w-[250px]"
            >
              <MenuItem
                icon={
                  <Img
                    className="h-[29px] md:h-auto object-cover w-[22%]"
                    src="images/img_dashboardlayout.png"
                    alt="dashboardlayout"
                  />
                }
                active={window.location.pathname === "/userdashboard"}
                href="/userdashboard"
              >
                <Text
                  className="common-pointer mb-[154px] md:text-[22px] sm:text-xl"
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
                    alt="usertwo"
                  />
                }
                active={
                  window.location.pathname === "/technicalsupportperformance"
                }
                href="/technicalsupportperformance"
              >
                <Text
                  className="common-pointer mb-44 md:text-[22px] sm:text-xl"
                  onClick={() => navigate("/operationteamperformance")}
                >
                  Performance
                </Text>
              </MenuItem>
            </Menu>
          </Sidebar>
          <Text
            className="common-pointer absolute right-[0] text-2xl md:text-[22px] text-black-900_01 sm:text-xl top-[9%]"
            size="txtSanchezRegular24"
            onClick={() => navigate("/operationteamticketapproval")}
          >
            Ticket Approval
          </Text>
        </div>
      </div>
    </>
  );
};

export default OperationTeamProfileFeedbackPage;
