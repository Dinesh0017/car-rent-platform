
import React from 'react';

const CustomeRadioGroup = ({ name, options = [], selected, onChange }) => {
  return (
    <div className="space-y-2">
      {options.map((option, index) => (
        <label key={index} className="flex items-center gap-2 cursor-pointer pl-4">
          <input
            type="radio"
            name={name}
            value={option}
            className="hidden peer"
            checked={selected === option}
            onChange={(e) => onChange?.(e.target.value)}
          />
          <div className="w-3 h-3 rounded-full border-2 border-gray-400 peer-checked:border-gray-300 peer-checked:bg-secondary transition" />
          <span className="text-sm text-gray-dark">{option}</span>
        </label>
      ))}
    </div>
  );
};

export default CustomeRadioGroup;
