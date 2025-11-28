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
    primary: "bg-brand-green text-brand-dark hover:bg-lime-400 shadow-lg shadow-lime-900/10",
    outline: "border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-brand-dark",
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