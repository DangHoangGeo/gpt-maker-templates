import React from 'react';

interface ProgressBarProps {
  progress: number; // Expected to be between 0 and 100
  label?: string; // Optional label to describe the progress bar
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, label }) => {
  const progressStyle = {
    width: `${progress}%`,
  };

  return (
    <div className="w-full bg-lightGrey rounded-full dark:bg-gray-700">
      {label && (
        <span className="text-sm font-medium text-charcoal px-2">
          {label}
        </span>
      )}
      <div
        className="bg-jade h-2 rounded-full"
        style={progressStyle}
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        role="progressbar"
      ></div>
    </div>
  );
};

export default ProgressBar;
