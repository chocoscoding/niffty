import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [smaller_screen, setSmaller_screen] = useState(false);
  return (
    <nav className="n_body">
      <p className="n_logo">NIFFTY</p>
      <ul className="n_ul">
        <li>
          <Link to={`/`}>
            <p>Market Place</p> {smaller_screen && <span className="n_marketp"></span>}
          </Link>
        </li>
        <li>
          <Link to={`/`}>
            <p>How it works</p> {smaller_screen && <span className="n_hiw"></span>}
          </Link>
        </li>
        <li>
          <Link to={`/`}>
            <p>About</p> {smaller_screen && <span className="n_about"></span>}
          </Link>
        </li>
        <li>
          <Link to={`/`}>
            <p>Blog</p> {smaller_screen && <span className="n_blog"></span>}
          </Link>
        </li>

        {smaller_screen || <span className="n_underline"></span>}
      </ul>
      <button className="n_download">Download Now</button>
    </nav>
  );
};

export default Navbar;
