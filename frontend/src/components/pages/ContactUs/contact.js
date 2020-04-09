import React from "react";

import linea2 from "./imagen/linea2.png";
import styles from "../../../../src/styles.module.scss";

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.square}>
        <h1 className={styles.contactTitle}>
          Contact
          <br />
          with us
        </h1>
        <img src={linea2} alt="linea" className={styles.titleBorder} />
        <span className={styles.contactUsText}>
          PLEASE SEND US YOUR QUESTIONS <br />
          OR ENQUIRIES BY COMPLETING THIS FORM{" "}
        </span>
      </div>
    </div>
  );
}

export default Contact;
