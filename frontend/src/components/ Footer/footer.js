import React from 'react';

import styles from './styles.module.scss';
import logo from './imagenes/logo.png';
import redes from './imagenes/redes.png';
import binamp from './imagenes/logobinamp.png';
import trazado from './imagenes/Trazado.png';
import copyryght from './imagenes/copyryght.png';

function Footer() {
  return (
    <footer>
      <div className={styles.containerbody}>
        <div className={styles.column}>
          <img className={styles.imagen1} src={logo} alt="logo" />
        </div>
        <div className={styles.row1}>
          <h1>Contact US</h1>
          <label>Kirtlington Park Polo Club</label>
          <label>akerman Street</label>
          <label> Kirtlington</label>
          <label>OXS 3JQ</label>
        </div>
        <img src={trazado} alt="trazado" className={styles.trazado} />
        <div className={styles.row2}>
          <img className={styles.imagen2} src={redes} alt="redes" />
          <label>+44 (0) 1865 600 448</label>
          <label>info@mendardpolo.com</label>
        </div>
        <div className={styles.row3}>
          <img className={styles.imagen4} src={copyryght} alt="copyryght" />
          <img className={styles.imagen3} src={binamp} alt="binamp" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
