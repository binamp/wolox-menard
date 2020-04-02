import React from 'react';

import Boton from '../../Boton/boton';

import style from './style.module.scss';
import wilhorse from './imagenes/wild-horse.png';
import bullhorn from './imagenes/bullhorn.png';
import search from './imagenes/search.png';

function Container() {
  return (
    <div className={style.secciones}>
      <div className={style.seccionuno}>
        <h1 className={style.h1}>
          HORSES FOR <br />
          SALE
        </h1>
        <hr className={style.hrr} />
        <span>MENARD POLO’S HORSE OPERATION HAS THREE SIDES TO IT</span>
      </div>
      <div className={style.seccion}>
        <img src={wilhorse} alt="wild-horse" style={{ height: '90px', width: '70px' }} />
        <span>
          {' '}
          MENARD POLO <br /> HORSES SALE
        </span>
        <p>
          {' '}
          Menard Polo has a range of horses available for sale for all different levels, from horses for
          children or beginners to professionals.
        </p>
      </div>
      <div className={style.seccion}>
        <img src={bullhorn} alt="bullhorn" style={{ height: '90px', width: '90px' }} />
        <span> MARKETING</span>
        <p>
          {' '}
          Menard Polo can also become a marketing platform for horses you wish to sell. With our large network
          of partners we will be able to market your horse to the right people within the industry. We do not
          sell any horse for anyone. Each horse advertised by us has to meet certain criteria to ensure we are
          only selling top quality horses.
        </p>
      </div>
      <div className={style.seccion}>
        <img src={search} alt="bullhorn" className={style.imagen} />
        <span> SEARCH SERVICE</span>
        <p>
          {' '}
          If we don’t have the horse(s) that you are looking for, Oxford Polo has a large number of trusted
          partners and can offer access to hundreds of horses worldwide. This comes with our neutral advice to
          make sure you walk away with the best possible horse for your needs.
        </p>
      </div>
      <div>
        <span>
          For further information on any
          <br />
          of our services and horses please{' '}
        </span>
      </div>
      <br />
      <Boton />
    </div>
  );
}

export default Container;
