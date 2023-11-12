import React from 'react';

type InformationCardProps = {
  title: string;
  description: string;
  imageUrl?: string;
};

const InformationCard: React.FC<InformationCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="min-w-[250px] max-w-xs rounded overflow-hidden shadow-lg m-2 bg-white">
      {imageUrl && <img className="w-full" src={imageUrl} alt={title} />}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default InformationCard;
