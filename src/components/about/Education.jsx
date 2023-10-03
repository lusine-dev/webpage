import React from "react";

const educationContent = [
  {
    year: "2014 - 2018",
    institute: "Yerevan State University",
    degree: "bachelor",
    details: "Majoring in Applied Mathematics and Informatics",
  },
  {
    year: "2011 - 2014",
    institute: "High School of Noyemberyan",
    degree: "",
    details: "Math and Physics Orientation",
  },
  {
    year: "2003 - 2011",
    institute: "N2 School of Noyemberyan",
    degree: "",
    details: "",
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-graduation-cap"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.institute}
            <span
              className={`${val.degree.length ? "place" : ""}  open-sans-font`}
            >
              {val.degree}
            </span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
