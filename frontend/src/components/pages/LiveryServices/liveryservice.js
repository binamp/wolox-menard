import React from 'react';
import LiveryServices from './liveryserv';
import Footer from '../../ Footer/footer';


class LiveryService extends React.Component{


    render(){
        return(
            <section>
                <div>
                  <LiveryServices />
                    <Footer />
                  </div>
            </section>
        )
    }
}

export default LiveryService;