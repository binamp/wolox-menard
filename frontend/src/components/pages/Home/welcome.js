import React from "react";
import styles from "./styles.module.scss";
import Logo from "./img/Logo M.svg";
import Border from "./img/Trazado 50.svg";
import filter from "./img/Rectángulo 76.svg";

function Welcome() {
  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>
        <h1 className={styles.firstFont}>
          Welcome to
          <br />
          the best polo experience
        </h1>
        <img src={Border} />
        <p className={styles.logoFont}>WELCOME TO</p>
        <img src={Logo} />
        <div className={styles.paragraphContainer}>
          <div className={styles.paragraphContainer2}>
            <p className={styles.secondFont}>
              Menard Polo was founded in 2011 by David Ashby and is one of the
              UK’s top polo schools. With its success it expanded into polo
              events, livery, coaching, team management, transportation,
              logistics and player coaches. Oxford Polo offers a comprehensive
              service to the polo world.
            </p>
            <p className={styles.secondFont}>
              Menard Polo’s aim is to spread polo far and wide, sharing our
              fantastic sport with as many as possible. Within our local
              community, polo players and clientele are people from all corners
              of the world who work in the widest range of industries making for
              some very interesting networking. The shared love of the sport
              opens doors to commercial opportunities and brand new friendships.
            </p>
          </div>
          <div className={styles.paragraphContainer2}>
            <p className={styles.secondFont}>
              Menard Polo is fully certified by The Association of Polo Schools
              and Pony Hirers (APSPH) and uses fully qualified Hurlingham Polo
              Association (HPA) Coaches. Oxford Polo’s fully qualified team
              offers several options for individuals and groups, ensuring that
              you receive the correct coaching that suits your skill level and
              ability. Our wide variety of horses are suited to all levels, from
              complete beginners to professionals, so no previous riding
              experience is needed. All necessary equipment is available for
              lessons and is included within the price.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Welcome;
