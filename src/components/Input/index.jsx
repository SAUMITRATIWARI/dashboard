import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  fill: {
    gray_500_01: "bg-gray-500_01 text-black-900_01",
    white_A700: "bg-white-A700 shadow-bs text-black-900_01",
    gray_400_a0: "bg-gray-400_a0 shadow-bs text-black-900_a8",
  },
};
const shapes = { square: "rounded-none", round: "rounded-[10px]" };
const sizes = {
  xs: "pb-[5px] pt-[3px] px-[3px]",
  sm: "pb-2.5 pt-1.5 px-1.5",
  md: "pb-[9px] pt-[11px] px-[9px]",
  lg: "p-[18px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "round",
      size = "sm",
      variant = "fill",
      color = "white_A700",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["gray_500_01", "white_A700", "gray_400_a0"]),
};

export { Input };
