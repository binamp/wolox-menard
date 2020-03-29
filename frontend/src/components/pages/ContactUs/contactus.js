import React from 'react'
import FormContact from './formcontact';
import style from './style.module.scss';
import Footer from '../../ Footer/footer';
function ContactUs (){
    return(
        <div className={style.background} >
          <div className={style.cap} >
             <FormContact/>
             <Footer/>
           </div>
       </div>
    )
}
export default ContactUs;