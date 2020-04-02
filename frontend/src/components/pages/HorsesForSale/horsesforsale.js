import React from 'react';

import Navbar from '../../navbar/navbar';

import SaleStyle from './horsesForSale.module.scss';

function HorseForSale() {
    return (
        <div className={SaleStyle.compBody}>
            <Navbar />
            <div className={SaleStyle.CuadGral}>
                <div className={SaleStyle.CompVentas}>
                </div>
            </div>
        </div>
    );
}

export default HorseForSale;
