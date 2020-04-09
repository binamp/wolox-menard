import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';
import logo from './imagenes/logo.png';
import twitter from './imagenes/twitter-2.svg';
import facebook from './imagenes/facebook-4.svg';
import instagram from './imagenes/instagram-3.svg';
import binamp from './imagenes/logobinamp.png';
import trazado from './imagenes/Trazado.png';

function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer>
      <div className={styles.containerbody}>
        <div className={styles.column}>
          <img className={styles.imagen1} src={logo} alt="logo" />
        </div>
        <div className={styles.row1}>
          <span className={styles.h2titulo}>Contact us</span>
          <span className={styles.labeltext}>Kirtlington Park Polo Club</span>
          <span className={styles.labeltext}>akerman Street</span>
          <span className={styles.labeltext}> Kirtlington </span>
          <span className={styles.labeltext}>OXS 3JQ</span>
        </div>
        <img src={trazado} alt="trazado" className={styles.trazado} />
        <div className={styles.row2}>
          <div>
            <a href="https://twitter.com/MeTCBaOk" target="_blank">
              <img src={twitter} alt="twitter" className={styles.logo} />
            </a>
            <a
              href="https://www.facebook.com/binamp.software/?__tn__=%2Cd%2CP-R&eid=ARDR4jx1pSmA5-QX1l0gTiqhzsTwhsbzJMzxs7q2kuGxcTf7vdjPQBZ_UOxGnSiVKZH2wfqfUOAhQi0Y"
              target="_blank"
            >
              <img src={facebook} alt="facebook" className={styles.logo} />
            </a>
            <a href="https://www.instagram.com/binamp.software/" target="_blank">
              <img src={instagram} alt="instagram" className={styles.logo} />
            </a>
          </div>
          <span className={styles.labeltext}>+44 (0) 1865 600 448</span>
          <span className={styles.labeltext}>info@mendardpolo.com</span>
        </div>
        <div className={styles.row3}>
          <span className={styles.copyryght}>
            &#169; {year} Mendard Polo.
            <br />
            All Rights Reserved. <br />
            Designed & Developed by
          </span>
          <div>
            <a href="https://binamp.com/" target="_blank">
              <img className={styles.imagen3} src={binamp} alt="binamp" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
