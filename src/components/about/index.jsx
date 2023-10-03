import React from "react";
import Achievements from "./Achievements";
import Hero from "./Hero";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";
import cv from "../../assets/files/lusineamiraghyan's-cv.pdf";

const index = () => {
  return (
    <section className="main-content ">
      <div>
        <div data-aos="fade-up" data-aos-duration="1200">
          <div className="title-section text-left text-sm-center">
            <h1>
              WHAT ABOUT <span>ME ?</span>
            </h1>
            <span className="title-bg">Resume</span>
          </div>
        </div>
      </div>
      <div
        className="container-fluid main-container container-home p-0 "
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="color-block d-none d-lg-block"></div>
        <Hero />
      </div>
      <hr className="separator mt-5 mb-5" />
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-5 col-12">
            <div className="row">
              <div className="col-12">
                <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
                  personal infos
                </h3>
              </div>

              <div className="col-12">
                <PersonalInfo />
              </div>

              <div className="col-12 mt-1">
                <a className="button" href={cv} download>
                  <span className="button-text">Download CV</span>
                  <span className="button-icon fa fa-download"></span>
                </a>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
            <Achievements />
          </div>
        </div>

        <hr className="separator" />
        <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
              Experience <span>&</span> Education
            </h3>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="resume-box">
              <Experience />
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="resume-box">
              <Education />
            </div>
          </div>
        </div>

        <hr className="separator" />

        <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">
              My Skills
            </h3>
          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default index;
