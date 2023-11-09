'use client'
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  buttonType: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
  additionalStyles?: string;
}

const buttonStyles = {
  primary: 'bg-indigo text-white hover:bg-jade-dark',
  secondary: 'bg-transparent hover:bg-lightGrey text-charcoal border border-solid border-charcoal',
  tertiary: 'text-charcoal hover:text-jade-dark'
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  buttonType,
  disabled = false,
  additionalStyles = ''
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`text-sm px-4 py-2 rounded focus:outline-none focus:ring transition ease-in-out duration-300 ${buttonStyles[buttonType]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
