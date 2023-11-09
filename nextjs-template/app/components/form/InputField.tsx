'use client'
import React from 'react';

interface InputFieldProps {
  id: string;
  label: string;
  type: 'text' | 'number' | 'password' | 'email' | 'search'; // You can extend this with more HTML input types
  placeholder?: string;
  value: string | number;
  onChange: (value: string) => void;
  required?: boolean;
  disabled?: boolean;
  errorMessage?: string; // Optional error message for validation feedback
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
  errorMessage,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-charcoal">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`mt-1 block w-full px-3 py-2 bg-white border ${
          errorMessage ? 'border-red-500' : 'border-gray-300'
        } rounded-md text-sm shadow-sm placeholder-gray-400
                    focus:outline-none focus:border-jade focus:ring-1 focus:ring-jade disabled:bg-gray-100 disabled:text-gray-500`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        disabled={disabled}
        aria-invalid={!!errorMessage}
        aria-describedby={`${id}-error`}
      />
      {errorMessage && (
        <p className="mt-2 text-sm text-red-600" id={`${id}-error`}>
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default InputField;
