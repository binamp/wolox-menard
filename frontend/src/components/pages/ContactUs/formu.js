import React from 'react';

import style from './form.module.scss';

const Formu = () => (
  <>
    <div className={style.container2}>
      <div className={style.container3}>
        <div className={style.form1}>
          <form>
            <input name="name" className={style.name} placeholder="FULL NAME" type="text"/>
            <input
              name="phonenumber"
              className={style.namber}
              placeholder="PHONE NUMBER"
              type="namber"
            />
            <textarea placeholder="MESSAGE" className={style.message} type="text" />
          </form>
        </div>
        <div className={style.form2}>
          <form>
            <input type="email" className={style.email} placeholder="E-MAIL ADDRESS" name="email" />
            <select type="select" value="">
              <option value="ss">SELECT A SUBJECT(S) </option>
              <option value="pl">polo lessons </option>
              <option value="ph">polo holidays</option>
              <option value="lv">livery services</option>
              <option value="tm">team management</option>
              <option value="hfs">horses for sale</option>
            </select>
          </form>
        </div>
        <button className={style.button}>SEND FORM</button>
      </div>
    </div>
  </>
);

export default Formu;
