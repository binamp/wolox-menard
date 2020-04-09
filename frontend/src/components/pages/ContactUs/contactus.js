import React from "react";

import Footer from "../../ Footer/footer";
import Navbar from "../../navbar/navbar.js";

import FormContact from "./formcontact";
import styles from "../../../../src/styles.module.scss";

function ContactUs() {
  return (
    <div className={styles.contactBackground}>
      <div className={styles.cap}>
        <Navbar />
        <FormContact />
        <Footer />
      </div>
    </div>
  );
}

export default ContactUs;
