import React from "react";
import { default as ModalProvider } from "react-modal";

import { useNavigate } from "react-router-dom";

import { Button, Input, Text } from "components";

const SignInpageModal = (props) => {
  const navigate = useNavigate();

  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[70%]"
      overlayClassName="bg-cyan-300 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-gray-200_7f flex flex-col items-center justify-start max-w-[1000px] mx-auto p-[83px] md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start mb-[29px] w-[73%] md:w-full">
            <Text
              className="italic text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
              size="txtRobotoBoldItalic48"
            >
              Helpdesk System
            </Text>
            <div className="flex flex-col items-start justify-start w-full">
              <Input
                name="username"
                placeholder="Username"
                className="leading-[normal] md:text-[28px] p-0 placeholder:bg-white-A700 placeholder:text-black-900_01 sm:text-[26px] text-3xl text-left w-full"
                wrapClassName="border border-black-900_01 border-solid w-full"
                type="text"
                shape="square"
                size="lg"
              ></Input>
              <Input
                name="password"
                placeholder="Password"
                className="leading-[normal] md:text-[28px] p-0 placeholder:bg-white-A700 placeholder:text-black-900_01 sm:text-[26px] text-3xl text-left w-full"
                wrapClassName="border border-black-900_01 border-solid mt-[31px] w-full"
                type="password"
                shape="square"
                size="lg"
              ></Input>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[71px] items-center justify-end md:ml-[0] ml-[140px] mt-[43px] p-3.5 rounded-[20px] w-[54%] md:w-full"
                style={{ backgroundImage: "url('images/img_group28.svg')" }}
              >
                <Button className="bg-transparent cursor-pointer leading-[normal] min-w-[91px] mt-[5px] text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700">
                  Sign In
                </Button>
              </div>
              <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[15px] mt-[59px] w-[90%] md:w-full">
                <a className="mt-1 text-red-A700 text-xl">
                  <Text
                    className="common-pointer"
                    size="txtRobotoRegular20"
                    onClick={() => navigate("/forgotpasswordpage")}
                  >
                    Forgot password
                  </Text>
                </a>
                <Button
                  className="common-pointer bg-transparent cursor-pointer leading-[normal] min-w-[103px] text-3xl sm:text-[26px] md:text-[28px] text-black-900_01 text-center"
                  onClick={() => navigate("/signuppage")}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default SignInpageModal;
