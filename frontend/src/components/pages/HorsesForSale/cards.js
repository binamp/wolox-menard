import React from 'react';
import style from './card.module.scss';

class Card extends React.Component{
 render(){
  return(
       <div>
         <div className={style.cards}>
         <div className={style.card}></div>
         <div className={style.card}></div>
         <div className={style.card}></div>
         <div className={style.card}></div>
         </div>
   </div>
)
 }
}

export default Card;