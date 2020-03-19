import React from 'react';
import Footer from '../../ Footer/footer';
import Container from './container1';
import Container3 from './container3';
import style from './style.module.scss';

function PoloLessons () {
    return(

                <div>
                    <div className={style.contenedor1}>
                        <div className={style.fila}>
                          <Container/>
                             <div className={style.sidebar}>
                             </div>
                             </div>
                         <Container3 />
                         <Footer />
                    </div>
                  </div>
    )
}

export default PoloLessons;