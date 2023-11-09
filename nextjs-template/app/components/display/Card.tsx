import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick: () => void; // Handler for click events
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, onClick }) => {
  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 cursor-pointer hover:shadow-md transition-shadow duration-300"
      onClick={onClick}
    >
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-charcoal">{title}</div>
        <p className="text-grey-darker text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
