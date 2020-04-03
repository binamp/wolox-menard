import React from "react";
import styles from "./carstyles.module.scss";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "./img/image 1.jpg";
import image2 from "./img/image 2.jpg";
import image3 from "./img/image 3.jpg";
import image4 from "./img/image 4.jpg";
import image5 from "./img/image 5.jpg";

function Carrousel(props) {
  return (
    <div className={styles.carouselContainer}>
      <Carousel className={styles.carousel} controls={false} interval={2000}>
        <Carousel.Item className={styles.items}>
          <img className="d-block w-100" src={image1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item className={styles.items}>
          <img className="d-block w-100" src={image2} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item className={styles.items}>
          <img className="d-block w-100" src={image3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item className={styles.items}>
          <img className="d-block w-100" src={image4} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item className={styles.items}>
          <img className="d-block w-100" src={image5} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carrousel;
