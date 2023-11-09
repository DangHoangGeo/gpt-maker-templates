import ChatInput from "./ChatInput";

const ChatContainer: React.FC = () => {
	const handleSendMessage = (newMessage: string) => {
	  // Logic to send the message to the chatbot or add it to the message array
	  console.log('New message:', newMessage);
	};
  
	return (
	  <div className="flex flex-col h-full">
		{/* ... chat messages ... */}
		<ChatInput onSendMessage={handleSendMessage} />
	  </div>
	);
  };
  