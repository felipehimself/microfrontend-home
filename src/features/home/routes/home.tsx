import { usePageStyles } from '@/styles';

export const Home = () => {
  const styles = usePageStyles();

  return (
    <div className={styles.div}>
      <p className={styles.text}>
        This is the Home single page
      </p>
    </div>
  );
};
