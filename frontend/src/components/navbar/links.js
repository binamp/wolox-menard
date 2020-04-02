import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../image/toolbar/logomenu.png';

import navstyle from './navstyle.module.scss';
const Links = (props) => (
  <header className={navstyle.toolBar}>
    <nav className={navstyle.toolBarNav}>
      <div className={navstyle.toolBarLogo}>
        <NavLink to="/">
          <img src={Logo} alt="Home" />
        </NavLink>
      </div>
      <div className={navstyle.spacer} />
      <div className={navstyle.toolBarItems}>
        <ul>
          {
          props.link.map((list, ref) => (
            <li key={ref}>
              <NavLink
                activeClassName={navstyle.toolBarRefActive}
                className={navstyle.toolBarRef}
                to={list.url}
              >
                {list.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  </header>
);

export default Links;
