import React from "react";
import styles from "./styles.module.scss";

function Button() {
  return (
    <div>
      <a href="/contact"></a>
      <button className={styles.button}>CONTACT US</button>
    </div>
  );
}
export default Button;
