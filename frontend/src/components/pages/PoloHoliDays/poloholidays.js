import React from 'react';

import Carousel from '../../carrousel/carrousel';
import Navbar from '../../navbar/navbar';
import Footer from '../../ Footer/footer';

import styles from './styles.module.scss';
import Travel from './travel';

function PoloHoliDays() {
  return (
    <div className={styles.backgroundHolidays}>
      <Navbar />
      <Travel />
      <div className={styles.container}>
        <Carousel />
      </div>
      <Footer />
    </div>
  );
}

export default PoloHoliDays;
