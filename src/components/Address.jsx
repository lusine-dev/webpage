import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Address Point</span> Tigran Mets Ave 24,
        Yerevan, Republic Of Armenia.
      </p>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">mail me</span>{" "}
        <a href="mailto:lusineam.dev@gmail.com">lusineam.dev@gmail.com </a>
      </p>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">call me</span>{" "}
        <a href="Tel: +374 77 53 72 53">+374 77 537253</a>
      </p>{" "}
    </>
  );
};

export default Address;
