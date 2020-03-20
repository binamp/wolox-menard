import React from 'react';
import style from './style.module.scss';
import wilhorse from './imagenes/wild-horse.png';
class Container extends React.Component{
    render(){
        return(
          
         <div class={style.secciones}>
            <div class={style.seccion} >
              <h1>Horses for <br></br>Sale</h1>
               <hr></hr>
               <span>MENARD POLO’S HORSE OPERATION
                     HAS THREE SIDES TO IT</span>
            </div>
            <div class={style.seccion} >
               <img src= {wilhorse} alt="wild-horse"/>
             <span> </span>
            <p> Menard Polo has a range of horses available for sale for all different levels, 
            from horses for children or beginners to professionals.</p>
               
            </div>
            <div class= {style.seccion}>

            </div>
          </div>
   
     )
  }
}

export default Container;