import * as React from 'react';
import styles from './checkbox.module.css';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Checkbox = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input type="checkbox" className={styles.checkbox} ref={ref} {...props} />
    );
  }
);
Checkbox.displayName = 'Checkbox';

export default Checkbox;
