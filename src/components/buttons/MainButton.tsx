import React from "react";
import "./MainButton.css";

type MainButton = {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children?: React.ReactNode;
  rest?: any;
};

const MainButton = ({
  type = "button",
  onClick = () => {},
  children = "Click Me",
  ...rest
}: MainButton) => {
  return (
    <button type={type} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default MainButton;
