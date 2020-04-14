import React from 'react';

import Formu from '../pages/ContactUs/formu';


import linea2 from './iconos/linea2.png';
import style from './modal.module.scss';
import Boton from './cerrar';

class Modal extends React.Component {
  cerrar = () => this.props.Cerrar();

  render() {
    const { seleccion } = this.props;
    console.log(seleccion);
    return (
      <div className={style.modal}>
        <Boton onClick={this.cerrar} className={style.BotonClose} />
        <div isHome={this.props.isHome} className={style.containerModal}>
          <div className={style.containerTwo}>
            <h1 className={style.titulo2}>Contact us</h1>
            <img src={linea2} alt="linea" className={style.linea2} />
            <span className={style.subtitulo2}>
              PLEASE SEND US YOUR QUESTIONS
              <br />
              OR ENQUIRIES BY COMPLETING THIS FORM{' '}
            </span>
          </div>
          <Formu isHome={this.props.isHome} />
        </div>
      </div>
    );
  }
}

export default Modal;
