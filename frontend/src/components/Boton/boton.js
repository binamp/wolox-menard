import React from 'react';

import style from './styles.module.scss';

class Boton extends React.Component {
  AbrirModal = () => this.props.Abrir();
  render() {
    const { pepe} = this.props;
    return (
      <button type="button" onClick={this.AbrirModal} className={`${style.button} ${pepe}`}>
        CONTACT US
      </button>
    );
  }
}

export default Boton;
