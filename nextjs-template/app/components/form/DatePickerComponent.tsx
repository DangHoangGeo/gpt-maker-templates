'use client'
import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DatePickerProps {
  selectedDate: Date;
  onChange: (date: Date) => void;
  disabled?: boolean;
}

const DatePickerComponent: React.FC<DatePickerProps> = ({ selectedDate, onChange, disabled = false }) => {
  // You can manage the internal state here if needed or manage it from the parent component
  const [startDate, setStartDate] = useState<Date>(selectedDate);

  return (
    <ReactDatePicker
      selected={startDate}
      onChange={(date: Date) => {
        setStartDate(date);
        onChange(date);
      }}
      disabled={disabled}
      className="form-input border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-jade focus:border-jade block w-full p-2.5"
    />
  );
};

export default DatePickerComponent;
