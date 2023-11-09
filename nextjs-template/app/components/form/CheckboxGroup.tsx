'use client'
import React from 'react';

export interface CheckboxOption {
	value: string;
	label: string;
	checked: boolean;
}

export interface CheckboxGroupProps {
	options: CheckboxOption[];
	setOptions: React.Dispatch<React.SetStateAction<CheckboxOption[]>>;
	disabled?: boolean;
	direction?: 'horizontal' | 'vertical';
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ options, setOptions, disabled = false, direction = 'vertical' }) => {
	const handleOnChange = (selectedValue: string) => {
		const newOptions = options.map((option) => {
			if (option.value === selectedValue) {
				return { ...option, checked: !option.checked };
			}
			return option;
		});
		setOptions(newOptions);
	};

	return (
		<div className={`flex flex-wrap ${direction === 'horizontal' ? 'justify-start' : 'flex-col'}`}>
			{options.map((option) => (
				<label key={option.value} className={`inline-flex items-center m-1 space-x-2 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>
					<input
						type="checkbox"
						value={option.value}
						checked={option.checked}
						onChange={() => handleOnChange(option.value)}
						disabled={disabled}
						className="form-checkbox h-4 w-4 text-jade border-gray-300 rounded"
					/>
					<span className="text-sm text-gray-700">{option.label}</span>
				</label>
			))}
		</div>
	);
};

export default CheckboxGroup;
