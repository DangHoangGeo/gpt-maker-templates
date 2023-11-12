import React from 'react';

type CharacterCardProps = {
  title: string;
  description: string;
  imageUrl?: string; // Optional image URL
};

const CharacterCard: React.FC<CharacterCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg border shadow-md m-2 max-w-xs">
      {imageUrl && <img className="rounded-t-lg w-full" src={imageUrl} alt={title} />}
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
        <p className="mb-3 font-normal text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
