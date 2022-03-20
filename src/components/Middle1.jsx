import React from "react";
import md1 from "../styles/middle.module.css";
import { BsArrowRight } from "react-icons/bs";

const Middle1 = () => {
  return (
    <div>
      <div className={md1.body}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/cdportfolio-95923.appspot.com/o/Middle1.png?alt=media&token=4a053b2d-77fe-46da-a523-d8a942963ac9"
          alt="md1image"
        />

        <div className={md1.mcntn}>
          <div className={md1.cont}>
            <span className={md1.line}></span>
            <div className={md1.innerc}>
              <h3>
                Niffty major features includes the following but not limited:
              </h3>
              <p>
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole
                heart. I am alone.
              </p>
            </div>
          </div>
          <div className={md1.cont}>
            <span className={md1.line}></span>
            <div className={md1.innerc}>
              <h3>
                Niffty major features includes the following but not limited:
              </h3>
            </div>
          </div>
          <div className={md1.cont}>
            <span className={md1.line}></span>
            <div className={md1.innerc}>
              <h3>
                Niffty major features includes the following but not limited:
              </h3>
            </div>
          </div>

          <button className={md1.getstarted}>
            GET STARTED <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Middle1;
