import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, RatingBar, Text } from "components";
import Header1 from "components/Header1";

const TechnicalSupportProfileFeedbackPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-[29px] md:h-auto object-cover w-[22%]"
          src="images/img_dashboardlayout.png"
          alt="dashboardlayout"
        />
      ),
      label: "Dashboard",
      href: "/userdashboard",
      active: window.location.pathname === "/userdashboard",
    },
    {
      icon: (
        <Img
          className="h-[29px] md:h-auto object-cover w-[19%]"
          src="images/img_twotickets.png"
          alt="twotickets"
        />
      ),
      label: "My Ticket",
      href: "/technicalsupportmyticket",
      active: window.location.pathname === "/technicalsupportmyticket",
    },
    {
      icon: (
        <Img
          className="h-[26px]"
          src="images/img_user_black_900_01.svg"
          alt="user"
        />
      ),
      label: "Performance",
      href: "/technicalsupportperformance",
      active: window.location.pathname === "/technicalsupportperformance",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-sanchez items-center justify-end mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly mt-[29px] w-full">
          <Sidebar
            onClick={() => collapseSidebar(!collapsed)}
            className="!sticky !w-[250px] bg-gray-700_35 flex h-screen md:hidden justify-start md:mt-0 mt-[60px] overflow-auto md:px-5 top-[0]"
          >
            <Menu
              menuItemStyles={{
                button: {
                  padding: 0,
                  gap: "13px",
                  marginTop: "7px",
                  paddingBottom: "30px",
                  paddingLeft: "42px",
                  paddingRight: "30px",
                  color: "#000000",
                  fontSize: "24px",
                },
              }}
              className="flex flex-col items-center justify-start mb-[751px] mt-[19px] w-full"
            >
              {sideBarMenu?.map((menu, i) => (
                <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </Menu>
          </Sidebar>
          <div className="flex flex-1 flex-col justify-start md:px-5 w-full">
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
                    alt="usertwo"
                    onClick={() => navigate("/technicalsupportprofilesetting")}
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
                  name="lorem_ipsum"
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

export default TechnicalSupportProfileFeedbackPage;
