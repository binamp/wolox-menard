import React from 'react';

import Footer from '../../ Footer/footer';
import Navbar from '../../navbar/navbar';

import Cards from './cards';
import Container from './container';
import style from './card.module.scss';


function HorseForSale() {
  return (
    <>
      <div className={style.column}>
        <Navbar />
        <Container />
        <Cards />
      </div>
      <Footer />
      <span className={style.backgroundtriangle} />
    </>
  );
}

export default HorseForSale;
