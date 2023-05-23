'use client';

import { ChangeEvent } from 'react';

import styles from './switch.module.css';

type Props = {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Switch = ({ onChange }: Props) => {
  return (
    <div className={styles.switch}>
      <input onChange={onChange} className={styles.input} type="checkbox" />
      <span className={styles.slider}></span>
    </div>
  );
};

export default Switch;
