import React from 'react';

import Footer from '../../ Footer/footer';

import Container from './container1';
import Container2 from './container2';
import Container3 from './container3';
import fondo from './imagen/fondolessons.png';
import style from './styles.module.scss';

function PoloLessons() {
  return (
    <div>
      <img src={fondo} alt="fondo" className={style.fondo} />
      <div className={style.contenedor1}>
        <div className={style.fila}>
          <Container />
          <Container2 />
        </div>
        <Container3 />
        <Footer />
      </div>
    </div>
  );
}

export default PoloLessons;
