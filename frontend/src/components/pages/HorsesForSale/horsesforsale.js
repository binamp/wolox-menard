import React from 'react';

import Navbar from '../../navbar/navbar';

import SaleStyle from './horsesForSale.module.scss';

const CompVentas = () => (
    <div className={SaleStyle.CompVentas}>
    </div>
)

const CuadGral = () => (

    <div className={SaleStyle.CuadGral}>
        <CompVentas />
    </div>
);
function HorseForSale() {
    return (
        <div className={SaleStyle.compBody}>
            <Navbar />
            <CuadGral />
        </div>
    );
}
export default HorseForSale;
