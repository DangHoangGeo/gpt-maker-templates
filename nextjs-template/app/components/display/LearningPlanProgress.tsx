import React from 'react';
import { motion } from 'framer-motion';

type LearningPlanProgressProps = {
  currentWeek: number;
  totalWeeks: number;
  currentScore: number;
  targetScore: number;
};

const LearningPlanProgress: React.FC<LearningPlanProgressProps> = ({ currentWeek, totalWeeks, currentScore, targetScore }) => {
  // Calculate the percentage of progress towards the target score
  const progressPercentage = Math.min(100, (currentScore / targetScore) * 100);

  return (
    <div className="bg-white shadow rounded-lg p-4 my-4">
      <h3 className="text-lg font-semibold mb-3">Learning Plan Progress</h3>
      <div className="flex items-center justify-between mb-2">
        {Array.from({ length: totalWeeks }).map((_, index) => (
          <motion.div
            key={index}
            className={`h-2 w-full bg-gray-200 rounded-full mx-1 ${index < currentWeek ? 'bg-green-400' : ''}`}
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>
      <div className="text-sm font-medium">
        Current Score: {currentScore} / Target Score: {targetScore}
        <div className="bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default LearningPlanProgress;
