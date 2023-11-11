'use client'
import React from 'react';

interface ChatActionButtonProps {
  label: string; // The text label on the button
  onClick: () => void; // The function to call when the button is clicked
}

const ChatActionButton: React.FC<ChatActionButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-charcoal hover:bg-cherryBlossom text-white font-bold py-2 px-4 rounded-full m-1 text-xs md:text-sm"
    >
      {label}
    </button>
  );
};

export default ChatActionButton;
