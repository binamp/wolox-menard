import React from 'react';

import Boton from '../../Boton/boton';

import style from './card.module.scss';

const Card = (props) => (
  <>
    <div className={style.cards}>
      {props.horsesimg.map((imagedata) => (
        <div key={imagedata.id} className={style.card}>
          <img className={style.imghorses} src={imagedata.url} title={imagedata.title} alt={imagedata.alt} />
          <div className={style.cuadrodata}>
            <span className={style.title}>{imagedata.title}</span>
            <div className={style.datatitle}>
              <span className={style.datetext}>holaaa</span>
            </div>
            <p>{imagedata.about}</p>
            <Boton />
          </div>
        </div>
      ))}
    </div>
  </>
);

export default Card;
