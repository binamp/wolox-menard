import React from "react";

import Contact from "./contact";
import style from "./form.module.scss";

import Formu from './formu';

function Form() {
  return (
    <div className={style.container1}>
      <Contact />
      <div className={style.container2space}>
        <Formu />
      </div>
    </div>
  );
}

export default Form;
