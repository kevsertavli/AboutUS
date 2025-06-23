import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ className = '', ...props }) => {
  return (
    <textarea
      className={`w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#577E85] focus:outline-none transition-all duration-300 resize-none ${className}`}
      {...props}
    />
  );
}; 