import React from "react";
import { default as ModalProvider } from "react-modal";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const ForgotpasswordpageModal = (props) => {
  const navigate = useNavigate();

  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[70%]"
      overlayClassName="bg-cyan-300 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-gray-200_7f flex flex-col items-center justify-end max-w-[1000px] mb-[54px] mx-auto p-[106px] md:px-5 w-full">
          <Text
            className="mt-[45px] text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl"
            size="txtRobotoRegular24"
          >
            <>
              Don’t worry, Enter your email below and we will <br />
              send you a link to change password.{" "}
            </>
          </Text>
          <Input
            name="email"
            placeholder="Email"
            className="leading-[normal] md:text-[28px] p-0 placeholder:bg-white-A700 placeholder:text-black-900_01 sm:text-[26px] text-3xl text-left w-full"
            wrapClassName="border border-black-900_01 border-solid mt-[42px] w-[77%]"
            type="email"
            shape="square"
            size="lg"
          ></Input>
          <div className="flex flex-col gap-[31px] items-center justify-start mt-[71px] w-[41%] md:w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[71px] items-center justify-start p-4 rounded-[20px] w-full"
              style={{ backgroundImage: "url('images/img_group28.svg')" }}
            >
              <Button className="bg-transparent cursor-pointer leading-[normal] min-w-[95px] text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700">
                Submit
              </Button>
            </div>
            <Button
              className="common-pointer cursor-pointer flex items-center justify-center min-w-[321px] pl-[35px] rounded-[20px]"
              onClick={() => navigate("/signinpage")}
              rightIcon={
                <div className="ml-[-206px] bg-blue-700 rounded-[20px]">
                  <Img
                    className="rounded-[20px]"
                    src="images/img_rectangle_174.svg"
                    alt="Rectangle 174"
                  />
                </div>
              }
              color="blue_700"
              variant="fill"
            >
              <div className="leading-[normal] md:text-[28px] sm:pl-5 sm:text-[26px] text-3xl text-left">
                Sign In
              </div>
            </Button>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default ForgotpasswordpageModal;
