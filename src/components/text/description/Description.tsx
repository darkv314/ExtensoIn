import React from "react";
import "./Description.css";

interface Props {
  title: string;
  content: string;
}

const Description: React.FC<Props> = ({ title, content }) => {
  return (
    <div className="description">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Description;