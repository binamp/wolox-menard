import React from 'react';
import Contact from './contact';
import style from './form.module.scss';
class Form extends React.Component {
 render(){
     return(
         <div className={style.containeer}>
           <Contact />
             <div className={style.container3} >
             <div className={style.container4} >
               <div className={style.form1}> 
               <form>
                        <input name="name"
                            className={style.name}
                            placeholder="FULL NAME"
                            type = "text"
                            value="" 
                            />
                            <input name="phonenumber"
                             className={style.namber}
                            placeholder="PHONE NUMBER"
                            type = "namber"
                            value=""  
                            />
                    <textarea
                       placeholder="MESSAGE"
                        className={style.message}
                        type = "text"
                        value=""  
                        />
                        </form>
                    </div>
                     <div className={style.form2}>
                     <form>
                      <input type="email"
                        className={style.email}
                        placeholder="E-MAIL ADDRESS"
                        name="email"
                        value=""
                       />
                    <select
                       name="select"
                       value=""
                       >
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
         </div>

     )
 }
}

export default Form;