import React from "react";
import Navbar from "./Navbar";
import "./Home.css";
import myImage from "./img/file.png";
import ibisImage from "./img/github_PNG40.png";
import vscodeImage from "./img/code-stable.png";
import gcbImage from "./img/logo512.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="overlay">
          <div className="container1">
            <div id="home-info">
              <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 image-container">
                    <img src={myImage} alt="Gor" className="home-image" />
                  </div>
                  <div className="col-lg-6">
                    <div className="content">
                      <h2>Welcome!<br />I'm Neil O.Villanueva</h2>
                      <h4>
                        "Building a website is like constructing a digital home; it needs a solid foundation, a welcoming design, and an engaging experience to make visitors feel at home."
                      </h4>
                      <a href="/about" className="btn">Explore More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="info">
      <div id="about-infop" className="bg-white">
        <div className="container-fluid mt-2 mb-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5 text-dark">
                <b>Aplication</b>
              </h1>
            </div>
          </div>
          </div>
          </div>
        <div className="container">
          <div className="row">
            <div className="col-lg mb-3">
              <div className="card p-5 shadow" style={{ border: "2px solid pink" }}>
                <img src={ibisImage} alt="IbisPaintX" className="smaller-image" />
                <h4 className="text-center title"><b>Githud</b></h4>
                <p>A platform for reading and sharing stories across various genres.</p>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow" style={{ border: "2px solid pink" }}>
                <img src={vscodeImage} alt="Visual Studio Code" className="smaller-image" />
                <h4 className="text-center title"><b>Visual Code</b></h4>
                <p>Known for captivating romantic novels with compelling characters.</p>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow" style={{ border: "2px solid pink" }}>
                <img src={gcbImage} alt="Gaming Center Base" className="smaller-image" />
                <h4 className="text-center title"><b>React</b></h4>
                <p>A platform for discovering and reading romance stories.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
