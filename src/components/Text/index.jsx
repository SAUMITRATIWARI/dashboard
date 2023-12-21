import React from "react";

const sizeClasses = {
  txtRobotoRegular24Black900db: "font-normal font-roboto",
  txtRobotoBold18: "font-bold font-roboto",
  txtRobotoBold18Black90001: "font-bold font-roboto",
  txtSanchezRegular30Black900a8: "font-normal font-sanchez",
  txtSanchezRegular36Indigo900: "font-normal font-sanchez",
  txtRobotoRegular24DeeppurpleA700: "font-normal font-roboto",
  txtRobotoRegular24IndigoA70002: "font-normal font-roboto",
  txtSanchezRegular25: "font-normal font-sanchez",
  txtSanchezRegular24: "font-normal font-sanchez",
  txtRobotoRegular24: "font-normal font-roboto",
  txtRobotoRegular24IndigoA70001: "font-normal font-roboto",
  txtSanchezRegular26: "font-normal font-sanchez",
  txtRobotoRegular24IndigoA700: "font-normal font-roboto",
  txtSanchezRegular20: "font-normal font-sanchez",
  txtRobotoRegular24WhiteA700: "font-normal font-roboto",
  txtRobotoRegular20: "font-normal font-roboto",
  txtRobotoBoldItalic48WhiteA700: "font-bold font-roboto italic",
  txtRobotoBoldItalic48: "font-bold font-roboto italic",
  txtSanchezRegular96: "font-normal font-sanchez",
  txtSanchezRegular30: "font-normal font-sanchez",
  txtSanchezRegular26WhiteA700: "font-normal font-sanchez",
  txtRobotoBold12Black90001: "font-bold font-roboto",
  txtSanchezRegular36: "font-normal font-sanchez",
  txtRobotoBoldItalic48Green50: "font-bold font-roboto italic",
  txtSanchezRegular18: "font-normal font-sanchez",
  txtRobotoRegular30: "font-normal font-roboto",
  txtRobotoBold12: "font-bold font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
