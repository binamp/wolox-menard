import React from 'react'
import Welcome from  './welcome'
import OurServices from './ourServices'
import styles from './styles.module.scss'


function Home (){
    return(
        <div className={styles.background}>
            <Welcome />                               
            <OurServices />
        </div>
    )
}
export default Home;

