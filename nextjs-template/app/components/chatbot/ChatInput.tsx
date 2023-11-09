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
    <div className="flex items-center justify-between w-full p-3 border-t border-gray-200">
      <input
        type="text"
        placeholder="Type a message..."
        className="flex-1 px-4 py-2 rounded-md bg-gray-200 border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button
        onClick={handleSend}
        className="ml-4 bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
