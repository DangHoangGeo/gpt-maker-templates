'use client'
import React from 'react';

interface TextareaProps {
  id: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  disabled?: boolean;
  rows?: number;
  errorMessage?: string; // Optional error message for validation feedback
}

const Textarea: React.FC<TextareaProps> = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
  rows = 3,
  errorMessage,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-charcoal">
        {label}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        className={`mt-1 block w-full px-3 py-2 bg-white border ${
          errorMessage ? 'border-red-500' : 'border-gray-300'
        } rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-jade focus:ring-1 focus:ring-jade
                    disabled:bg-gray-100 disabled:text-gray-500 resize-none`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        disabled={disabled}
        rows={rows}
        aria-invalid={!!errorMessage}
        aria-describedby={`${id}-error`}
      ></textarea>
      {errorMessage && (
        <p className="mt-2 text-sm text-red-600" id={`${id}-error`}>
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default Textarea;
