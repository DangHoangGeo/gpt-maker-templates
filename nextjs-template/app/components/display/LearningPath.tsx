import React from 'react';
import { motion } from 'framer-motion';

type LearningPathProps = {
  title: string;
  description: string;
};

const LearningPath: React.FC<LearningPathProps> = ({ title, description }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
      className="bg-white rounded-lg border shadow-md p-6 m-2 max-w-sm cursor-pointer hover:bg-gray-100">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  );
};

export default LearningPath;
