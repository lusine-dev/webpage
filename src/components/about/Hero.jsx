import React from "react";
import img from "../../assets/img/hero/lusineam.jpg";
import imgMobile from "../../assets/img/hero/lusineam-mob.jpg";

const content = {
  image: img,
  mobileImage: imgMobile,
  titleName: "Hello, I'm Lusine",
  designation: "And I'm Front-End Developer",
  longDescription: `
  Welcome to my webpage! I'm a highly motivated Front-end developer. I am enthusiastic about 
  creating elegant and intuitive user experiences through clean, efficient, and scalable code.
  My passion lies in building software that not only meets user needs but also enhances their 
  lives. Learning new tools and techniques excites me, and I believe it is vital to keep 
  evolving in this ever-changing field. I approach every challenge as an opportunity to learn 
  and grow. I enjoy tackling complex problems, breaking them down, and finding innovative solutions.
   `,
  shortDescription: `
  I started my career as a Front-end, and continued as a Full-stack developer. 
  I consider offers as a Front-End developer. Also I open for a freelance work.
    `,
};

const Hero = () => {
  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + content.image})`,
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <img
              src={content.mobileImage}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="it's me"
            />
            <h1 className="text-uppercase poppins-font">
              {content.titleName}
              <span>{content.designation}</span>
            </h1>
            <p className="open-sans-font">{content.longDescription}</p>
            <p className="open-sans-font">{content.shortDescription}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
