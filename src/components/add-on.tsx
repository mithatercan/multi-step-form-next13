import Checkbox from './ui/checkbox';
import styles from './add-on.module.css';
import { ChangeEvent } from 'react';

type Props = {
  title: string;
  description: string;
  price: number;
  planType: 'monthly' | 'yearly';
  isSelected?: boolean;
  onSelect?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const AddOn = ({
  onSelect,
  isSelected,
  title,
  description,
  price,
  planType,
}: Props) => {
  const className = isSelected
    ? `${styles['add-on']} ${styles['selected']}`
    : styles['add-on'];

  return (
    <div className={className}>
      <div className={styles['add-on-content']}>
        <Checkbox onChange={onSelect} />

        <div className={styles['add-on-details']}>
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </div>

      <p className={styles['add-on-price']}>
        +${price}/{planType === 'monthly' ? 'mo' : 'yr'}
      </p>
    </div>
  );
};

export default AddOn;
