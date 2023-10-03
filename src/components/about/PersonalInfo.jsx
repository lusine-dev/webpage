import React from "react";

const personalInfoContent = [
  { meta: "full name", metaInfo: "Lusine Amiraghyan" },
  { meta: "Age", metaInfo: "27 Years" },
  { meta: "Nationality", metaInfo: "Armenian" },
  { meta: "Address", metaInfo: "Yerevan, Tigran Mets ave" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Email", metaInfo: "lusineam.dev@gmail.com" },
  { meta: "phone", metaInfo: "+374 77 53 72 53" },
  { meta: "langages", metaInfo: "English, Russian, Armenian" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
