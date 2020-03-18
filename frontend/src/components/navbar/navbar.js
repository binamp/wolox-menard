import React from 'react';
import { Link } from 'react-router-dom';
import navstyle from './navstyle.module.scss';

class Navbar extends React.Component{

    render(){
        return(
            <header className={navstyle.toolBar}>
                <nav className={navstyle.toolBarNav}>
                    <div className={navstyle.navLogo}>
                        <p>aca va un logo</p>
                    </div>
                    <div className={navstyle.toolBarItems}>
                        <ul>
                            <li>
                                <Link to="/lessons" >Polo lessons</Link>
                            </li>
                            <li>
                                <Link to="/holidays">Polo Holidays</Link>
                            </li>
                            <li>
                                <Link to="/services">Livery Services</Link>
                            </li>
                            <li>
                                <Link to="/management">Team Management</Link>
                            </li>
                            <li>
                                <Link to="/sale">Horses for Sale</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact US</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                
            </header>
        );
    }

}

export default Navbar;