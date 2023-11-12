'use client'
import React from 'react';
import Avatar from './Avatar';
import ReactMarkdown from 'react-markdown'
import TypingEffect from './TypingEffect';

type MessageType = "ai" | "user";
type ChatType = 'feedback' | 'suggestion' | 'guide' | 'example' | 'question' | 'answer' | 'greeting';
export interface Message {
	type: MessageType;
	text: string;
	chat_type?: ChatType;
}
interface ChatBubbleProps {
  message: Message; // the chat message text
}

let get_chatbot_bubble_styles: (chat_type?: ChatType) => string = function(chat_type?: ChatType) {
	switch(chat_type) {
		case 'feedback':
			return "bg-yellow-100 text-gray-800 mr-4 md:mr-8 rounded-3xl rounded-tl";
		case 'suggestion':
			return "self-start bg-green-100 text-gray-800 mr-4 md:mr-8 rounded-3xl rounded-tl";
		case 'guide':
			return "self-start bg-blue-100 text-gray-800 mr-4 md:mr-8 rounded-3xl rounded-tl";
		case 'example':
			return "self-start bg-purple-100 text-gray-800 mr-4 md:mr-8 rounded-3xl rounded-tl";
		case 'question':
			return "self-start bg-red-100 text-gray-800 mr-4 md:mr-8 rounded-3xl rounded-tl";
		case 'answer':
			return "self-start bg-pink-100 text-gray-800 mr-4 md:mr-8 rounded-3xl rounded-tl";
		default:
			return "self-start bg-gray-200 text-gray-800 mr-4 md:mr-8 rounded-3xl rounded-tl";
	}

}

function get_chatbot_icon(chat_type: ChatType){
	switch(chat_type) {
		case 'feedback':
			return "👍";
		case 'suggestion':
			return "💡";
		case 'guide':
			return "📖";
		case 'example':
			return "👉";
		case 'question':
			return "❓";
		case 'answer':
			return "💬";
		default:
			return "💬";
	}
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  // Tailwind classes for the chat bubble
  const bubbleStyles =
    message.type === "user"
      ? "bg-cherryBlossom text-white rounded-3xl rounded-tr ml-4 md:ml-8" // User message styles
      : get_chatbot_bubble_styles(message.chat_type); // Bot message styles
  const isAI = message.type === "ai";

  return (
    <div className={`flex flex-col space-y-2 p-1`}>
      <div
        className={`flex items-center ${isAI ? "self-start" : "self-end"}`}
      >
		<div className={`flex flex-row space-x-2`}>
			{isAI && <div className="w-8 h-8 hidden sm:flex">
			<Avatar src={'/Jchatly.png'} alt={'LangLift'} size={8}/>
				</div>}
			<div className={`max-w-xs md:max-w-md lg:max-w-lg p-2 flex flex-row ${bubbleStyles}`}>
				{/*message.chat_type  && isAI && <span className="text-xs">{get_chatbot_icon(message.chat_type)}</span> */}
				{isAI ? ( (message.chat_type === 'question') || (message.chat_type === 'greeting' )) ?
					<TypingEffect typingSpeed={80} message={message.text} /> : <div className="text-sm" dangerouslySetInnerHTML={{__html:message.text}}/>
				: <div className="text-sm">{message.text}</div>}
			</div>
		</div>
        
      </div>
    </div>
  );
};

export default ChatBubble;
