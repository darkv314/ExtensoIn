import React from "react";
import "./Title.css";

interface Props {
  text: string;
}

const Title: React.FC<Props> = ({ text }) => {
  return (
    <div className="title-container">
      <h1>{text}</h1>
    </div>
  );
};

export default Title;
