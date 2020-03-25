import React from 'react';
import Cards from './cards';
import Footer from '../../ Footer/footer';
import Container from './container';
import style from './card.module.scss';

function HorseForSale() {
    return(
        <>
        <div className={style.column}>
        <Container />
        <Cards />
        </div>
        <Footer />
        <span className={style.backgroundtriangle}></span>
        </>
    )
}

export default HorseForSale;