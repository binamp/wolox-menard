import React from "react";

import Contact from "./contact";
import styles from "../../../../src/styles.module.scss";

function Form() {
  return (
    <div className={styles.container1}>
      <Contact />
      <div className={styles.container2}>
        <div className={styles.container3}>
          <div className={styles.form1}>
            <form>
              <label for="name" className={styles.label}>
                FULL NAME
              </label>
              <br />
              <input
                name="name"
                className={styles.name}
                placeholder="FULL NAME"
                type="text"
                value=""
              />

              <input
                name="phonenumber"
                className={styles.namber}
                placeholder="PHONE NUMBER"
                type="namber"
                value=""
              />
              <textarea
                placeholder="MESSAGE"
                className={styles.message}
                cols="20"
                rows="8"
                type="text"
                value=""
              />
            </form>
          </div>
          <div className={styles.form2}>
            <form>
              <input
                type="email"
                className={styles.email}
                placeholder="E-MAIL ADDRESS"
                name="email"
                value=""
              />
              <select className={styles.select} type="select" value="">
                <option value="ss">SELECT A SUBJECT(S) </option>
                <option value="pl">polo lessons </option>
                <option value="ph">polo holidays</option>
                <option value="lv">livery services</option>
                <option value="tm">team management</option>
                <option value="hfs">horses for sale</option>
              </select>
            </form>
          </div>
          <button className={styles.formButton}>SEND FORM</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
