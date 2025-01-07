import React from "react";
import { cn } from "../lib/utils";

type ButtonType = {
  title?: string;
  id?: string | undefined;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  containerClassName?: string;
};

const Button = ({
  title,
  id,
  rightIcon,
  leftIcon,
  containerClassName,
}: ButtonType) => {
  return (
    <button
      id={id}
      className={cn(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black",
        containerClassName
      )}
    >
      {leftIcon}
      <span className="relative  overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
