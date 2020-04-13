import React from 'react';

import Formu from '../pages/ContactUs/formu';
import style from './modal.module.scss';


import cruz from './iconos/cruz.svg';
import Boton from './cerrar';

class Modal extends React.Component {
  cerrar = () => this.props.Cerrar();

  render() {
    return (
      <div className={style.modal}>
        <Boton icono={cruz} onClick={this.cerrar} className={style.BotonCerrar} />
        <Formu />
      </div>
    );
  }
}

export default Modal;
