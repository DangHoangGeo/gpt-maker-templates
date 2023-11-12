'use client'
import React, { useState } from 'react';

interface ChatInputProps {
  onSendMessage: (message: string) => void; // Function to call when a message is sent
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim() !== '') {
      onSendMessage(message);
      setMessage(''); // Clear the input after sending
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className='items-center justify-between w-full px-3'>
      <div className='flex bg-gray-100 border w-full border-gray-400 p-1 rounded-xl focus:ring-2 focus:ring-gray-400'>
        <input
          type="text"
          placeholder="Send a request..."
          className="bg-gray-100 text-sm w-full pl-4 p-1 focus:outline-none rounded-md text-gray-900 "
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          onClick={handleSend}
          className={`ml-4 text-white rounded-md p-2 md:p-2 hover:bg-jade focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 ${ (message.trim() === '') ? "bg-gray-300" : "bg-gray-900" }`}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
        </button>
      </div>
      
    </div>
  );
};

export default ChatInput;
