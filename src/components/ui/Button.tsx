// src/components/ui/Button.tsx
import React, { MouseEvent } from 'react';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, onClick, ...props }: ButtonProps) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    // Create ripple span
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');
    // Remove old ripple if present
    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) ripple.remove();
    button.appendChild(circle);
    // Call any passed-in onClick
    if (onClick) onClick(e);
  };

  return (
    <button
      className="btn"
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}
