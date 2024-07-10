import React from "react";
import "./Experience.css";
import Navbar from "./Navbar";
import PC2Image from "./img/cctv.jpg";
import PC1Image from "./img/mother.jpg";
import PC3Image from "./img/mf.jpg";

const Experience = () => {
  return (
    <>
      <Navbar />
      <div id="experience-info" className="ontoy">
        <div className="container-fluid mt-5 pt-5">
          <div className="row">
            <div className="col">
               {/* Decorative elements */}
          <div className="snowflakes">
            {/* Adjust the number and positioning of elements as needed */}
            {[...Array(10)].map((_, index) => (
              <div className="snowflake" key={index}></div>
            ))}
          </div>
        
              <h1 className="fw-bold display-1 text-center mt-2 pt-2">
                Experiences
              </h1>
              <div className="exp">
                <div className="container">
                  <hr className="bg-white"/>
                  <div className="row mb-5">
                    <div className="col-12 text-center">
                      <h3 className="bg-white text-black">MF COMPUTER SOLUSTION</h3>
                    </div>
                    <hr/>
                    <div className="col-lg-4 mb-4">
                      <div className="card shadow">
                        <img className="card-img-top exp-image" src={PC1Image} alt="Setup Mother Board" />
                        <div className="card-body text-center">
                          <h4 className="card-title exp-title">Setup Mother Board</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                      <div className="card shadow">
                        <img className="card-img-top exp-image" src={PC2Image} alt="Installed CCTV" />
                        <div className="card-body text-center">
                          <h4 className="card-title exp-title">Installed CCTV</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                      <div className="card shadow">
                        <img className="card-img-top exp-image" src={PC3Image} alt="Networking" />
                        <div className="card-body text-center">
                          <h4 className="card-title exp-title">Networking</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
