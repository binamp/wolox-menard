import React from "react";
import Welcome from "./welcome";
import OurServices from "./ourServices";
import styles from "./styles.module.scss";
import Navbar from "../../navbar/navbar.js";
import Footer from "../../ Footer/footer";

function Home() {
  return (
    <div className={styles.background}>
      <Navbar />
      <Welcome />
      <OurServices />
      <Footer />
    </div>
  );
}
export default Home;
