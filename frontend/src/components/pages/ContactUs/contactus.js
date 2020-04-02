import React from 'react';

import Footer from '../../ Footer/footer';

import FormContact from './formcontact';
import style from './style.module.scss';

function ContactUs() {
  return (
    <div className={style.background}>
      <div className={style.cap}>
        <FormContact />
        <Footer />
      </div>
    </div>
  );
}
export default ContactUs;
