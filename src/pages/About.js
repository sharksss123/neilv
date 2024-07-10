import React, { useState } from "react";
import "./About.css"; // Make sure to define your styles in About.css
import Navbar from "./Navbar";
import myImage from "./img/file.png"; // Adjust the import path based on your project structure

const About = () => {
  const [clicked, setClicked] = useState(false);

  const handleImageClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <Navbar />
      <div id="about-info" className="bg-dark">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5 text-white">
                <b>About</b>
              </h1>
            </div>
          </div>s
          {/* Decorative elements */}
          <div className="snowflakes">
            {/* Adjust the number and positioning of elements as needed */}
            {[...Array(10)].map((_, index) => (
              <div className="snowflake" key={index}></div>
            ))}
          </div>
        </div>
      </div>

      

      <div id="about">
        <div className="container">
          <div className="card shadow mt-5 p-5 mb-5 border-black">
            <div className="row">
              <div className="col-lg-4 d-flex align-items-center justify-content-center">
                {/* Centering image using flexbox */}
                <img
                  src={myImage}
                 
                  className={`img-fluid ${clicked ? "clicked" : ""}`}
                  onClick={handleImageClick}
                />
              </div>
              <div className="col-lg-8">
              <div className="card box shadow mb-3 p-3 borde-pink">
                  <h2 className="text-dark"><b>About Me</b></h2>
                  <p className="text-dark">
                    <b>Name:</b>Neil O.Villanueva
                    <br></br>
                    <b>Email:</b>Villanuevan3171@gmail.com
                    <br></br>
                    <b>Birthdate:</b>November 07,2000
                    <br></br>
                    <b>Birthplace:</b>Kabankalan city Negros Island
                    <br></br>
                    <b>Age:</b>23 Years Old
                    <br></br>
                    <b>Phone No.:</b>0970473951
                    <br></br>
                    <b>Religion:</b>Roman Catholic
                    <br></br>
                    <b>Nationality:</b>Filipino
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};


export default About;
