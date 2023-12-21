import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Img, List, SelectBox, Text } from "components";

const generalOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const connectToOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const emailOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const authorizationOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const notificationOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const AdminSettingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-sanchez items-center justify-start mx-auto w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-end pt-[34px] w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
            <Sidebar className="!sticky !w-[250px] bg-gray-700_35 flex h-screen md:hidden justify-start md:mt-0 mt-14 overflow-auto md:px-5 top-[0]">
              <Menu
                menuItemStyles={{
                  button: {
                    padding: 0,
                    gap: "14px",
                    paddingBottom: "31px",
                    paddingLeft: "37px",
                    paddingRight: "31px",
                    color: "#000000",
                    fontSize: "26px",
                  },
                }}
                renderExpandIcon={() => (
                  <Img
                    className="h-[19px] mt-1 w-3"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                )}
                className="flex flex-col items-center justify-start mb-[651px] mt-[29px] w-full"
              >
                <MenuItem
                  icon={
                    <Img
                      className="h-[29px] md:h-auto mt-[5px] object-cover w-[21%]"
                      src="images/img_dashboardlayout.png"
                      alt="dashboardlayout"
                    />
                  }
                  active={window.location.pathname === "/userdashboard"}
                  href="/userdashboard"
                >
                  <Text
                    className="common-pointer md:text-2xl sm:text-[22px]"
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
                <SubMenu
                  icon={
                    <Img
                      className="h-8 w-[33px]"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  }
                  label={
                    <Text className="mb-[11px] md:text-2xl sm:text-[22px]">
                      Setting
                    </Text>
                  }
                >
                  <div className="flex flex-col items-center justify-end w-full">
                    <MenuItem
                      icon={
                        <Img
                          className="h-9 mb-[22px] mt-1.5"
                          src="images/img_reply.svg"
                          alt="reply"
                        />
                      }
                      active={
                        window.location.pathname === "/adminuserloghistory"
                      }
                      href="/adminuserloghistory"
                    >
                      <Text
                        className="common-pointer text-2xl md:text-[22px] sm:text-xl"
                        onClick={() => navigate("/adminuserloghistory")}
                      >
                        User Log History
                      </Text>
                    </MenuItem>
                  </div>
                </SubMenu>
              </Menu>
            </Sidebar>
            <div className="flex flex-1 flex-col font-roboto justify-start md:px-5 w-full">
              <header className="bg-cyan-300 flex md:flex-col flex-row md:gap-5 items-center justify-center md:ml-[0] ml-[962px] mr-7 w-full">
                <div className="flex md:flex-1 flex-row gap-[17px] items-center justify-between w-[79%] md:w-full">
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
                  className="h-[25px] ml-4 md:ml-[0] md:mt-0 mt-1"
                  src="images/img_user.svg"
                  alt="user"
                />
              </header>
              <div className="flex flex-col font-sanchez gap-3.5 items-start justify-start md:ml-[0] ml-[27px] mt-[46px] w-[90%] md:w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-black-900_01"
                  size="txtSanchezRegular36"
                >
                  Setting
                </Text>
                <div className="flex flex-col relative w-full">
                  <SelectBox
                    className="leading-[normal] mx-auto sm:text-[21px] md:text-[23px] text-[25px] text-left w-full"
                    placeholderClassName="text-black-900_01"
                    getOptionLabel={(e) => (
                      <div className="flex items-center">
                        <Img
                          className="h-3 mr-[-139px] right-[-13%] mt-[-NaNpx] z-[1]"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                        <span>{e.label}</span>
                      </div>
                    )}
                    isMulti={false}
                    name="group3890"
                    options={generalOptionsList}
                    isSearchable={false}
                    placeholder="General"
                    shape="square"
                    color="cyan_300"
                    size="sm"
                    variant="fill"
                  />
                  <div className="bg-gray-400_5e flex flex-row md:gap-10 items-end justify-between ml-auto mt-[-1px] p-1.5 w-[96%] z-[1]">
                    <Text
                      className="ml-[27px] mt-3 sm:text-[21px] md:text-[23px] text-[25px] text-black-900_01"
                      size="txtSanchezRegular25"
                    >
                      Language{" "}
                    </Text>
                    <div className="flex flex-col font-roboto items-center justify-start mr-[18px] my-0.5">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-10 items-start justify-end p-[7px] w-full"
                        style={{
                          backgroundImage: "url('images/img_group1.svg')",
                        }}
                      >
                        <div className="flex flex-row gap-[25px] items-center justify-start mt-[3px] w-[81%] md:w-full">
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
                  </div>
                </div>
                <List
                  className="flex flex-col gap-px items-center pt-[58px] w-full"
                  orientation="vertical"
                >
                  <SelectBox
                    className="flex-1 leading-[normal] my-0 sm:text-[21px] md:text-[23px] text-[25px] text-left w-full"
                    placeholderClassName="text-black-900_01"
                    getOptionLabel={(e) => (
                      <div className="flex items-center">
                        <Img
                          className="h-3 mr-[-176px] my-0"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                        <span>{e.label}</span>
                      </div>
                    )}
                    isMulti={false}
                    name="group"
                    options={connectToOptionsList}
                    isSearchable={false}
                    placeholder="Connect To"
                    shape="square"
                    color="cyan_300"
                    size="sm"
                    variant="fill"
                  />
                  <div className="bg-gray-400_8e flex md:flex-1 flex-row md:gap-10 gap-[748px] items-center justify-end ml-[45px] my-0 p-1.5 w-[96%] md:w-full">
                    <Text
                      className="mt-[13px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900_01"
                      size="txtSanchezRegular25"
                    >
                      Data Backup
                    </Text>
                    <div className="bg-white-A700 flex flex-col items-end justify-start mr-[50px] my-1.5 w-[3%]">
                      <Img
                        className="h-[18px] my-[5px]"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                    </div>
                  </div>
                  <div className="bg-gray-400_5e flex md:flex-1 flex-row md:gap-10 gap-[808px] items-start justify-end ml-[45px] my-0 p-[9px] w-[96%] md:w-full">
                    <Text
                      className="mt-1.5 sm:text-[21px] md:text-[23px] text-[25px] text-black-900_01"
                      size="txtSanchezRegular25"
                    >
                      GoDash
                    </Text>
                    <div className="bg-white-A700 flex flex-col items-end justify-start mr-[47px] mt-1.5 w-[3%]">
                      <Img
                        className="h-[18px] my-[5px]"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                    </div>
                  </div>
                  <div className="bg-gray-400_8e flex md:flex-1 flex-row md:gap-10 gap-[710px] items-center justify-end ml-[45px] my-0 p-[11px] w-[96%] md:w-full">
                    <Text
                      className="mt-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-black-900_01"
                      size="txtSanchezRegular25"
                    >
                      SuperController
                    </Text>
                    <div className="bg-white-A700 flex flex-col items-end justify-start mr-[45px] w-[3%]">
                      <Img
                        className="h-[18px] my-[5px]"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                    </div>
                  </div>
                  <SelectBox
                    className="flex-1 leading-[normal] my-0 sm:text-[21px] md:text-[23px] text-[25px] text-left w-full"
                    placeholderClassName="text-black-900_01"
                    getOptionLabel={(e) => (
                      <div className="flex items-center">
                        <Img
                          className="h-3 mr-[-109px] my-0"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                        <span>{e.label}</span>
                      </div>
                    )}
                    isMulti={false}
                    name="group"
                    options={emailOptionsList}
                    isSearchable={false}
                    placeholder="Email"
                    shape="square"
                    color="cyan_300"
                    size="sm"
                    variant="fill"
                  />
                  <div className="bg-gray-400_5e flex md:flex-1 flex-row md:gap-10 gap-[738px] items-center justify-end ml-[45px] my-0 p-[11px] w-[96%] md:w-full">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900_01"
                      size="txtSanchezRegular25"
                    >
                      Enable SMTP
                    </Text>
                    <div className="bg-white-A700 flex flex-col items-end justify-start mr-[45px] pl-1 py-1 w-[3%]">
                      <Img
                        className="h-[18px] my-0.5"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                    </div>
                  </div>
                  <SelectBox
                    className="flex-1 leading-[normal] my-0 sm:text-[21px] md:text-[23px] text-[25px] text-left w-full"
                    placeholderClassName="text-black-900_01"
                    getOptionLabel={(e) => (
                      <div className="flex items-center">
                        <Img
                          className="h-3 mr-[-210px] my-0"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                        <span>{e.label}</span>
                      </div>
                    )}
                    isMulti={false}
                    name="group"
                    options={authorizationOptionsList}
                    isSearchable={false}
                    placeholder="Authorization"
                    shape="square"
                    color="cyan_300"
                    size="xs"
                    variant="fill"
                  />
                  <div className="bg-gray-400_5e flex md:flex-1 flex-row md:gap-10 gap-[681px] items-center justify-end ml-[45px] my-0 p-1.5 w-[96%] md:w-full">
                    <Text
                      className="my-1.5 sm:text-[21px] md:text-[23px] text-[25px] text-black-900_01"
                      size="txtSanchezRegular25"
                    >
                      Edit authorization
                    </Text>
                    <div className="bg-white-A700 flex flex-col items-end justify-start mb-[13px] mr-[54px] pl-1 py-1 w-[3%]">
                      <Img
                        className="h-[18px] my-0.5"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                    </div>
                  </div>
                </List>
                <div className="h-[115px] relative w-full">
                  <div className="bg-gray-400_8e flex flex-row md:gap-10 items-center justify-between mb-[-1px] ml-auto p-[11px] w-[96%] z-[1]">
                    <Text
                      className="ml-[22px] mt-[3px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900_01"
                      size="txtSanchezRegular25"
                    >
                      Authority Level
                    </Text>
                    <div className="bg-gray-400 flex flex-col items-end justify-start mr-[22px] p-0.5">
                      <Img
                        className="h-[25px]"
                        src="images/img_lock_black_900_01.svg"
                        alt="lockone"
                      />
                    </div>
                  </div>
                  <SelectBox
                    className="leading-[normal] mt-auto mx-auto sm:text-[21px] md:text-[23px] text-[25px] text-left w-full"
                    placeholderClassName="text-black-900_01"
                    getOptionLabel={(e) => (
                      <div className="flex items-center">
                        <Img
                          className="h-3 mr-[-191px] right-[-18%] mb-[undefinedpx] z-[1]"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                        <span>{e.label}</span>
                      </div>
                    )}
                    isMulti={false}
                    name="group3886"
                    options={notificationOptionsList}
                    isSearchable={false}
                    placeholder="Notification"
                    shape="square"
                    color="cyan_300"
                    size="xs"
                    variant="fill"
                  />
                </div>
                <div className="bg-gray-400_5e flex flex-row md:gap-10 gap-[672px] items-center justify-end md:ml-[0] ml-[45px] p-2.5 w-[96%] md:w-full">
                  <Text
                    className="mt-[3px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900_01"
                    size="txtSanchezRegular25"
                  >
                    Enable Notification
                  </Text>
                  <div className="bg-white-A700 flex flex-col items-end justify-start mr-[47px] pl-1 py-1 w-[3%]">
                    <Img
                      className="h-[18px] my-0.5"
                      src="images/img_checkmark.svg"
                      alt="checkmark"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-cyan-300 h-[50px] mt-14 w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSettingPage;
