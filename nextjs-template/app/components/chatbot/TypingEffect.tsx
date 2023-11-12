import React, { useState, useEffect } from 'react';

type TypingEffectProps = {
  message: string;
  typingSpeed?: number; // Speed in milliseconds
};

const TypingEffect: React.FC<TypingEffectProps> = ({ message, typingSpeed = 50 }) => {
  const [displayedMessage, setDisplayedMessage] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= message.length) return;

    const timer = setTimeout(() => {
      setDisplayedMessage(displayedMessage + message.charAt(index));
      setIndex(index + 1);
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedMessage, index, message, typingSpeed]);

  return <span>{displayedMessage}</span>;
};

export default TypingEffect;
