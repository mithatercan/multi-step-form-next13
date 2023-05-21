import React, { useState, useEffect } from 'react';
import styles from './step.module.css';

export type Step = {
  index: number;
  title: string;
  description: string;
  isActive?: boolean;
};

const Step = (props: Step) => {
  const { isActive } = props;
  const stepClassName = isActive
    ? `${styles.step} ${styles.active}`
    : styles.step;

  return (
    <div className={stepClassName}>
      <div className={styles.index}>{props.index}</div>
      <div className={styles['right-side']}>
        <p>{props.title}</p>
        <h6>{props.description}</h6>
      </div>
    </div>
  );
};

export default Step;
