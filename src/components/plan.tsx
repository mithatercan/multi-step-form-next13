import Image from 'next/image';
import styles from './plan.module.css';

type Props = {
  icon: string;
  name: string;
  price: number;
  plan: 'monthly' | 'yearly';
  isSelected?: boolean;
  onClick?: () => void;
};

const Plan = ({ onClick, icon, name, price, plan, isSelected }: Props) => {
  const className = isSelected
    ? `${styles.plan} ${styles.selected}`
    : `${styles.plan}`;

  return (
    <div onClick={onClick} className={className}>
      <Image src={icon} alt={name} width={32} height={32} />
      <div className={styles['plan-info']}>
        <h5>{name}</h5>
        <p>
          ${price}/{plan === 'monthly' ? 'mo' : 'yr'}
        </p>
      </div>
    </div>
  );
};

export default Plan;
