import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const Header5 = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <div className="flex flex-row gap-[17px] items-center justify-between w-[76%] md:w-full">
          <div className="flex flex-col items-center justify-start">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[27px] items-start justify-end p-1 w-full"
              style={{ backgroundImage: "url('images/img_group1.svg')" }}
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
          <Img className="h-7" src="images/img_vector.svg" alt="vector" />
          <Img
            className="common-pointer h-7"
            src="images/img_lock.svg"
            alt="lock"
            onClick={() => navigate("/userprofilefeedback")}
          />
        </div>
        <Img
          className="h-[25px] md:ml-[0] ml-[23px] md:mt-0 my-0.5"
          src="images/img_user.svg"
          alt="user"
        />
      </header>
    </>
  );
};

Header5.defaultProps = {};

export default Header5;
