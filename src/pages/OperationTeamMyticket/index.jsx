import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, ReactTable, Text } from "components";
import Header1 from "components/Header1";

const OperationTeamMyticketPage = () => {
  const table1Data = React.useRef([
    {
      rowticketno: "Login issue",
      category: "Feedback",
      rowpriority: "In Progress",
      action: "images/img_download.svg",
    },
    {
      rowticketno: "1124",
      category: "Feedback",
      rowpriority: "On hold",
      action: "images/img_download.svg",
    },
    {
      rowticketno: "New request",
      category: "Feedback",
      rowpriority: "Closed",
      action: "images/img_download.svg",
    },
    {
      rowticketno: "1244",
      category: "Ticketing",
      rowpriority: "In Progress",
      action: "images/img_download.svg",
    },
    {
      rowticketno: "Login issue",
      category: "Access issue",
      rowpriority: "In Progress",
      action: "images/img_download.svg",
    },
  ]);
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [
      table1ColumnHelper.accessor("rowticketno", {
        cell: (info) => (
          <div className="flex flex-row gap-[65px] items-start justify-start p-2">
            <Text
              className="mb-[7px] ml-7 text-2xl md:text-[22px] text-center text-indigo-A700_02 sm:text-xl tracking-[-0.08px] underline"
              size="txtRobotoRegular24IndigoA70002"
            >
              1234
            </Text>
            <Text
              className="mt-[7px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
              size="txtRobotoRegular24Black900db"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row gap-14 items-start justify-start min-w-[317px]">
            <Text
              className="mb-0.5 text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
              size="txtRobotoRegular24"
            >
              Ticket No.
            </Text>
            <Text
              className="mt-0.5 text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
              size="txtRobotoRegular24"
            >
              Subject
            </Text>
          </div>
        ),
      }),
      table1ColumnHelper.accessor("category", {
        cell: (info) => (
          <Text
            className="md:mt-0 mt-[53px] pb-[35px] pt-[-53px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
            size="txtRobotoRegular24Black900db"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[161px] pl-3.5 text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
            size="txtRobotoRegular24"
          >
            Category
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("rowpriority", {
        cell: (info) => (
          <div className="flex flex-row items-start justify-start p-1.5">
            <Text
              className="ml-3 mt-3 text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
              size="txtRobotoRegular24Black900db"
            >
              High
            </Text>
            <Text
              className="ml-[47px] mt-2 text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
              size="txtRobotoRegular24Black900db"
            >
              13/08/21
            </Text>
            <div className="h-[35px] md:h-[39px] ml-[25px] my-0.5 relative w-[24%]">
              <div className="bg-green-A200 h-[35px] m-auto rounded-[10px] w-full"></div>
              <Text
                className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px] w-max"
                size="txtRobotoRegular24"
              >
                {info?.getValue()}
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-start justify-start min-w-[516px] px-[5px]">
            <Text
              className="mt-[3px] text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
              size="txtRobotoRegular24"
            >
              Priority
            </Text>
            <Text
              className="text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
              size="txtRobotoRegular24"
            >
              Date
            </Text>
            <Text
              className="text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
              size="txtRobotoRegular24"
            >
              Status
            </Text>
            <Text
              className="text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
              size="txtRobotoRegular24"
            >
              Person in charge
            </Text>
          </div>
        ),
      }),
      table1ColumnHelper.accessor("action", {
        cell: (info) => (
          <div className="flex flex-row gap-1.5 items-center justify-center pr-[17px] py-[17px]">
            <Img
              className="common-pointer h-[19px] w-5"
              src="images/img_user_black_900_01_22x18.svg"
              alt="userone"
              onClick={() => navigate("/operationteammyticketcloseticket")}
            />
            <Img
              className="h-[18px]"
              src="images/img_user_black_900_01_21x27.svg"
              alt="usertwo"
            />
            <Img
              className="h-[18px] mr-2"
              alt="download"
              src={info?.getValue()}
            />
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[99px] pl-0.5 py-0.5 text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
            size="txtRobotoRegular24"
          >
            Action
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-sanchez items-center justify-start mx-auto w-full">
        <div className="flex h-[1024px] justify-end md:px-5 relative w-full">
          <div className="bg-green-200 flex flex-col h-full items-center justify-start mb-10 ml-auto mr-[41px] mt-auto p-[13px] w-[38%]">
            <div className="flex flex-col gap-[25px] items-center justify-start mb-3 w-[34%] md:w-full">
              <Text
                className="text-black-900_01 text-center text-lg"
                size="txtSanchezRegular18"
              >
                Customer Feedback
              </Text>
              <div className="flex flex-row items-center justify-evenly w-[96%] md:w-full">
                <Img
                  className="h-[35px]"
                  src="images/img_signal.svg"
                  alt="signal"
                />
                <Img
                  className="h-[35px]"
                  src="images/img_signal.svg"
                  alt="signalone"
                />
                <Img
                  className="h-[35px]"
                  src="images/img_signal.svg"
                  alt="signaltwo"
                />
                <Img
                  className="h-[35px]"
                  src="images/img_signal.svg"
                  alt="signalthree"
                />
                <Img
                  className="h-[34px]"
                  src="images/img_signal_green_50.svg"
                  alt="signalfour"
                />
              </div>
            </div>
          </div>
          <div className="absolute bg-white-A700 flex flex-col font-roboto gap-[30px] h-full inset-[0] justify-center m-auto pt-[31px] w-full">
            <Header1 className="bg-cyan-300 flex flex-row items-center justify-center md:ml-[0] ml-[1203px] mr-9 w-full" />
            <div className="h-[934px] relative w-full">
              <div className="absolute flex font-sanchez inset-y-[0] left-[0] my-auto w-[95%] md:w-full">
                <div className="h-[934px] my-auto w-[33%] sm:w-full">
                  <Sidebar
                    onClick={() => collapseSidebar(!collapsed)}
                    className="!sticky !w-[250px] bg-gray-700_35 flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto top-[0]"
                  >
                    <Img
                      className="h-5 ml-10 md:ml-[0] mr-[180px] mt-[103px]"
                      src="images/img_television.svg"
                      alt="television"
                    />
                    <Menu
                      menuItemStyles={{
                        button: {
                          padding: " 34px",
                          gap: "13px",
                          margin: " ",
                          color: "#000000",
                          fontSize: "24px",
                        },
                      }}
                      className="flex flex-col items-center justify-start mb-[878px] w-full"
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
                          className="common-pointer md:text-[22px] sm:text-xl"
                          onClick={() => navigate("/operationteamdashboard")}
                        >
                          Dashboard
                        </Text>
                      </MenuItem>
                    </Menu>
                  </Sidebar>
                  <Text
                    className="absolute right-[0] text-4xl sm:text-[32px] md:text-[34px] text-black-900_01 top-[3%]"
                    size="txtSanchezRegular36"
                  >
                    My Ticket
                  </Text>
                  <Text
                    className="common-pointer absolute left-[20%] text-2xl md:text-[22px] text-black-900_01 sm:text-xl top-[9%]"
                    size="txtSanchezRegular24"
                    onClick={() => navigate("/operationteamticketapproval")}
                  >
                    Ticket Approval
                  </Text>
                </div>
                <div className="overflow-auto font-roboto ml-[-173.55px] mt-[230px] w-[81%] z-[1]">
                  <ReactTable
                    columns={table1Columns}
                    data={table1Data.current}
                    rowClass={"odd:bg-gray-400_5e even:bg-gray-400_8e"}
                    headerClass=""
                  />
                </div>
              </div>
              <div className="absolute flex flex-col justify-start right-[6%] top-[9%] w-[77%]">
                <Input
                  name="groupfortynine"
                  placeholder="Find ticket"
                  className="font-sanchez md:text-[22px] p-0 placeholder:text-black-900_a8 sm:text-xl text-2xl text-left tracking-[-0.08px] w-full"
                  wrapClassName="flex ml-0.5 md:ml-[0] mr-[843px] w-[24%]"
                  suffix={
                    <div className="mt-[3px] mb-px ml-[35px] sm:w-full sm:mx-0 w-[3%] bg-black-900_e2">
                      <Img
                        className="my-auto"
                        src="images/img_rewind.svg"
                        alt="rewind"
                      />
                    </div>
                  }
                  color="gray_400_a0"
                ></Input>
                <div className="flex flex-row font-roboto gap-[7px] items-start justify-start mt-6 w-[22%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[-0.08px]"
                    size="txtRobotoRegular24"
                  >
                    Show:
                  </Text>
                  <div className="flex flex-row gap-2.5 items-start justify-between w-[69%]">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[75px]"
                      rightIcon={
                        <div className="ml-[17px] bg-black-900_a8 my-0.5">
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
                <Img
                  className="h-[19px] md:ml-[0] ml-[1071px] mt-1.5"
                  src="images/img_download.svg"
                  alt="downloadfive"
                />
                <Line className="bg-black-900_01 h-px ml-1.5 md:ml-[0] mt-[9px] w-full" />
                <Text
                  className="leading-[18.00px] md:ml-[0] ml-[324px] mt-[53px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px] w-[12%] sm:w-full"
                  size="txtRobotoRegular24Black900db"
                >
                  Access issue
                </Text>
                <div className="flex flex-row font-roboto gap-[21px] items-center justify-start md:ml-[0] ml-[142px] w-[28%] md:w-full">
                  <Text
                    className="leading-[18.00px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px] w-[53%] sm:w-full"
                    size="txtRobotoRegular24Black900db"
                  >
                    New ticket issue
                  </Text>
                  <Text
                    className="leading-[18.00px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px] w-[41%] sm:w-full"
                    size="txtRobotoRegular24Black900db"
                  >
                    Access issue
                  </Text>
                </div>
                <Text
                  className="leading-[18.00px] md:ml-[0] ml-[161px] mt-12 text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px] w-[12%] sm:w-full"
                  size="txtRobotoRegular24Black900db"
                >
                  Ticket submission
                </Text>
              </div>
              <Text
                className="absolute bottom-[39%] left-[18%] text-2xl md:text-[22px] text-black-900_01 sm:text-xl tracking-[-0.08px]"
                size="txtRobotoRegular24"
              >
                Showing 1 to 5 of 5 entries
              </Text>
              <div className="absolute bottom-[39%] flex flex-row font-roboto items-center justify-center right-[6%] w-[6%]">
                <Img
                  className="h-[15px] w-3.5"
                  src="images/img_refresh.svg"
                  alt="refresh"
                />
                <Img
                  className="h-3.5 ml-[3px]"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
                <Text
                  className="ml-[9px] text-2xl md:text-[22px] text-black-900_db text-center sm:text-xl tracking-[-0.08px]"
                  size="txtRobotoRegular24Black900db"
                >
                  1
                </Text>
                <Img
                  className="h-3.5 ml-[11px]"
                  src="images/img_arrowright_black_900_01.svg"
                  alt="arrowright"
                />
                <Img
                  className="h-[15px] ml-0.5 w-[15px]"
                  src="images/img_forward.svg"
                  alt="forward"
                />
              </div>
              <div className="absolute bg-cyan-300 bottom-[0] h-[50px] right-[0] w-[83%]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OperationTeamMyticketPage;
