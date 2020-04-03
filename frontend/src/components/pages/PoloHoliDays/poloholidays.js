import React from "react";
import Travel from "./travel";
import Carousel from "../../carrousel/carrousel.js";
import styles from "./styles.module.scss";
import Navbar from "../../navbar/navbar";
import Footer from "../../ Footer/footer";

function PoloHoliDays() {
  return (
    <div className={styles.backgroundHolidays}>
      <Navbar />
      <Travel />
      <Carousel />
      <Footer />
    </div>
  );
}

export default PoloHoliDays;
