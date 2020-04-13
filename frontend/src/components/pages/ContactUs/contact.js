import React from 'react';

import linea2 from './imagen/linea2.png';
import style from './style.module.scss';

function Contact({isHome}) {
  return (
    <div className={`${isHome? style.contenedor : style.containerModal}`} >
      <div className={style.square}>
        <h1 className={style.titulo2}>
          Contact
          <br />
          with us
        </h1>
        <img src={linea2} alt="linea" className={style.linea2} />
        <span className={style.subtitulo2}>
          please send us your questions or enquiries by completing this form{' '}
        </span>
      </div>
    </div>
  );
}

export default Contact;
