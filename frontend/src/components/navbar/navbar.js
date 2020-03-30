import React from 'react';

import Links from './links';
// creo una funccion que devuelve un Array de objetos y se los envia al componente 'Links' como props
const Navbar = () => {
  const items = [
    { title: 'Polo lessons', url: 'lessons' },
    { title: 'Polo Holidays', url: 'holidays' },
    { title: 'Livery Services', url: 'services' },
    { title: 'Team Management', url: 'management' },
    { title: 'Horses for Sale', url: 'sale' },
    { title: 'Contact US', url: 'contact' }
  ];
  return <Links link={items} />;
};
export default Navbar;
