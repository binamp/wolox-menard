import React from 'react';
import LiveryServices from './liveryserv';
import Footer from '../../ Footer/footer';


class LiveryService extends React.Component{


    render(){
        return( 
            <div>
                 <LiveryServices />
                   <Footer />
            </div>
        )
    }
}

export default LiveryService;