import React from 'react';
import { motion } from 'framer-motion';

type Task = {
  id: number;
  content: string;
};

type WeekCardProps = {
  weekNumber: number;
  title: string;
  tasks: Task[];
  completed: boolean;
};

const WeekCard: React.FC<WeekCardProps> = ({ weekNumber, title, tasks, completed }) => {
  // Define gradient colors for completed and in-progress
  const gradientBg = completed
    ? 'from-green-400 to-green-600'  // Completed gradient
    : 'from-blue-400 to-blue-600';   // In-progress gradient

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col w-full md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/6 shadow-lg rounded-lg overflow-hidden my-4 mx-2"
    >
      <div className={`bg-gradient-to-r ${gradientBg} px-4 py-4 flex flex-col justify-between h-30`}>
        <div className="flex justify-between items-center">
          <span className="text-sm tracking-wide text-gray-800 px-4 py-1 bg-white rounded-2xl">Week {weekNumber}</span>
          <span className="text-xs px-2 py-1 ">{completed ? 'Completed' : 'In Progress'}</span>
        </div>
        <h4 className="mt-2 font-bold text-lg text-white">{title}</h4>
      </div>
      <div className="bg-white text-gray-800 pl-4 pr-2 py-2">
        <ul className="list-disc list-inside space-y-1">
          {tasks.map((task) => (
            <li key={task.id} className="text-sm">{task.content}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default WeekCard;
