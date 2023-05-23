import Button from '@/components/ui/button';
import Link from 'next/link';
import styles from './page-footer.module.css';

type Props = {
  previouseRoute: string;
  isDisabled?: boolean;
  onNext: () => void;
};

const PageFooter = ({ isDisabled, previouseRoute, onNext }: Props) => {
  return (
    <footer className={styles.footer}>
      {previouseRoute && <Link href={previouseRoute}>Go back</Link>}
      <Button disabled={isDisabled} onClick={onNext} variant="step" />
    </footer>
  );
};

export default PageFooter;
