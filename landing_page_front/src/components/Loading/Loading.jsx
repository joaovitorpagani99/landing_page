import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <span>Carregando...</span>
    </div>
  );
}

export default Loading;
