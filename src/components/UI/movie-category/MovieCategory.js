import React from "react";
import styles from "./movieCategory.module.css";

const MovieCategory = ({ children }) => {
  return <span className={styles.cat}>{children}</span>;
};

export default MovieCategory;
