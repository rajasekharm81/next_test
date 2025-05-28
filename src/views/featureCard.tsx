import React from "react";

export type FeatureCardProps = {
  title: string;
  subTitle: string;
  offerPercentage: string;
  image?: string;
};

const FeatureCard = ({
  title,
  subTitle,
  offerPercentage,
  image,
}: FeatureCardProps) => {
  return (
    <div className="bg-white rounded rounded-2 m-2 p-3">
      <h1>{title}</h1>
      <h4>{subTitle}</h4>
      <h6>UP TO {offerPercentage} OFF</h6>
      {image && <img src={image} alt="image" />}
    </div>
  );
};

export default FeatureCard;
