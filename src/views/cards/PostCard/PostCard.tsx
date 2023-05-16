import React from "react";
import "./PostCard.css";
import IconButton from "../../../components/buttons/iconButton/IconButton";
import { Golf } from "iconoir-react";

interface Props {
  title: string;
  author: string;
  description: string;
  image?: string;
  onCLickButton?: () => void;
}

const PostCard: React.FC<Props> = ({
  title,
  author,
  description,
  image,
  onCLickButton = () => {},
}) => {
  return (
    <div className="post-card">
      {image ? <img src={image} alt={title} className="post-image" /> : null}
      <div className="post-content">
        <h2 className="post-title">{title}</h2>
        <p className="post-author">Por {author}</p>
        <p className="post-description">{description}</p>
      </div>
      <IconButton  label="Postular" onClick={onCLickButton} icon={<Golf />} />
    </div>
  );
};

export default PostCard;
