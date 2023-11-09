import React, { useState, useEffect } from 'react';
import ChatBot from '../chatbot/ChatbBot';
import ChatActionButton from '../chatbot/ChatActionButton';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  const [chatOptions, setChatOptions] = useState([
    { label: 'Start a Lesson', value: 'start_lesson' },
    { label: 'Review Past Lessons', value: 'review_lessons' },
    { label: 'Explore Culture', value: 'explore_culture' },
  ]);

  useEffect(() => {
    // This would be replaced with your chatbot logic to send a welcome message
    sendWelcomeMessage();
  }, []);

  const sendWelcomeMessage = () => {
    // Logic to send message via chatbot
  };

  const handleQuickResponse = (value: string) => {
    // Logic to handle quick response, e.g., navigate to a lesson or cultural exploration
    console.log(value);
  };

  return (
    <div className="container mx-auto p-4">
      <ChatBot /* Props as needed */ />
    </div>
  );
};

export default HomePage;
