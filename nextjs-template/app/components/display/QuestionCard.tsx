import React, { useState } from 'react';

type Option = {
  id: string;
  label: string;
};

type QuestionCardProps = {
  question: string;
  options: Option[];
  onAnswer: (selectedId: string) => void; // Callback when an answer is selected
};

const QuestionCard: React.FC<QuestionCardProps> = ({ question, options, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelection = (id: string) => {
    setSelectedOption(id);
    onAnswer(id);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-2">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">{question}</h2>
      </div>
      <form>
        {options.map((option) => (
          <label key={option.id} className="block mb-2">
            <input
              type="radio"
              name="answer"
              className="mr-2"
              checked={selectedOption === option.id}
              onChange={() => handleSelection(option.id)}
            />
            {option.label}
          </label>
        ))}
      </form>
    </div>
  );
};

export default QuestionCard;
