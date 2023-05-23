import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Image
          src="/assets/icons/icon-thank-you.svg"
          width={60}
          height={60}
          alt="Thank You"
        />
        <h2>Thank You!</h2>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
}
