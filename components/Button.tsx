import React from 'react';
import { ButtonProps } from '../types';

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "px-8 py-3 uppercase tracking-widest text-xs font-bold transition-all duration-300 transform hover:scale-105";
  
  const variants = {
    primary: "bg-brand-orange text-white hover:bg-orange-600 shadow-lg shadow-orange-900/20",
    outline: "border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white",
    white: "bg-white text-brand-dark hover:bg-gray-200"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};