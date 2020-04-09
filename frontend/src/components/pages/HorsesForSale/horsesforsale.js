import React from 'react';

import Footer from '../../ Footer/footer';
import Navbar from '../../navbar/navbar';

import Cards from './cards';
import Container from './container';
import ListData from './ListData';
import gstyle from './style.module.scss';

const HorseForSale = () => (
  <div className={gstyle.compBody}>
    <Navbar />
    {/* <div className={style.column}> */}
    <div className={gstyle.contenedores}>
      <Container />
      <Cards horsesimg={ListData} />
    </div>
    {/* </div> */}
    <Footer />
    {/* <span className={style.backgroundtriangle} /> */}
  </div>
);
export default HorseForSale;
