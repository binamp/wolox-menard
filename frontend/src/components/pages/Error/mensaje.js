import React from 'react';
import { Link } from 'react-router-dom';

import bstyle from '../../Boton/styles.module.scss';

import style from './style.module.scss';

const MError = () => (
  <div className={style.rectangle}>
    <div className={style.rectangleuno}>
      <h1 className={style.titulouno}>This page is not available</h1>
      <hr className={style.hr} />
      <span className={style.subtitulo}>ERROR</span>
      <p className={style.text}>
        Contact the administrator of the page for more information, or return to the home menu.
      </p>
      <button type="button" className={bstyle.button}>
        <Link to="/" >Home</Link>
      </button>
    </div>
  </div>
);

export default MError;
