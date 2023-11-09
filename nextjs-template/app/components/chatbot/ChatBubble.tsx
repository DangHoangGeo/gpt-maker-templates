'use client'
import React from 'react';
import Avatar from './Avatar';

interface ChatBubbleProps {
  message: string; // the chat message text
  isUser: boolean; // flag to determine if the message is from the user or the bot
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, isUser }) => {
  // Tailwind classes for the chat bubble
  const bubbleStyles = isUser
    ? 'bg-blue-500 text-white text-right' // User message styles
    : 'bg-gray-200 text-gray-800 text-left'; // Bot message styles

  return (
	<div className="flex">
		{!isUser&&<Avatar alt="User" src="5.png" size={8} />}
		<div
			className={`max-w-xs md:max-w-md px-4 py-2 rounded-lg m-2 ${bubbleStyles}`}
			style={{ alignSelf: isUser ? 'flex-end' : 'flex-start' }}
			>
			<p className="text-sm md:text-base">{message}</p>
		</div>
	</div>
    
  );
};

export default ChatBubble;
