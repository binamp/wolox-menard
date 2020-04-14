import React from 'react';

import style from './styles.module.scss';

class Boton extends React.Component {
  AbrirModal = () => this.props.Abrir();

  render() {

    const { ButtonTwo } = this.props;

    return (
      <button type="button" onClick={this.AbrirModal} className={`${style.button} ${ButtonTwo}`}>
        CONTACT US
      </button>
    );
  }
}

export default Boton;
