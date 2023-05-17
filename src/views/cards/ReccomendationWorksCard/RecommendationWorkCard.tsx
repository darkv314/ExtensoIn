import React from "react";
import "./RecommendationWorkCard.css";
import IconButton from "../../../components/buttons/iconButton/IconButton";
import { Golf } from "iconoir-react";
import Title from "../../../components/text/tittle/Title";
import { toast } from "sonner";

interface Work {
  name: string;
  description: string;
  imageURL: string;
  postulate: string;
}

interface RecommendationWorkCardProps {
  works: Work[];
}

const RecommendationWorkCard: React.FC<RecommendationWorkCardProps> = ({
  works,
}) => {
  return (
    <>
      <Title text="Recomendaciones" />
      <div className="recommendation__card">
        {works.map((work, index) => (
          <div className="reccomendation__card-all" key={index}>
            <img
              src={work.imageURL}
              alt={work.name}
              className="avatar__recommendation-card"
            />
            <div className="recommendation__card-content">
              <div>
                <h2 className="reccomendation__card-name">{work.name}</h2>
                <p className="reccomendation__card-description">
                  {work.description}
                </p>
              </div>

              <IconButton label="Postular" onClick={() => {toast.success('Postulacion enviada')}} icon={<Golf />} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecommendationWorkCard;
