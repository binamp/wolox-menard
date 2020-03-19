import React from 'react';
import style from './styles.module.scss';


class Container extends React.Component{
    render(){
        return(
          
          <div className={style.content}>
               <h1 className={style.titulo}>Polo lessons</h1>
                 <hr className={style.linea}></hr>
                 <span>take your skill to the next level</span>
                <p className={style.parf}>The Oxford Polo School’s fully qualified team offer several options for individuals and groups,
                  ensuring that you receive the correct coaching that suits your skill level and ability. 
                  Our wide variety of horses are suited to all levels, from complete beginners to professionals,
                  so no previous riding experience is needed.
                  All necessary equipment is available for lessons and is included within the price.
                  </p>
                  <div className={style.contenedorboton}>
                    <a href="#" className={style.boton}>CONTACT US</a>
                 </div>
             </div>          
   
     )
  }
}

export default Container;