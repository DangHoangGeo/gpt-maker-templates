import React from 'react';

const Arrow: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="flex-auto border-t-2 border-gray-800"></div>
      <svg
        className="text-gray-800 w-6 h-6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M9 5l7 7-7 7"></path>
      </svg>
      <div className="flex-auto border-t-2 border-gray-300"></div>
    </div>
  );
};

export default Arrow;
