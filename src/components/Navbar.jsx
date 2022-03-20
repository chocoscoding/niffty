import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiDownload } from "react-icons/fi";

const Navbar = () => {
  const [currentp, setcurrentp] = useState("market");
  const [navopen, setNavopen] = useState(true);

  function navc(type) {
    if (type === "market") {
      setcurrentp("market");
    } else if (type === "hiw") {
      setcurrentp("hiw");
    } else if (type === "blog") {
      setcurrentp("blog");
    } else {
      setcurrentp("about");
    }
  }

  return (
    <div className="navcover">
      <nav className="n_body">
        <img
          className="n_logo"
          src="https://firebasestorage.googleapis.com/v0/b/cdportfolio-95923.appspot.com/o/NIFFTY.svg?alt=media&token=7db6c143-fb8b-47fc-b35d-fee9fce5ac44"
          alt="NIFFTY"
        />
        <ul className={` ${navopen ? "n_ul nav_h" : "n_ul"}`}>
          <li onClick={() => navc("market")}>
            <Link to={`/`}>Market Place</Link>
            <div
              className={`n_marketp ${currentp === "market" ? "n_show" : ""}`}
            ></div>
          </li>
          <li onClick={() => navc("hiw")}>
            <Link to={`/`}>How it works</Link>
            <div
              className={`n_hiw ${currentp === "hiw" ? "n_show" : ""}`}
            ></div>
          </li>
          <li onClick={() => navc("about")}>
            <Link to={`/`}>About</Link>
            <div
              className={`n_about ${currentp === "about" ? "n_show" : ""}`}
            ></div>
          </li>
          <li onClick={() => navc("blog")}>
            <Link to={`/`}>Blog</Link>
            <div
              className={`n_blog ${currentp === "blog" ? "n_show" : ""}`}
            ></div>
          </li>
        </ul>
        <GiHamburgerMenu
          className="menub"
          onClick={() => setNavopen(!navopen)}
        />

        <button className="n_download">
          <span className="n_d_t"> Download Now </span>
          <FiDownload className="n_d_i" />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
