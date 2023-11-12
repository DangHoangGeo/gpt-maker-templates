'use client'
import React from 'react';

interface ChatActionButtonProps {
  label: string; // The text label on the button
  value?: string;
  onClick: () => void; // The function to call when the button is clicked
}

const ChatActionButton: React.FC<ChatActionButtonProps> = ({ label, value, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-charcoal hover:bg-gray-400/50 text-white hover:text-gray-800 py-2 px-4 rounded-full rounded-tr my-1 mx-4 md:m-1 text-xs md:text-sm"
    >
      {label}
    </button>
  );
};

export default ChatActionButton;
