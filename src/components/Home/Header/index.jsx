import React from "react";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <p>Blog</p>
      <p>contact</p>
    </header>
  );
};