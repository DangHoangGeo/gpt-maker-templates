'use client'
import React from 'react';

interface ToggleSwitchProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  id,
  label,
  checked,
  onChange,
  disabled = false,
}) => {
  return (
    <div className="flex items-center justify-start">
      <div className="mr-3 text-sm font-medium text-charcoal">{label}</div>
      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          name={id}
          id={id}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className={`toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer ${
            checked ? 'right-0 border-jade' : 'border-gray-300'
          }`}
          disabled={disabled}
        />
        <label
          htmlFor={id}
          className={`toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer ${
            disabled && 'cursor-not-allowed opacity-50'
          }`}
        ></label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
