import React from 'react';

import Boton from '../../Boton/boton';
import Modal from '../../modal/modal';

import styles from './styles.module.scss';
import Border from './img/Trazado 50.svg';

class Travel extends React.Component {
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
        <div className={styles.containerTravel}>
          <h1 className={styles.title}>
            Polo holidays
            <br />
            are the best
          </h1>
          <img src={Border} className={styles.border} />
          <p className={styles.subTitle}>Travel with your passion</p>

          <p className={styles.description}>
            Polo Holidays are one of the massive perks of being a polo player. As Winston Churchill once said,
            “A polo handicap is a passport to the world”. No matter the stage of your polo development, travel
            gives you a chance to experience new cultures and improve your polo. Oxford Polo has fantastic
            business relations with polo facilities all over the world. We have accompanied our clients to
            Europe, Asia, North and South America, the Caribbean & South Africa. <br />
            If you are looking for a break from the office or are a larger group like a School or University
            trip Oxford Polo will tailor your trip to meet your exact requirements. Please get in touch and
            lets starting planning your trip of a lifetime. <br />
            We can cater for anything from intensive polo coaching holidays to relaxing breaks in beautiful
            polo settings to include polo, tennis, swimming and yoga to suit the wider family’s wishes. <br />
            If tournament polo is your thing, we can find some of the best and most prestigious tournaments
            around the globe and plan to bring back the silverware.
          </p>
          <Boton Abrir={this.IsOpen} ButtonTwo={styles.buttonHome} />
        </div>
      </>
    );
  }
}

export default Travel;
