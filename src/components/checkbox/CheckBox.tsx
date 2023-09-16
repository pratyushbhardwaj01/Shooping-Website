import React, { useState } from "react";

interface CheckBoxType {
  label: string;
  filterType: string;
  onClick: (filterType: string, label: string) => void;
}
const CheckBox: React.FC<CheckBoxType> = ({ label, onClick, filterType }) => {
  const [input, setInput] = useState(false);

  return (
    <label className="text-sm font-medium flex items-center gap-2">
      <input
        checked={input}
        onChange={() => {
          onClick(filterType, label);
          setInput((prev) => !prev);
        }}
        type="checkbox"
        className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <span>{label}</span>
    </label>
  );
};

export default CheckBox;
