import React from 'react';

import style from './style.module.scss';

function Container3() {
  return (
    <div className={style.fila2}>
      <div className={style.uno}>
        <h1 className={style.title}>PRIVATE LESSONS</h1>
        <p>
          Private Lessons are designed to give specific One to One coaching which is tailored to you. One
          coaching allows you to develop specific skills in a high-quality learning environment ensuring
          maximum improvement. The One to One tutoring allows the participant to work on specific areas of
          their game and have one hundred percent of the coaches attention.
        </p>
      </div>
      <div className={style.dos}>
        <h1 className={style.title}>GROUP LESSONS</h1>
        <p>
          We run group lessons and training sessions every week for all levels, from beginners to positive
          handicap players. Group lessons are exceptionally well suited to team practices and offer the chance
          to train together as a team. Whether you are a private group of friends or a team, a group lesson
          not only improves your game but builds a fun friendly atmosphere amongst the group. What can be
          better than sharing your polo experience with friends?
        </p>
      </div>
      <div className={style.tres}>
        <h1 className={style.title}>INSTRUCTIONAL CHUKKAS</h1>
        <p>
          The Oxford Polo School tailors instructional chukkas to your ability.
          <br />
          <br />
          Beginners Chukkas- Once you are ready to make the step up from lessons, controlled instructional
          chukkas can be arranged allowing you to learn more about the game and tactics of the sport. Our
          coaches will play alongside to offer advice, encouragement and maintain a safe environment.
        </p>
      </div>
    </div>
  );
}

export default Container3;
