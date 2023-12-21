import React from "react";

import { Img, Text } from "components";

const Header4 = (props) => {
  return (
    <>
      <header className={props.className}>
        <Text
          className="italic ml-6 md:ml-[0] md:mt-0 my-4 text-5xl sm:text-[38px] md:text-[44px] text-green-50"
          size="txtRobotoBoldItalic48Green50"
        >
          Helpdesk
        </Text>
        <div className="flex md:flex-col flex-row gap-[17px] items-center justify-center md:ml-[0] ml-[979px] mr-[31px] md:mt-0 my-[30px] w-[14%] md:w-full">
          <div className="flex flex-col items-center justify-start w-[38%] md:w-full">
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
          <Img className="h-7" src="images/img_lock.svg" alt="lock" />
          <Img className="h-[25px]" src="images/img_user.svg" alt="user" />
        </div>
      </header>
    </>
  );
};

Header4.defaultProps = {};

export default Header4;
