import React from 'react';
import type { CardProps } from '../types';

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  onClick,
  className = '',
}) => {
  return (
    <div 
      className={`card hover:shadow-lg transition-shadow duration-200 ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      {imageUrl && (
        <div className="mb-4">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default Card; 