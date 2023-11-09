'use client'
import React from 'react';

interface SelectDropdownProps {
  id: string;
  label: string;
  options: { value: string; label: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  errorMessage?: string; // Optional error message for validation feedback
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({
  id,
  label,
  options,
  selectedValue,
  onChange,
  placeholder = 'Select an option',
  required = false,
  disabled = false,
  errorMessage,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-charcoal">
        {label}
      </label>
      <select
        id={id}
        value={selectedValue}
        onChange={(e) => onChange(e.target.value)}
        className={`mt-1 block w-full pl-3 pr-10 py-2 text-base border ${
          errorMessage ? 'border-red-500' : 'border-gray-300'
        } rounded-md shadow-sm focus:outline-none focus:border-jade focus:ring-1 focus:ring-jade sm:text-sm
                    disabled:bg-gray-100 disabled:text-gray-500`}
        required={required}
        disabled={disabled}
        aria-invalid={!!errorMessage}
        aria-describedby={`${id}-error`}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errorMessage && (
        <p className="mt-2 text-sm text-red-600" id={`${id}-error`}>
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default SelectDropdown;
