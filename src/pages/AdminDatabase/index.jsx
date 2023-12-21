import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, List, ReactTable, Text } from "components";
import Header1 from "components/Header1";

const AdminDatabasePage = () => {
  const tableData = React.useRef([
    {
      staffid: "ABC124",
      name: "Ahmad",
      department: "Software",
      speciality: "Networking",
      setting: "images/img_thumbsup_black_900_01.svg",
    },
    {
      staffid: "ABC125",
      name: "Ali",
      department: "Technical",
      speciality: "Hardware",
      setting: "images/img_thumbsup_black_900_01.svg",
    },
  ]);
  const navigate = useNavigate();
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("staffid", {
        cell: (info) => (
          <div className="flex flex-row gap-[77px] items-center justify-start p-[13px]">
            <div className="bg-white-A700 h-8 ml-[26px] mt-1 w-[10%]"></div>
            <Text
              className="text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
              size="txtRobotoRegular24Black900db"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[327px] pb-0.5 sm:px-5 px-[35px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl tracking-[-0.08px]"
            size="txtRobotoRegular24"
          >
            Staff ID
          </Text>
        ),
      }),
      tableColumnHelper.accessor("name", {
        cell: (info) => (
          <Text
            className="py-4 text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
            size="txtRobotoRegular24Black900db"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[186px] pl-2 text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
            size="txtRobotoRegular24"
          >
            Name
          </Text>
        ),
      }),
      tableColumnHelper.accessor("department", {
        cell: (info) => (
          <Text
            className="pl-3.5 py-4 text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
            size="txtRobotoRegular24Black900db"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[211px] pt-0.5 text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
            size="txtRobotoRegular24"
          >
            Department
          </Text>
        ),
      }),
      tableColumnHelper.accessor("speciality", {
        cell: (info) => (
          <Text
            className="pb-3.5 pt-[19px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
            size="txtRobotoRegular24Black900db"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[204px] pl-2 text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
            size="txtRobotoRegular24"
          >
            Speciality
          </Text>
        ),
      }),
      tableColumnHelper.accessor("setting", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-start p-0.5">
            <Img
              className="h-[30px] my-[13px]"
              alt="thumbsup"
              src={info?.getValue()}
            />
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[124px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl tracking-[-0.08px]"
            size="txtRobotoRegular24"
          >
            Setting
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-sanchez items-center justify-start mx-auto w-full">
        <div className="sm:h-[1018px] h-[1024px] md:h-[1127px] md:px-5 relative w-full">
          <div className="sm:h-[1018px] h-[1024px] md:h-[1127px] m-auto w-full">
            <div className="sm:h-[1018px] h-[1024px] md:h-[1127px] m-auto w-full">
              <div className="sm:h-[1018px] h-[1024px] md:h-[1127px] m-auto w-full">
                <div className="bg-white-A700 flex flex-col h-full items-end justify-end m-auto sm:pl-5 pl-9 pt-9 w-full">
                  <div className="flex flex-col justify-start w-[85%] md:w-full">
                    <Header1 className="bg-cyan-300 flex flex-row font-roboto items-center justify-center md:ml-[0] ml-[945px] mr-11 w-full" />
                    <Text
                      className="md:ml-[0] ml-[19px] mt-11 text-4xl sm:text-[32px] md:text-[34px] text-black-900_01"
                      size="txtSanchezRegular36"
                    >
                      Database
                    </Text>
                    <div className="flex flex-col font-sanchez items-start justify-start md:ml-[0] ml-[25px] mt-3.5 w-[91%] md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                        <div className="bg-cyan-300 border border-black-900_7f border-solid flex flex-col items-center justify-start p-0.5">
                          <Text
                            className="text-3xl sm:text-[26px] md:text-[28px] text-black-900_01 text-center"
                            size="txtSanchezRegular30"
                          >
                            User
                          </Text>
                        </div>
                        <List
                          className="md:flex-1 sm:flex-col flex-row gap-px grid md:grid-cols-1 grid-cols-2 w-[67%] md:w-full"
                          orientation="horizontal"
                        >
                          <div className="h-[45px] sm:ml-[0] relative w-full">
                            <div className="absolute bg-cyan-300 border border-black-900_7f border-solid h-[45px] inset-[0] justify-center m-auto w-full"></div>
                            <Text
                              className="absolute bottom-[0] inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-black-900_01 text-center w-max"
                              size="txtSanchezRegular30"
                            >
                              Operation Team
                            </Text>
                          </div>
                          <div className="h-[45px] sm:ml-[0] relative w-full">
                            <div className="absolute bg-cyan-300 border border-black-900_7f border-solid h-[45px] inset-[0] justify-center m-auto w-full"></div>
                            <Text
                              className="absolute bottom-[0] inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-black-900_01 text-center w-max"
                              size="txtSanchezRegular30"
                            >
                              Technical Support
                            </Text>
                          </div>
                        </List>
                      </div>
                      <Input
                        name="groupfifty"
                        placeholder="Find ticket"
                        className="md:text-[22px] p-0 placeholder:text-black-900_a8 sm:text-xl text-2xl text-left tracking-[-0.08px] w-full"
                        wrapClassName="flex mt-[15px] w-[22%]"
                        suffix={
                          <div className="mt-1 mb-[3px] ml-[35px] sm:w-full sm:mx-0 w-[3%] bg-black-900_e2">
                            <Img
                              className="my-auto"
                              src="images/img_rewind.svg"
                              alt="rewind"
                            />
                          </div>
                        }
                        color="gray_400_a0"
                        size="xs"
                      ></Input>
                      <div className="flex flex-row font-roboto gap-[9px] items-start justify-start md:ml-[0] ml-[79px] mt-[31px] w-[15%] md:w-full">
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
                      <Line className="bg-black-900_01 h-px md:ml-[0] ml-[3px] mt-[23px] w-[99%]" />
                      <div className="overflow-auto font-roboto md:ml-[0] ml-[3px] mt-3 w-[99%]">
                        <ReactTable
                          columns={tableColumns}
                          data={tableData.current}
                          rowClass={"odd:bg-gray-400_8e even:bg-gray-400_5e"}
                          headerClass=""
                        />
                      </div>
                      <div className="flex flex-row font-roboto md:gap-10 items-start justify-between md:ml-[0] ml-[3px] mt-2.5 w-[98%] md:w-full">
                        <Text
                          className="mt-2 text-2xl md:text-[22px] text-black-900_01 sm:text-xl tracking-[-0.08px]"
                          size="txtRobotoRegular24"
                        >
                          Showing 1 to 3 of 3 entries
                        </Text>
                        <div className="flex flex-row items-end justify-evenly mb-2">
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
                            alt="arrowright"
                          />
                          <Img
                            className="h-[17px] my-[5px]"
                            src="images/img_forward.svg"
                            alt="forward"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-cyan-300 h-[50px] mt-[322px] w-full"></div>
                  </div>
                </div>
                <Sidebar className="!sticky !w-[248px] bg-gray-700_35 flex h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto">
                  <Menu
                    menuItemStyles={{
                      button: {
                        padding: 0,
                        gap: "14px",
                        color: "#000000",
                        fontSize: "26px",
                        paddingLeft: "30px",
                        paddingRight: "30px",
                      },
                    }}
                    renderExpandIcon={() => (
                      <Img
                        className="h-[19px] mb-[5px] mt-2.5 w-3"
                        src="images/img_arrowright.svg"
                        alt="arrowrightone"
                      />
                    )}
                    className="common-pointer flex flex-col items-center justify-start mb-[417px] mt-[33px] w-full"
                    onClick={() => navigate("/usermyticket")}
                  >
                    <div className="flex flex-col gap-[31px] items-center justify-start w-full">
                      <MenuItem
                        icon={
                          <Img
                            className="h-[29px] md:h-auto mt-[5px] object-cover w-1/5"
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
                            className="h-[35px] md:h-auto object-cover w-1/4"
                            src="images/img_checkedusermale.png"
                            alt="checkedusermale"
                          />
                        }
                        label={
                          <Text className="text-2xl md:text-[22px] sm:text-xl">
                            User
                          </Text>
                        }
                      >
                        <MenuItem>Submenu Item</MenuItem>
                      </SubMenu>
                    </div>
                    <div className="flex flex-col gap-[29px] items-center justify-start mt-[210px] w-full">
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
                      <MenuItem
                        icon={
                          <Img
                            className="h-9 mt-1.5"
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
                  </Menu>
                </Sidebar>
              </div>
              <Text
                className="absolute left-[8%] text-2xl md:text-[22px] text-black-900_01 sm:text-xl top-[30%]"
                size="txtSanchezRegular24"
              >
                Operation Team
              </Text>
            </div>
            <Text
              className="absolute left-[7%] text-2xl md:text-[22px] text-black-900_01 sm:text-xl top-[38%]"
              size="txtSanchezRegular24"
            >
              Technical Support
            </Text>
          </div>
          <div className="absolute flex flex-col font-roboto md:gap-10 gap-[85px] justify-start right-[7%] top-[29%] w-[74%]">
            <Text
              className="md:ml-[0] ml-[5px] text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
              size="txtRobotoRegular24"
            >
              Show:
            </Text>
            <div className="bg-gray-400_5e flex sm:flex-col flex-row sm:gap-5 items-end justify-start p-[11px] w-full">
              <div className="bg-white-A700 h-8 mb-2 ml-7 sm:ml-[0] w-[3%]"></div>
              <Text
                className="sm:ml-[0] ml-[77px] sm:mt-0 my-[5px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                size="txtRobotoRegular24Black900db"
              >
                ABC123
              </Text>
              <Text
                className="mb-[3px] sm:ml-[0] ml-[111px] sm:mt-0 mt-[7px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                size="txtRobotoRegular24Black900db"
              >
                Abu
              </Text>
              <Text
                className="mb-[3px] sm:ml-[0] ml-[179px] sm:mt-0 mt-[7px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                size="txtRobotoRegular24Black900db"
              >
                IT
              </Text>
              <Text
                className="mb-[3px] sm:ml-[0] ml-[149px] sm:mt-0 mt-[7px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                size="txtRobotoRegular24Black900db"
              >
                Software
              </Text>
              <Img
                className="h-[30px] sm:ml-[0] ml-[99px] sm:mt-0 my-[5px]"
                src="images/img_thumbsup_black_900_01.svg"
                alt="thumbsuptwo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDatabasePage;
