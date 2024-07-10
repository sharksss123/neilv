import React from "react";
import "./Portfolio.css";
import Navbar from "./Navbar";
import calcuImage2 from "./img/Calcu (2).jpeg";
import ontoy1Image from "./img/riact.jpeg";
import ontoy2Image from "./img/Capture1.jpg";
import jao5Image from "./img/cattle.png";

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <div id="experience-info-1">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                <b>Portfolio</b>
              </h1>
            </div>
          </div>
        </div>
      </div>
       {/* Decorative elements */}
       <div className="snowflakes">
            {/* Adjust the number and positioning of elements as needed */}
            {[...Array(10)].map((_, index) => (
              <div className="snowflake" key={index}></div>
            ))}
          </div>

    

      <div id="portfolio-info" className="ontoy">
        <div className="container mt-5">
          <div className="row mt-5">        
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card shadow text-center p-4">
                <img className="portfolio-image" src={calcuImage2} alt="Calculator" />
                <h4 className="mt-3">Calculator</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card shadow text-center p-4">
                <img className="portfolio-image" src={ontoy2Image} alt="System Integrations" />
                <h4 className="mt-3">System Integrations</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card shadow text-center p-4">
                <img className="portfolio-image" src={jao5Image} alt="Capstone Project" />
                <h4 className="mt-3">Capstone Project</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card shadow text-center p-4">
                <img className="portfolio-image" src={ontoy1Image} alt="My React Js" />
                <h4 className="mt-3">My React Js</h4>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </>
  );
};

export default Portfolio;
