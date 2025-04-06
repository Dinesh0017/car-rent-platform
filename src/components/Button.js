'use client';
import React from 'react';

const Button = ({ label, onClick, type, size, disabled = false }) => {
  const baseStyles = 'rounded-2xl focus:outline-none transition duration-200 ease-in-out cursor-pointer';

  // Tailwind-based color styles
  const typeStyles = {
    primary: 'bg-primary text-white hover:bg-secondary',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    subcribe: 'bg-subRed text-white hover:bg-secondary',
    outline: 'bg-white border border-primary border-solid text-primary hover:bg-white hover:text-secondary hover:border-secondary',
  };

  // Optional: Still keeping for font size
  const sizeStyles = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  // Custom padding defined here (not using px-/py- classes)
  const customPadding = {
    sm: '6px 12px',
    md: '8px 16px',
    lg: '10px 20px',
    sub: '6px 12px',
  };

  const buttonClassNames = `${baseStyles} ${typeStyles[type]} ${sizeStyles[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  return (
    <button
      className={buttonClassNames}
      onClick={onClick}
      disabled={disabled}
      style={{ padding: customPadding[size] }}
    >
      {label}
    </button>
  );
};

export default Button;
