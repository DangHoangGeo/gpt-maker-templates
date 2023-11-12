import { useEffect, useState } from "react";
import Avatar from "./Avatar";
import ChatActionButton from "./ChatActionButton";
import ChatBubble from "./ChatBubble";
import { motion } from 'framer-motion';
import ChatInput from "./ChatInput";
import {Message} from './ChatBubble';
import { useRouter } from 'next/navigation'

interface ChatInterfaceProps {
	messages: Message[];
	is_demo?: boolean;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({messages, is_demo=false}) => {
	const router = useRouter()
	const [local_messages, setLocalMessages] = useState<Message[]>([]);
	const [is_start_chatting, setIsStartChatting] = useState(false);

	const [chatOptions, setChatOptions] = useState([
		{ label: 'Start new', value: 'start-new'},
		{ label: 'Practice', value: 'enhance-my-skills'},
		{ label: 'Test', value: 'test-my-skills'},
		{ label: 'Discovery', value: 'discovery-cuture'},
	]);
	
	useEffect(() => {
		// This would be replaced with your chatbot logic to send a welcome message
		sendWelcomeMessage();
	}, []);
	
	// Send welcome message
	const sendWelcomeMessage = () => {
		// Logic to send message via chatbot
		setIsStartChatting(false);
		setLocalMessages(messages);
	};

	// fetch AI assistant API to get response to user's request
	async function getAIResponse(message: string) {
		try {
			const response = await fetch("/api/get-ai-assistant", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ message }),
			});
			const data = await response.json();
			const new_ai_message: Message = { text: data.message, type: "ai" };
			setLocalMessages(prevMessages => [...prevMessages, new_ai_message]);
		} catch (error) {
			console.error(error);
			const new_ai_message: Message = {
				text: "Sorry, I couldn't process your request. Please try again later or you could try the below options.",
				type: "ai",
				chat_type: 'greeting'
			};
			setLocalMessages(prevMessages => [...prevMessages, new_ai_message]);
			setIsStartChatting(false);
		}
	}
	// Handle user request
	const handleUserRequest = (message: string) => {
		// check if message is blank
		if (!message || /^\s*$/.test(message)){
			const new_ai_message: Message = {text: 'Please, tell me how can I help you!', type: 'ai', chat_type: 'greeting'};
			setLocalMessages([...local_messages, new_ai_message]);
		}else{
			// Logic to handle the user request message
			const lowerCasemessage = message.toLowerCase();
			const new_message: Message = {text: message, type: 'user'};
			setLocalMessages(prevMessages => [...prevMessages, new_message]);
			setIsStartChatting(true);
			if(lowerCasemessage === 'hi'||lowerCasemessage==='hello'||lowerCasemessage==='hey'){
				const new_ai_message: Message = {text: `${message.toUpperCase()}, how can I help you?`, type: 'ai', chat_type: 'greeting'};
				setLocalMessages(prevMessages => [...prevMessages, new_ai_message]);
			}else{
				getAIResponse(message);
			}
		}
	};

	const handleQuickResponse = (message: string) => {
		// Logic to handle the quick response message
		router.push('/'+message);
	  };
  
	return (
	  <div className="flex flex-col max-w-lg py-4 px-1 md:p-4 min-w-380 bg-gray-100/10 rounded-lg shadow-xl">
		{/* User avatar */}
		
		{/* ... chat messages ... */}
		{local_messages.map((msg, index) => (
			<motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
		  	<ChatBubble key={index} message={msg} />
		  </motion.div>
		))}
		{/* Chatbot avatar */}
		{!is_demo&&<div className="flex flex-col items-center max-w-lg mt-12 py-2 border-t border-gray-200">
			{!is_start_chatting&&<div className="md:flex grid grid-cols-2 justify-center md:p-4 p-2">
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
			</div>}
			<ChatInput onSendMessage={(message) => handleUserRequest(message)} />
		</div>}
	  </div>
	);
  };
 export default ChatInterface;