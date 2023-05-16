import React from "react";
import "./PostCard.css";
import IconButton from "../../../components/buttons/iconButton/IconButton";
import { Golf } from "iconoir-react";

interface Props {
  title: string;
  author: string;
  description: string;
  image?: string;
  page?: boolean;
  onCLickButton?: () => void;
}

const PostCard: React.FC<Props> = ({
  title,
  author,
  description,
  image,
  page = false,
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
      {page ? null : (
        <IconButton label="Postular" onClick={onCLickButton} icon={<Golf />} />
      )}
    </div>
  );
};

export default PostCard;
