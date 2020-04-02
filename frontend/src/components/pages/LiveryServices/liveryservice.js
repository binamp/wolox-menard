import React from 'react';
import Navbar from '../../navbar/navbar.js';

import Footer from '../../ Footer/footer';

import LiveryServices from './liveryserv';
import style from './style.module.scss';

function LiveryService() {
  return (
    <div className={style.horses}>
      <div className={style.cap}>
        <div>
          <Navbar />
          <LiveryServices />
          <Footer />
        </div>
      </div>
    </div>   
  )
}

export default LiveryService;
