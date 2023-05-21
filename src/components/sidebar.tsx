'use client';

import React, { useState, useEffect } from 'react';
import Step from './ui/step';
import styles from './sidebar.module.css';
import { usePathname } from 'next/navigation';

const steps = [
  { index: 1, title: 'STEP 1', description: 'YOUR INFO', route: 'info' },
  { index: 2, title: 'STEP 2', description: 'SELECT PLAN', route: 'plan' },
  { index: 3, title: 'STEP 3', description: 'ADD-ONS', route: 'add-ons' },
  { index: 4, title: 'STEP 4', description: 'SUMMARY', route: 'summary' },
];

const Sidebar = () => {
  const pathname = usePathname();
  const activeRoute = pathname.split('/').at(-1);

  return (
    <aside className={styles.sidebar}>
      {steps.map(step => (
        <Step
          isActive={step.route === activeRoute}
          key={step.index}
          index={step.index}
          title={step.title}
          description={step.description}
        />
      ))}
    </aside>
  );
};

export default Sidebar;
