import ft from "../styles/footer.module.css";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { MdAlternateEmail } from "react-icons/md";
import { BsTelegram, BsFacebook } from "react-icons/bs";
const Footer = () => {
  return (
    <div className={ft.cover}>
      <div className={ft.maincont}>
        <img
          className="n_logo ft"
          src="https://firebasestorage.googleapis.com/v0/b/cdportfolio-95923.appspot.com/o/NIFFTY.svg?alt=media&token=7db6c143-fb8b-47fc-b35d-fee9fce5ac44"
          alt="NIFFTY"
        />
        <div className={ft.inner}>
          <div className={ft.row}>
            <h2>About</h2>
            <p>About</p>
            <p>Features</p>
            <p>Career</p>
            <p>Our Vision</p>
          </div>
          <div className={ft.row}>
            <h2>Company</h2>
            <p>Our Mission</p>
            <p>Our Team</p>
            <p>Partner with us</p>
            <p>FAQ</p>
          </div>
          <div className={ft.row}>
            <h2>Support</h2>
            <p>Account</p>
            <p>Support Center</p>
            <p>Feedback</p>
            <p>Contact Us</p>
          </div>
          <div className={ft.row}>
            <h2>Get in touch</h2>
            <p>Download App</p>
            <p>Subscribe</p>
          </div>
        </div>
      </div>

      <div className={ft.bottom}>
        <div className={ft.btside}>
          <BsFacebook />
          <AiFillTwitterCircle />
          <TiSocialLinkedinCircular />
          <BsTelegram />
          <MdAlternateEmail />
        </div>
      </div>
    </div>
  );
};

export default Footer;
