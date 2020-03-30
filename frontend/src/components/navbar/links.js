/* eslint-disable line-comment-position */
import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../image/toolbar/logomenu.png';

import navstyle from './navstyle.module.scss';
// recibe el Array (lista)
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
          {// llamo a la propiedad 'link' que le asgine en navbar.js y recorro todas las pociciones de la lista y uso los datos de cada pocicion en NavLink
          // eslint-disable-next-line react/prop-types
          props.link.map((list, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index}>
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
