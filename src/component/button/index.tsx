import React from "react";
import { ButtonProps } from "@/src/types/button";

const Button = ({ children, onClick, disabled }: ButtonProps) => {
  return (
    <button
      type="button"
      className="w-full mt-4 px-8 py-2 capitalize text-md text-white bg-blue-600 rounded-md hover:bg-blue-500"
      onClick={onClick}
      disabled={disabled}
      style={{ cursor: disabled ? "not-allowed" : "pointer" }}
    >
      {children}
    </button>
  );
};

export default Button;
