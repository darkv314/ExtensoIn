import React from 'react';
import './PostulanteCard.css';
interface PostulanteCardProps {
  urlImage: string;
  name: string;
  catchPhrase: string;
}

const PostulanteCard: React.FC<PostulanteCardProps> = ({ urlImage, name, catchPhrase }) => {

  return (
    <div className="postulanteCard">
      <img className="postulanteCard-avatar" src={urlImage} alt={name} />
      <div className="postulanteCard-content">
        <h2>{name}</h2>
        <p>{catchPhrase}</p>
      </div>
    </div>
  );
};

export default PostulanteCard;