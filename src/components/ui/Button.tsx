// src/components/ui/Button.tsx
import React, { MouseEvent } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, onClick, ...props }: ButtonProps) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
    circle.classList.add(styles.ripple);
    const ripple = button.getElementsByClassName(styles.ripple)[0];
    if (ripple) ripple.remove();
    button.appendChild(circle);
    if (onClick) onClick(e);
  };

  return (
    <button
      className={styles.btn}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}
