import React from 'react';

import Navbar from '../../navbar/navbar';
import Footer from '../../ Footer/footer';

import LiveryServices from './liveryserv';
import style from './style.module.scss';

const Error = () => (
  <div className={style.horses}>
    <div className={style.cap}>
      <div>
        <Navbar />
        <LiveryServices />
        <Footer />
      </div>
    </div>
  </div>
);

export default Error;
