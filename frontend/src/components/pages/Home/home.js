import React from "react";
import Welcome from "./welcome";
import OurServices from "./ourServices";
import styles from "./styles.module.scss";
import Navbar from "../../navbar/navbar.js";

function Home() {
  return (
    <div className={styles.background}>
      <Navbar />
      <Welcome />
      <OurServices />
    </div>
  );
}
export default Home;
