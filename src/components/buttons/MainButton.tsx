import React from "react";
import "./MainButton.css";

interface Props {
  onClick: () => void;
  text: string;
}

const MainButton: React.FC<Props> = ({ onClick, text }) => {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default MainButton;