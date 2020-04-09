import React from "react";
import Welcome from "./welcome";
import OurServices from "./ourServices";
import styles from "../../../../src/styles.module.scss";
import Navbar from "../../navbar/navbar.js";
import Footer from "../../ Footer/footer";

function Home() {
  return (
    <div className={styles.homeBackground}>
      <Navbar />
      <Welcome />
      <OurServices />
      <Footer />
    </div>
  );
}
export default Home;
