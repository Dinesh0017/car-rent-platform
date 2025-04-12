'use client';
import React from 'react';

const Button = ({ label, onClick, type = 'primary', size = 'md', disabled = false }) => {
  const baseStyles =
    'rounded-md focus:outline-none transition duration-200 ease-in-out font-semibold inline-flex items-center justify-center';

  const typeStyles = {
    primary: 'bg-primary text-white hover:bg-secondary',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    subscribe: 'bg-subRed text-white hover:bg-secondary',
    outline:
      'bg-white border border-primary text-primary hover:text-secondary hover:border-secondary',
  };

  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-5 py-2.5',
    sub: 'text-sm px-3 py-1.5',
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  const buttonClassNames = `
    ${baseStyles}
    ${typeStyles[type] || typeStyles.primary}
    ${sizeStyles[size] || sizeStyles.md}
    ${disabledStyles}
  `;

  return (
    <button
      className={buttonClassNames.trim()}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
