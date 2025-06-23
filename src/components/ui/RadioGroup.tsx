import React from 'react';

interface RadioGroupProps {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}

interface RadioGroupItemProps {
  value: string;
  id: string;
  className?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ value, onValueChange, children, className = '' }) => {
  return (
    <div className={`flex flex-col space-y-3 ${className}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { value, onValueChange } as any);
        }
        return child;
      })}
    </div>
  );
};

export const RadioGroupItem: React.FC<RadioGroupItemProps> = ({ value, id, className = '' }) => {
  return (
    <input
      type="radio"
      id={id}
      value={value}
      className={`w-4 h-4 text-[#577E85] bg-gray-100 border-gray-300 focus:ring-[#577E85] focus:ring-2 ${className}`}
    />
  );
}; 