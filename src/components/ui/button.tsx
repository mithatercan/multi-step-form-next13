import * as React from 'react';
import styles from './button.module.css';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'confirm' | 'step';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, type, variant, ...props }) => {
    return (
      <button
        type={type}
        className={variant === 'confirm' ? styles.confirm : styles.button}
        {...props}
      >
        {variant === 'confirm' ? 'Confirm' : 'Next Step'}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
