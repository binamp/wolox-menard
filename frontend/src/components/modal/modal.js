import React from 'react';

import Formulario from '../pages/ContactUs/formcontact';

import style from './modal.module.scss';
import Boton from './cerrar';

class Modal extends React.Component {
  cerrar = () => this.props.Cerrar();

  render() {
    return (
      <div className={style.modal}>
        <Boton onClick={this.cerrar} className={style.BotonClose} />
        <Formulario  isHome={this.props.isHome} />
      </div>
    );
  }
}

export default Modal;
