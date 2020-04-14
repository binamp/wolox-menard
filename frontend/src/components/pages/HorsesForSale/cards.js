import React from 'react';

import Boton from '../../Boton/boton';
import Modal from '../../modal/modal';

import style from './card.module.scss';

class Card extends React.Component {
  state = {
    show: false,
  };

  IsOpen = () => {
    this.setState({ show: true });
  };

  // esta funcion es llamado desde el componente Texto mediante prop, con el boton llama a la funcion y convierte al state en falso y deja de renderizar
  CerrarTexto = () => {
    this.setState({ show: false });
  };

  render() {
    const caba = this.props.horsesimg;
    let cabselect;
    return (
      <>
        <div className={style.cards}>
          {caba.map((imagedata) => (
            <div key={imagedata.id} className={style.card}>
              <img
                className={style.imghorses}
                src={imagedata.url}
                title={imagedata.title}
                alt={imagedata.alt}
              />
              <div className={style.cuadrodata}>
                <span className={style.title}>{imagedata.title}</span>
                <div className={style.cuadrodatatext}>
                  <div className={style.data}>
                    <p className={style.text}>GENDER</p>
                    <p>{imagedata.gender}</p>
                  </div>
                  <div className={style.data}>
                    <p className={style.text}>AGE</p>
                    <p>{imagedata.age}</p>
                  </div>
                </div>
                <div className={style.spaceabout}>
                  <p>ABOUT</p>
                </div>
                <p>{imagedata.about}</p>
                <Boton Abrir={this.IsOpen} />
              </div>
            </div>
          ))}
        </div>
        {this.state.show && <Modal Cerrar={this.CerrarTexto} seleccion={caba} />}
      </>
    );
  }
}

export default Card;
