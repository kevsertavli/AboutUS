import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  children: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({ className = '', children, ...props }) => {
  return (
    <label
      className={`block text-gray-700 font-semibold mb-2 ${className}`}
      {...props}
    >
      {children}
    </label>
  );
}; 