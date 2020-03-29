
import React from 'react';
import LiveryServices from './liveryserv';
import Footer from '../../ Footer/footer';
import style from './style.module.scss';

class LiveryService extends React.Component{

    render(){
        return(
            <div className={style.horses} >
                <div className={style.cap}>
                <div>
                  <LiveryServices />
                  <Footer /> 
                  </div>
              </div>
            </div> 
        )
    }
}

export default LiveryService;