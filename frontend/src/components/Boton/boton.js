import React from 'react';
import style from './styles.module.scss';

class Boton extends React.Component {
    
   render() {
      const {pepe} = this.props;
          return <button className={`${style.boton} ${pepe}`}>CONTACT US</button>;
   }
 }

 export default Boton;