import React from 'react';

import style from './card.module.scss';

function Card() {
  return (
    <div>
      <div className={style.cards}>
        <div className={style.card} />
        <div className={style.card} />
        <div className={style.card} />
        <div className={style.card} />
      </div>
    </div>
  );
}

export default Card;
