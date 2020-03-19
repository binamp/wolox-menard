import React from 'react';
import styles from './styles.module.scss';
import logo from './imagenes/logo.png';
import redes from './imagenes/redes.png';
import binamp from './imagenes/logobinamp.png';


class Fooster extends React.Component {
 render(){
    return(
        <footer>    
     <div className={styles.containerbody}>
       <div className={styles.colum1}>
         <img  className={styles.imagen1} src={logo}  alt="logo"/>      
      </div>
         <div className={styles.colum2}>   
           <div className={styles.row1}>
            <h1>Contact US</h1>
               <label>Kirtlington Park Polo Club</label>
                  <label>akerman Street</label>
                    <label> Kirtlington</label>
                      <label>OXS 3JQ</label>
                   </div>        
              </div>
         <div className={styles.vl}> </div>
            <div className={styles.colum2}>
              <div className={styles.row2}>
                <img className={styles.imagen2} src= {redes} alt="redes" />
               <label   style={{ width: "160px" }}>+44 (0) 1865 600 448</label>
                 <label style={{ width: "160px" }}>info@mendardpolo.com</label> 
                 <img  className={styles.imagen3} src= {binamp}  alt="binamp"/>
              </div>
          </div>  
        
     </div>  
 </footer>

     )
   }
}

export default Fooster;