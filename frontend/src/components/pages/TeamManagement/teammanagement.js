import React from 'react';

import Navbar from '../../navbar/navbar';

import tmanagement from './tmanagement.module.scss';

function TeamManagement() {
  return (
    <div className={tmanagement.comp}>
      <div className={tmanagement.capa}>
        <Navbar />
        <div className={tmanagement.cuadimg}>
          <div className={tmanagement.cuadro}>
            <div className={tmanagement.cuadroContact}>
              <div className={tmanagement.centrar}>
                <h1>Team Management</h1>
                <hr />
                <span className={tmanagement.subtitle}>MAKING THE NEXT CHAMPIONS</span>
                <p className={tmanagement.text}>
                  Menard Polo has all your team’s needs covered. From first thought to prize giving we make the
                  process as simple as possible. Tournament planning and entries, team selection, horse lists,
                  logistics are all covered in our management service. In our community pages below there are many
                  examples of teams that we manage from Junior HPA to Victor Ludorumn.</p>
                <p className={tmanagement.text}>
                  We have an acute awareness of a team’s strengths and are able to see what assets different players
                  may bring to enhance the team. We aim to nurture a positive and professional relationship between
                  professionals and patrons so come match day the only thought is the game itself.</p>
                <div className={tmanagement.temp}> Contact Us</div>
              </div>
            </div>
            <div className={tmanagement.cuadroGallery}>
              <div className={tmanagement.Gallery} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamManagement;
