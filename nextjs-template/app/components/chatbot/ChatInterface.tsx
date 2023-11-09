import Avatar from "./Avatar";
import ChatActionButton from "./ChatActionButton";
import ChatBubble from "./ChatBubble";

const ChatInterface: React.FC = () => {
	// An array of messages, with each message having text and a flag indicating if it's from the user
	const messages = [
	  { text: 'Hello, how can I help you?', isUser: false },
	  { text: 'I want to learn Japanese.', isUser: true },
	  // ... other messages
	];

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

		<div className="flex justify-center">
			<ChatActionButton label="Yes" onClick={() => handleQuickResponse('Yes')} />
			<ChatActionButton label="No" onClick={() => handleQuickResponse('No')} />
			<ChatActionButton label="Maybe" onClick={() => handleQuickResponse('Maybe')} />
      	</div>
	  </div>
	);
  };
 export default ChatInterface;