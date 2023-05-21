import styles from './page-header.module.css';

type Props = {
  title: string;
  description: string;
};

const PageHeader = ({ title, description }: Props) => {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
};

export default PageHeader;
