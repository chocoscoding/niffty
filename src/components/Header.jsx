import React from "react";
import hc from "../styles/header.module.css";

const Header = () => {
  return (
    <div className={hc.cover}>
      <div className={hc.body}>
        <div className={hc.main}>
          <p className={hc.maintext}>
            Your No.1 NFT market place for rare collections
          </p>
          <p className={hc.sectext}>
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart.
          </p>

          <div className={hc.cta_body}>
            <button className={hc.cta1}>Download app</button>
            <button className={hc.cta2}>Visit market place</button>
          </div>
        </div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/cdportfolio-95923.appspot.com/o/Header.png?alt=media&token=be3a7d66-a094-4810-a77a-c3dc88edc3be"
          alt="himage"
          className={hc.himage}
        />
      </div>

      <div className={hc.features}>
        <div className={hc.fcont}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cdportfolio-95923.appspot.com/o/Frame%2016.svg?alt=media&token=97aeba0e-db75-4c17-ad3b-3eab85db6efc"
            alt="icon"
          />
          <h3>Rare collections</h3>
          <p>A wonderful serenity has taken possession of my soul.</p>
        </div>
        <div className={hc.fcont}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cdportfolio-95923.appspot.com/o/Frame%2016.svg?alt=media&token=97aeba0e-db75-4c17-ad3b-3eab85db6efc"
            alt="icon"
          />
          <h3>Ethereum Network</h3>
          <p>A wonderful serenity has taken possession of my soul.</p>
        </div>
        <div className={hc.fcont}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cdportfolio-95923.appspot.com/o/Frame%2016.svg?alt=media&token=97aeba0e-db75-4c17-ad3b-3eab85db6efc"
            alt="icon"
          />
          <h3>Market place</h3>
          <p>A wonderful serenity has taken possession of my soul.</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
