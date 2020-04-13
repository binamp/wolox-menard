import React from 'react';

import Navbar from '../../navbar/navbar';
import Footer from '../../ Footer/footer';
import Boton from '../../Boton/boton';
import Gallery from '../../carrousel/carrousel';

import fondo from './imagen/management.png';
import tmanagement from './tmanagement.module.scss';

function TeamManagement() {
  return (
    <div>
      <div className={tmanagement.component}>
        <div className={tmanagement.cap}>
          <Navbar />
          <div className={tmanagement.squareImg}>
            <img src={fondo} className={tmanagement.squareImg} />
            <div className={tmanagement.Square}>
              <div className={tmanagement.squareContact}>
                <div className={tmanagement.center}>
                  <h1>Team Management</h1>
                  <hr />
                  <span className={tmanagement.subtitle}>MAKING THE NEXT CHAMPIONS</span>
                  <p className={tmanagement.text}>
                    Menard Polo has all your team’s needs covered. From first thought to prize giving we make
                    the process as simple as possible. Tournament planning and entries, team selection, horse
                    lists, logistics are all covered in our management service. In our community pages below
                    there are many examples of teams that we manage from Junior HPA to Victor Ludorumn.
                  </p>
                  <p className={tmanagement.text}>
                    We have an acute awareness of a team’s strengths and are able to see what assets different
                    players may bring to enhance the team. We aim to nurture a positive and professional
                    relationship between professionals and patrons so come match day the only thought is the
                    game itself.
                  </p>
                  <Boton ButtonTwo={tmanagement.Button4} />
                </div>
              </div>
              <div className={tmanagement.squareGallery}>
                <div className={tmanagement.Gallery}>
                  <Gallery />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default TeamManagement;
