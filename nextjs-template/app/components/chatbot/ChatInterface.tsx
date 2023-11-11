import { useEffect, useState } from "react";
import Avatar from "./Avatar";
import ChatActionButton from "./ChatActionButton";
import ChatBubble from "./ChatBubble";
import { motion } from 'framer-motion';
import ChatInput from "./ChatInput";
import {Message} from './ChatBubble';


interface ChatInterfaceProps {
	messages: Message[];
	is_demo?: boolean;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({messages, is_demo=false}) => {
	
	const [chatOptions, setChatOptions] = useState([
		{ label: 'Learning', value: 'start_lesson' },
		{ label: 'Practicing', value: 'review_lessons' },
		{ label: 'Testing', value: 'explore_culture' },
		{ label: 'Exploring', value: 'explore_culture' },
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
	  <div className="flex flex-col max-w-md py-4 px-1 md:p-4 min-w-380 bg-gray-100/10 rounded-lg shadow-xl">
		{/* User avatar */}
		
		{/* ... chat messages ... */}
		{messages.map((msg, index) => (
			<motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
		  	<ChatBubble key={index} message={msg} />
		  </motion.div>
		))}
		{/* Chatbot avatar */}
		<div className="md:flex grid grid-cols-2 justify-center p-4">
        {chatOptions.map((option) => (
          <motion.div
            key={option.value}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            {!is_demo&&<ChatActionButton label={option.label} onClick={() => handleQuickResponse(option.value)} />}
          </motion.div>
        ))}
		
      	</div>
	  	{!is_demo&&<ChatInput onSendMessage={(message) => console.log(message)} />}
	  </div>
	);
  };
 export default ChatInterface;