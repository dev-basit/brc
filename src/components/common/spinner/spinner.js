import styles from "./spinner.module.css";

export const Spinner = ({ isLoading }) => {
  return (
    <>
      {isLoading ? (
        <div className={styles.spinnerContainer}>
          <div className={styles.spinnerContainer} />
        </div>
      ) : null}
    </>
  );
};
