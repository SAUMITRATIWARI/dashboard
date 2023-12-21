import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Input, Text, TextArea } from "components";

const OperationTeamMyticketTeamCreationModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[61%]"
      overlayClassName="bg-black-900_70 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 border border-black-900_8c border-solid flex flex-col gap-[30px] items-center justify-start max-w-[868px] mt-6 mx-auto p-[39px] md:px-5 w-full">
          <Text
            className="text-3xl sm:text-[26px] md:text-[28px] text-black-900_01 text-center"
            size="txtRobotoRegular30"
          >
            My Ticket - Team Creation
          </Text>
          <div className="bg-cyan-300 flex flex-col items-center justify-start mb-[66px] p-[25px] sm:px-5 rounded-[20px] w-[90%] md:w-full">
            <div className="flex flex-col gap-[39px] justify-start mb-[30px] mt-[38px] w-[98%] md:w-full">
              <div className="flex md:flex-col flex-row gap-3 items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col gap-3.5 items-center justify-start w-[43%] md:w-full">
                  <Input
                    name="ticketnumber"
                    placeholder="Ticket No."
                    className="italic p-0 placeholder:text-black-900_01 text-center text-lg tracking-[-0.08px] w-full"
                    wrapClassName="w-full"
                    size="md"
                  ></Input>
                  <Input
                    name="teamname"
                    placeholder="Team name"
                    className="p-0 placeholder:text-black-900_01 text-center text-lg tracking-[-0.08px] w-full"
                    wrapClassName="w-full"
                    type="text"
                    size="md"
                  ></Input>
                  <Input
                    name="teammember"
                    placeholder="Team Member"
                    className="p-0 placeholder:text-black-900_01 text-center text-lg tracking-[-0.08px] w-full"
                    wrapClassName="flex w-full"
                    suffix={
                      <div className="ml-[35px] sm:w-full sm:mx-0 w-[13%] bg-black-900_01">
                        <Img
                          className="my-auto"
                          src="images/img_user_black_900_01_25x33.svg"
                          alt="user"
                        />
                      </div>
                    }
                  ></Input>
                </div>
                <TextArea
                  className="bg-white-A700 border-0 sm:flex-1 pb-[35px] pl-[15px] sm:pr-5 pr-[35px] pt-2.5 rounded-[10px] shadow-bs placeholder:text-black-900_01 text-black-900_01 text-center text-lg tracking-[-0.08px] w-[56%] sm:w-full"
                  name="group3914"
                  placeholder="Remark"
                ></TextArea>
              </div>
              <div className="flex flex-row gap-[11px] items-start justify-start md:ml-[0] ml-[195px] w-[29%] md:w-full">
                <Img
                  className="h-[33px] mt-[3px]"
                  src="images/img_mdirefresh.svg"
                  alt="mdirefresh"
                />
                <Button
                  className="cursor-pointer font-bold min-w-[138px] text-center text-lg tracking-[-0.08px]"
                  shape="round"
                  color="gray_400_01"
                  size="md"
                  variant="fill"
                >
                  Create Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default OperationTeamMyticketTeamCreationModal;
