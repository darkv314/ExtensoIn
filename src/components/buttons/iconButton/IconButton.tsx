import React from "react";
import { QuestionMark } from "iconoir-react";
import "./IconButton.css";

interface ButtonProps {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
}

const IconButton: React.FC<ButtonProps> = ({ label, onClick, icon }) => {
  return (
    <button onClick={onClick}>
      {icon? icon : <QuestionMark />}
      {label}
    </button>
  );
};

export default IconButton;
