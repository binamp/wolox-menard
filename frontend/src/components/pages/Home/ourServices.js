import React from 'react';

import Boton from '../../Boton/boton';

import styles from './styles.module.scss';
import image from './img/Polo lessons 1.svg';
import image2 from './img/Polo holidays 2.svg';
import image3 from './img/Team management 3.svg';
import image4 from './img/Horses for sale 4.svg';
import image5 from './img/Delivery services 5.svg';
import secondBorder from './img/Trazado 123.svg';
import thirdLine from './img/Trazado 123.svg';

function OurServices() {
  return (
    <div className={styles.ourServsContainer}>
      <h2 className={styles.subtitleFont}>OUR SERVICES</h2>
      <img src={secondBorder} />

      <div className={styles.linkContainer}>
        <a href="/lessons" className={styles.link}>
          <div className={styles.mask}>
            <p>
              Polo
              <br />
              Lessons
            </p>
          </div>
          <img src={image} />
        </a>
        <a href="/holidays" className={styles.link}>
          <div className={styles.mask}>
            <p>
              Polo
              <br />
              Holidays
            </p>
          </div>
          <img src={image2} />
        </a>
        <a href="/management" className={styles.link}>
          <div className={styles.mask}>
            <p>
              Team
              <br />
              Management
            </p>
          </div>
          <img src={image3} />
        </a>
        <a href="/sales" className={styles.link}>
          <div className={styles.mask}>
            <p>
              Horses
              <br />
              For sale
            </p>
          </div>
          <img src={image4} />
        </a>
        <a href="/services" className={styles.link}>
          <div className={styles.mask}>
            <p>
              Delivery
              <br />
              Services
            </p>
          </div>
          <img src={image5} />
        </a>
      </div>
      <div>
        <img src={thirdLine} />
      </div>
      <Boton pepe={styles.botonHome} />
    </div>
  );
}

export default OurServices;
