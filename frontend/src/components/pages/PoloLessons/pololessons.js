import React from 'react';

import Navbar from '../../navbar/navbar';
import Footer from '../../ Footer/footer';
import Carousel from '../../carrousel/carrousel';

import Container from './container1';
import Container3 from './container3';
import fondo from './imagen/fondolessons.png';
import style from './styles.module.scss';

function PoloLessons() {
  return (
    <div>
      <img src={fondo} alt="fondo" className={style.fund} />
      <div className={style.contenedor1}>
        <div className={style.row1}>
          <Navbar />
          <Container />
          <div className={style.sidebar}>
            <Carousel />
          </div>
        </div>
        <Container3 />
        <Footer />
      </div>
    </div>
  );
}

export default PoloLessons;
