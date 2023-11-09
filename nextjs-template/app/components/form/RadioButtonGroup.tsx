'use client'
import React from 'react';

interface RadioButtonGroupProps {
  id: string;
  name: string; // The name attribute is used to group the radio buttons
  legend: string;
  options: { value: string; label: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  direction?: 'horizontal' | 'vertical';
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  id,
  name,
  legend,
  options,
  selectedValue,
  onChange,
  disabled = false,
  direction = 'vertical' 
}) => {
  return (
    <fieldset id={id} className="mb-4">
      <legend className="text-sm font-medium text-charcoal">{legend}</legend>
      <div className={`mt-2 flex flex-wrap ${direction === 'horizontal' ? 'justify-start' : 'flex-col'}`}>
        {options.map((option, index) => (
          <label key={option.value} className={`inline-flex items-center mr-6 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => onChange(option.value)}
              disabled={disabled}
              className="form-radio h-4 w-4 text-jade border-gray-300"
            />
            <span className="ml-2 text-sm text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
};

export default RadioButtonGroup;
