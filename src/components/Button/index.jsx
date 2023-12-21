import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none", round: "rounded-[10px]" };
const variants = {
  fill: {
    blue_700: "bg-blue-700 text-white-A700",
    cyan_300_77: "bg-cyan-300_77 text-black-900_01",
    indigo_A100: "bg-indigo-A100 text-black-900_01",
    black_900_01: "bg-black-900_01 text-white-A700",
    indigo_900: "bg-indigo-900 text-white-A700",
    gray_400_01: "bg-gray-400_01 shadow-bs text-black-900_01",
    gray_400: "bg-gray-400 text-black-900_01",
    cyan_300: "bg-cyan-300 text-black-900_01",
  },
};
const sizes = {
  xs: "p-px",
  sm: "p-[5px]",
  md: "p-[9px]",
  lg: "p-[13px]",
  xl: "p-[17px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "blue_700",
    "cyan_300_77",
    "indigo_A100",
    "black_900_01",
    "indigo_900",
    "gray_400_01",
    "gray_400",
    "cyan_300",
  ]),
};

export { Button };
