import React from 'react';

export interface SectionProps {
  id: string;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white' | 'lime' | 'outline-lime';
  children: React.ReactNode;
}