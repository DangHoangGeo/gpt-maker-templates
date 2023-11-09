import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const HomePage: React.FC = () => {

  // Framer Motion animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    
    <motion.div
      className="bg-soft-gray min-h-screen flex flex-col items-center justify-center p-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.img 
        src="/Jchatly.png" 
        alt="FinChatly Logo" 
        className="w-40 h-40 mb-8 rounded-full shadow-lg"
        variants={itemVariants}
      />
      
      <motion.h1 
        className="text-5xl font-bold mb-5"
        variants={itemVariants}
      >
        Welcome to JChatly!
      </motion.h1>
      
      <motion.p 
        className="text-center mb-8"
        variants={itemVariants}
      >
        A modern way to improve your Japanese fluency with the help of GPT.
      </motion.p>

      <motion.div 
        className="flex items-center space-x-2"
        variants={itemVariants}
      >
        <a href="/get-started" className="px-6 py-3 bg-blue-primary hover:bg-blue-secondary text-darkGreen rounded">
          Get Started
        </a>
        <FaArrowRight className="text-blue-primary animate-bounce" />
      </motion.div>

    </motion.div>
  );
};

export default HomePage;
