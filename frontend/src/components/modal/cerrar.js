import React from 'react';

import styles from './modal.module.scss';

function Boton({ onClick, className }) {
  return (
    <div>
    <button type="button" onClick={onClick} className={`${styles.btn} ${className}`}>
      Close X
    </button>
    <button type="button" onClick={onClick} className={`${styles.btn2} ${className}`}>
     X
    </button>
    </div>
  );
}

export default Boton;
