import React from 'react';

import Footer from '../../ Footer/footer';
import Navbar from '../../navbar/navbar';

import Contact from './contact';
import Formu from './formu';
import style from './style.module.scss';

function ContactUs(isHome) {
  return (
    <div className={style.background}>
      <div className={style.cap}>
        <Navbar />
        <div className={style.container1}>
          <div className={`${isHome ? style.containerM : style.containerModal}`}>
            <Contact />
            <Formu />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ContactUs;
