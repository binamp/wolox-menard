import React from 'react';

import Boton from '../../Boton/boton';

import style from './style.module.scss';

class LiveryService extends React.Component {
  render() {
    return (
      <div className={style.rectangle}>
        <div className={style.rectangleOne}>
          <h1 className={style.titleOne}>
            Livery
            <br />
            Services
          </h1>
          <hr className={style.hr} />
          <span className={style.subtitle}>THE CARE THAT YOUR HORSES NEEDS</span>
          <p className={style.text}>
            Mendar Polo offers an inclusive livery service which provides the highest standard of care for
            horses. We are able to tailor our service to meet you and your horses needs. With our coaches and
            professionals always on hand to school and train you can rest assured that your horse will perform
            to their maximum. Please don’t hesitate to get in touch and speak to us regarding your
            requirements.
          </p>
          <p className={style.text}>
            Mendar Polo also runs a winter livery and turn out service insuring that all horses will be looked
            after with the utmost care minimising any risk whilst you relax and take a deserved winter break.
          </p>
          <Boton ButtonTwo={style.button2} />
        </div>
      </div>
    );
  }
}

export default LiveryService;
