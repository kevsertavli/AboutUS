import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
  return (
    <input
      className={`w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#577E85] focus:outline-none transition-all duration-300 ${className}`}
      {...props}
    />
  );
}; 