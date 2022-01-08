import React from "react";
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
          <h1>Rehman</h1>
          <div className="intro-content d-flex justify-content-between">
            <p>
              Mern Stack <br /> Developer
            </p>
            <button className="primary-button font-bold w-50">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
