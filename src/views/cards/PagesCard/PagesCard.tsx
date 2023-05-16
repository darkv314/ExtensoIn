import React from "react";
import "./PagesCard.css";

interface Page {
  name: string;
  iconURL: string;
}

interface PageCardProps {
  pages: Page[];
}

const PageCard: React.FC<PageCardProps> = ({ pages }) => {
  return (
    <div className="pages__card">
      {pages.map((page, index) => (
        <div key={index} className="pages_card-all">
          <img src={page.iconURL} alt={page.name} className="pages_card-avatar" />
          <div className="pages__card-content">
            <h2>{page.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PageCard;