import React from "react";
import Carousel from "../components/Carousel";
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Header />
      <div
        className="introduction flex-with-center"
        style={{ backgroundImage: `url('./bg-intro.svg')` }}
      >
        <div>
          <h1>Asif Ali</h1>
          <div className="intro-content d-flex justify-content-between">
            <p>
              Mern Stack <br /> Developer
            </p>
            <button className="primary-button font-bold ">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <Carousel />
    </div>
  );
}

export default Home;
