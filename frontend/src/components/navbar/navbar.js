import React from 'react';
import { Link } from 'react-router-dom';
import navstyle from './navstyle.module.scss';
import Logo from '../../image/toolbar/logo.jpeg'

class Navbar extends React.Component {

    render() {
        return (
            <header className={navstyle.toolBar}>

                <nav className={navstyle.toolBarNav}>
                    <div className={navstyle.toolBarLogo}>

                        <Link to="/" >
                            <img src={Logo} alt="Home" />
                        </Link>
                    </div>
                    <div className={navstyle.spacer} />
                    <div className={navstyle.toolBarItems}>
                        <ul>
                            <li>
                                <Link to="/lessons" className={navstyle.toolBarRef} >Polo lessons</Link>
                            </li>
                            <li>
                                <Link to="/holidays" className={navstyle.toolBarRef} >Polo Holidays </Link>
                            </li>
                            <li>
                                <Link to="/services" className={navstyle.toolBarRef} >Livery Services</Link>
                            </li>
                            <li>
                              <Link to="/management" className={navstyle.toolBarRef}  >Team Management</Link>
                            </li>
                            <li>
                                <Link to="/sale" className={navstyle.toolBarRef} >Horses for Sale</Link>
                            </li>
                            <li>
                                <Link to="/contact" className={navstyle.toolBarRef} >Contact US</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }

}

export default Navbar;