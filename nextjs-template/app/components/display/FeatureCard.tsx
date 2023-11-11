'use client'
import React from 'react';
import { motion } from 'framer-motion';
import ChatInterface from '../chatbot/ChatInterface';
import {Message} from '../chatbot/ChatBubble';


type FeatureCardProps = {
  title: string;
  demoConversation: Message[];
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, demoConversation }) => {
  return (
    <motion.div className="border border-gray-300 rounded-lg p-2 md:p-4 shadow-md m-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="max-h-80 rounded-lg shadow-lg overflow-y-auto">
        <ChatInterface messages={demoConversation} is_demo={true} />
      </div>
    </motion.div>
  );
};

export default FeatureCard;