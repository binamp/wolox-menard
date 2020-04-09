import React from "react";
import styles from "../../../src/styles.module.scss";

class Boton extends React.Component {
  render() {
    const { pepe } = this.props;
    return <button className={`${styles.button} ${pepe}`}>CONTACT US</button>;
  }
}

export default Boton;
