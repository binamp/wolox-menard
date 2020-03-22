import React from 'react';
import { NavLink } from 'react-router-dom';
import navstyle from './navstyle.module.scss';
import Logo from '../../image/toolbar/logo.jpeg'

class Navbar extends React.Component {

    render() {
        const items = [
            { title: "Polo lessons" , url: "/lessons" },
            { title: "Polo Holidays" , url: "/holidays" },
            { title: "Livery Services" , url: "/services" },
            { title: "Team Management" , url: "/management" },
            { title: "Horses for Sale" , url: "/sale" },
            { title: "Contact US" , url: "/contact" }
        ]
        return (
            <header className={navstyle.toolBar}>

                <nav className={navstyle.toolBarNav}>
                    <div className={navstyle.toolBarLogo}>

                        <NavLink to="/" >
                            <img src={Logo} alt="Home" />
                        </NavLink>
                    </div>
                    <div className={navstyle.spacer} />
                    <div className={navstyle.toolBarItems}>
                        <ul>
                            {
                                items.map((n,index)=>
                                    <li key={index}>
                                        <NavLink activeClassName={navstyle.toolBarRefActive} className={navstyle.toolBarRef} to={n.url}>{n.title}</NavLink>
                                    </li>
                                )
                            }
                        </ul>
                        {/* <ul>
                            <li>
                                <NavLink activeClassName={navstyle.toolBarRefActive} className={navstyle.toolBarRef} to="/lessons" >Polo lessons</NavLink>
                            </li>
                            <li>
                                <NavLink to="/holidays" className={navstyle.toolBarRef} >Polo Holidays </NavLink>
                            </li>
                            <li>
                                <NavLink to="/services" className={navstyle.toolBarRef} >Livery Services</NavLink>
                            </li>
                            <li>
                              <NavLink to="/management" className={navstyle.toolBarRef}  >Team Management</NavLink>
                            </li>
                            <li>
                                <NavLink to="/sale" className={navstyle.toolBarRef} >Horses for Sale</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={navstyle.toolBarRef} >Contact US</NavLink>
                            </li>
                        </ul> */}
                    </div>
                </nav>
            </header>
        );
    }

}

export default Navbar;