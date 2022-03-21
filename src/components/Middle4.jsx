import React from "react";
import md2 from "../styles/middle2.module.css";
import { BsArrowRight } from "react-icons/bs";

const Middle2 = () => {
  return (
    <div className={md2.cover}>
      <div className={md2.body}>
        <div className={md2.innerbody}>
          <div className={md2.side2}>
            <h3>
              Niffty major features includes the following but not limited:
            </h3>
            <p>
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone.
            </p>

            <div className={md2.inputdiv}>
              <input type="text" placeholder="Input email address here" />
              <button>
                Download Niffty <BsArrowRight />
              </button>
            </div>
          </div>
        </div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/cdportfolio-95923.appspot.com/o/Middle6.png?alt=media&token=081cfe2c-6552-4dac-8672-edc80e5e9d14"
          alt="phone"
          className={md2.innerimage2}
        />
      </div>

      <img
        src="https://firebasestorage.googleapis.com/v0/b/cdportfolio-95923.appspot.com/o/Star.png?alt=media&token=09edc380-4048-4647-afd3-0df65b49a049"
        alt="star"
        className={md2.star1}
      />
      <img
        src="https://firebasestorage.googleapis.com/v0/b/cdportfolio-95923.appspot.com/o/Star.png?alt=media&token=09edc380-4048-4647-afd3-0df65b49a049"
        alt="star"
        className={md2.star2}
      />
    </div>
  );
};

export default Middle2;
