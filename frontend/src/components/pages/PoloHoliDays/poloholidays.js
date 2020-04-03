import React from "react";
import Travel from "./travel";
import Carousel from "../../carrousel/carrousel.js";
import Button from "./button";
import styles from "./styles.module.scss";
import Navbar from "../../navbar/navbar";

function PoloHoliDays() {
  return (
    <div className={styles.backgroundHolidays}>
      <Navbar />
      <Travel />
      <Carousel />
      <Button />
    </div>
  );
}

export default PoloHoliDays;
