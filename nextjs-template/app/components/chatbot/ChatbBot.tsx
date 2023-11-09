import { useEffect, useState } from "react";
import Avatar from "./Avatar";
import ChatActionButton from "./ChatActionButton";
import ChatBubble from "./ChatBubble";
import { motion } from 'framer-motion';

const ChatBot: React.FC = () => {
	// An array of messages, with each message having text and a flag indicating if it's from the user
	const messages = [
	  { text: 'Hello, how can I help you?', isUser: false },
	  //{ text: 'I want to learn Japanese.', isUser: true },
	  // ... other messages
	];

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

	const handleQuickResponse = (message: string) => {
		// Logic to handle the quick response message
		console.log('Quick response:', message);
	  };
  
	return (
	  <div className="flex flex-col p-4 bg-white shadown-lg">
		{/* User avatar */}
		
		{/* ... chat messages ... */}
		{messages.map((msg, index) => (
		  <ChatBubble key={index} message={msg.text} isUser={msg.isUser} />
		))}
		{/* Chatbot avatar */}
		<div className="flex justify-center p-4">
        {chatOptions.map((option) => (
          <motion.div
            key={option.value}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <ChatActionButton label={option.label} onClick={() => handleQuickResponse(option.value)} />
          </motion.div>
        ))}
      </div>
	  </div>
	);
  };
 export default ChatBot;