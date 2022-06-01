import React from "react";
import styles from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <section className={styles.spinnerContainer}>
      <article className={styles.loader}></article>
    </section>
  );
};

export default LoadingSpinner;
