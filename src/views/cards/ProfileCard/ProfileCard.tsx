import React from "react";
import "./ProfileCard.css";

interface ProfileCardProps {
  imageSrc: string;
  imageAlt: string;
  description: string;
  name: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  imageSrc,
  imageAlt,
  description,
  name,
}) => {
  return (
    <div className="card">
      <h2>Perfil</h2>
      <img src={imageSrc} alt={imageAlt} className="avatar" />
      <div className="card-content">
        <p className="card-name">{name}</p>

        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
