/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import PageHeader from '@/components/page-header';
import Input from '@/components/ui/input';
import styles from './style.module.css';
import Button from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/steps/plan');
  };

  return (
    <div className={styles.page}>
      <PageHeader
        title="Personal Info"
        description="Please provide your name, email address and phone number."
      />

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputs}>
          <div>
            <label htmlFor="name">Name</label>
            <Input type="name" placeholder="e.g. John Doe" />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <Input type="email" placeholder="e.g. joe@doe.com" />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <Input type="phone" placeholder="e.g. +1 234 567 89" />
          </div>
        </div>
        <Button type="submit" variant="step" />
      </form>
    </div>
  );
};

export default page;
