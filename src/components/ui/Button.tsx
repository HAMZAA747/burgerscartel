// src/components/ui/Button.tsx
import React, { MouseEvent, CSSProperties } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const btnStyle: CSSProperties = {
  position: 'relative',
  overflow: 'hidden',
  display: 'inlineFlex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.5rem 1rem',
  fontWeight: 'bold',
  border: 'none',
  borderRadius: '9999px',
  backgroundColor: '#F2AA21',
  color: '#fff',
  cursor: 'pointer',
  transition: 'box-shadow 0.2s',
};

const rippleStyleBase: CSSProperties = {
  position: 'absolute',
  borderRadius: '50%',
  backgroundColor: 'rgba(255,255,255,0.6)',
  transform: 'scale(0)',
  animation: 'ripple 0.6s linear',
};

export default function Button({ children, onClick, style, ...props }: ButtonProps) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    Object.assign(circle.style, rippleStyleBase, {
      width: `${diameter}px`,
      height: `${diameter}px`,
      left: `${e.clientX - button.offsetLeft - radius}px`,
      top: `${e.clientY - button.offsetTop - radius}px`,
    });
    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) ripple.remove();
    circle.className = 'ripple';
    button.appendChild(circle);
    if (onClick) onClick(e);
  };

  return (
    <button
      style={{ ...btnStyle, ...style }}
      onClick={handleClick}
      {...props}
    >
      {children}
      <style jsx>{`
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
    </button>
  );
}
