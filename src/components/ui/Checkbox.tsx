import React from 'react';

interface CheckboxProps {
  id: string;
  name?: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  required?: boolean;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ 
  id, 
  name, 
  checked, 
  onCheckedChange, 
  required = false, 
  className = '' 
}) => {
  return (
    <input
      type="checkbox"
      id={id}
      name={name}
      checked={checked}
      onChange={(e) => onCheckedChange(e.target.checked)}
      required={required}
      className={`w-4 h-4 text-[#577E85] bg-gray-100 border-gray-300 rounded focus:ring-[#577E85] focus:ring-2 ${className}`}
    />
  );
}; 