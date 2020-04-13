import React from 'react';

import styles from './modal.module.scss';

function Boton({ onClick, className }) {
  return (
    <button type="button" onClick={onClick} className={`${styles.btn} ${className}`}>
      Close X
    </button>
  );
}

export default Boton;
