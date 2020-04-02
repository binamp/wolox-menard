import React from "react";
import Travel from "./travel";
import Carrousel from "./carrousel";
import Button from "./button";
import styles from "./styles.module.scss";

function PoloHoliDays() {
  return (
    <div className={styles.backgroundHolidays}>
      <Travel />
      <Carrousel />
      <Button />
    </div>
  );
}

export default PoloHoliDays;
