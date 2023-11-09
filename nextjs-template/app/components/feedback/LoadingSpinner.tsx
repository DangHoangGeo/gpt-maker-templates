'use client'
import React from 'react';

interface LoadingSpinnerProps {
  size?: number; // Optional size prop to adjust the size of the spinner
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 8 }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        style={{ width: size, height: size }}
        className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
