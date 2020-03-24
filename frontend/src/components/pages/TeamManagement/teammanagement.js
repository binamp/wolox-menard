import React from 'react';

import Navbar from '../../navbar/navbar';

import tmanagement from './tmanagement.module.scss';

const Cuadrilla = () => (
  <>
    <div className={tmanagement.cuadroContact}>
      <div className={tmanagement.centrar}>
        <h1>Team Management</h1>
        <hr />
        <span className={tmanagement.subtitle}>MAKING THE NEXT CHAMPIONS</span>
        <p className={tmanagement.text}>
          holaaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
        </p>
      </div>
    </div>
    <div className={tmanagement.cuadroGallery}>
      <div className={tmanagement.Gallery} />
    </div>
  </>
);

// eslint-disable-next-line react/no-multi-comp
// const Cuadro = () => (
//   <div className={tmanagement.cuadro}>
//     <Cuadrilla />
//   </div>
// );

// eslint-disable-next-line react/no-multi-comp
// const Cuad = () => (
//   <div className={tmanagement.cuadimg}>
//     <Cuadro />
//   </div>
// );

// eslint-disable-next-line react/no-multi-comp
function TeamManagement() {
  return (
    <div className={tmanagement.comp}>
      <Navbar />
      {/* <Cuad /> */}
      <div className={tmanagement.cuadimg}>
        <div className={tmanagement.cuadro}>
          <Cuadrilla />
        </div>
      </div>
    </div>
  );
}

export default TeamManagement;
