import React from 'react';

import Boton from '../../Boton/boton';
import Modal from '../../modal/modal'

import style from './styles.module.scss';
import linea from './imagen/linea.png';


class Container extends React.Component {
  state = {
    show: false,
  };

  IsOpen = () => {
    this.setState({ show: true });
  };

  CerrarTexto = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <>
        {this.state.show && <Modal Cerrar={this.CerrarTexto} isHome />}
        <div className={style.content}>
          <h1 className={style.title1}>Polo lessons</h1>
          <img src={linea} alt="linea" className={style.line} />
          <span>take your skill to the next level</span>
          <p className={style.subTitle1}>
            The Oxford Polo School’s fully qualified team offer several options for individuals and groups,
            ensuring that you receive the correct coaching that suits your skill level and ability. Our wide
            variety of horses are suited to all levels, from complete beginners to professionals, so no
            previous riding experience is needed. All necessary equipment is available for lessons and is
            included within the price.
          </p>
          <Boton Abrir={this.IsOpen} ButtonTwo={style.buttonThree} />
        </div>
      </>
    );
  }
}

export default Container;
