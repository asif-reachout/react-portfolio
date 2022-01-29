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
            <button className="primary-button font-bold ">Get Started</button>
          </div>
        </div>
      </div>
      <Carousel />
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#001220" fillOpacity="10" d="M0,128L18.5,117.3C36.9,107,74,85,111,69.3C147.7,53,185,43,222,69.3C258.5,96,295,160,332,170.7C369.2,181,406,139,443,112C480,85,517,75,554,85.3C590.8,96,628,128,665,149.3C701.5,171,738,181,775,170.7C812.3,160,849,128,886,117.3C923.1,107,960,117,997,154.7C1033.8,192,1071,256,1108,240C1144.6,224,1182,128,1218,96C1255.4,64,1292,96,1329,101.3C1366.2,107,1403,85,1422,74.7L1440,64L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"></path></svg>
      </div>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-md-4">
            <div className="n-box2 p-5 font-bold">
              <h1>Yes you are right...</h1>
              <br />
              <p>i am a javascript Buff...</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center pt-5">
          <div className="col-md-4">
            <div>
              <img src="./jsbuff.svg" alt="jsthumbnil" height={200} className="w-100" />
            </div>
          </div>
        </div>
        <div className="row justify-content-end pt-5">
          <div className="col-md-4">
            <div className="n-box2 p-5 font-bold">
              <p>
                According to Stack Overflow's 2020 Developer Survey, JavaScript
                currently stands as the most commonly-used language in the world
                (69.7%), followed by HTML/CSS (62.4%), SQL (56.9%), Python
                (41.6%) and Java (38.4%). It is also the most sought-out
                programming language by hiring managers in the Americas (PDF,
                2.4 MB).
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container devstack my-5 n-box2 py-5">
        <div className="text-center">
          <h3 className="font-bold text-center">My Development Stack</h3>
          <hr />
          <img src="./developer.svg" alt="developer" height={200} width={200} />
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="font-bold">
              <h3 className="font-bold">Front End </h3>
              <hr />
              <p>HTML/CSS</p>
              <p>Javascript</p>
              <p>React JS</p>
              <p>Redux</p>
              <p>Angular</p>

            </div>
          </div>

          <div className="col-md-4">
            <div className="font-bold text-center">
              <h3 className="font-bold">UI/Styling</h3>
              <hr />
              <p>Tailwind CSS</p>
              <p>Material UI</p>
              <p>Bootstrap</p>
              <p>AntDesign</p>
              <p>Semantic UI</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="font-bold text-end">
              <h3 className="font-bold">Backend/DB</h3>
              <hr />
              <p>Node JS</p>
              <p>Express</p>
              <p>PHP</p>
              <p>SQL</p>
              <p>Mongo DB</p>

            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-center font-bold">Who is Asif</h3>
        <div className="who-is-asif flex-with-center" style={{ backgroundImage: `url('blob.svg')` }}>
          <div>
            <h3>Hi, AOA</h3>
            <hr />
            <p>
              <pre>{JSON.stringify({
                name: 'Asif Ali',
                from: 'Pakistan',
                age: null,
                gender: 'Male',


              }, null, 2)}</pre>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
