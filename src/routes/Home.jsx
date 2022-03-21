import React from "react";
import "../styles/homepage.css";
import {
  Navbar,
  Header,
  Middle1,
  Middle2,
  Middle3,
  Middle4,
  Footer,
} from "../components";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Middle1 />
      <Middle2 />
      <Middle3 />
      <Middle4 />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
