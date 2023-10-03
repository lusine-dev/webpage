import React from "react";
import CloseImg from "../../../assets/img/cancel.svg";
import PortfolioData from "../portfolioData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Modal = ({ modalId, setGetModal }) => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };

  return (
    <div className="modal_portfolio">
      <div className="modal__outside" onClick={() => setGetModal(false)}></div>
      <div className="modal__content">
        {PortfolioData.filter((item) => item.id === modalId).map((item) => {
          return (
            <div key={item.id} data-aos="fade">
              <h2 className="heading mb-2">{item.type}</h2>
              <div className="modal__details">
                {item.modalDetails.map((details, i) => {
                  return (
                    <div key={i} className="row open-sans-font">
                      <div className="col-12 col-sm-6 mb-2">
                        <i className="fa fa-file-text-o pr-2"></i>
                        Project:{" "}
                        <span className="ft-wt-600 uppercase">
                          {details.project}
                        </span>
                      </div>
                      <div className="col-12 col-sm-6 mb-2">
                        <i className="fa fa-user-o pr-2"></i>
                        Client :{" "}
                        <span className="ft-wt-600 uppercase">
                          {details.client}
                        </span>
                      </div>
                      <div className="col-12 col-sm-6 mb-2">
                        <i className="fa fa-code pr-2"></i>
                        Language :{" "}
                        <span className="ft-wt-600 uppercase">
                          {details.language}
                        </span>
                      </div>
                      <div className="col-12 col-sm-6 mb-2">
                        <i className="fa fa-external-link pr-2"></i>
                        Preview :{" "}
                        {details.link.length ? (
                          <a
                            className="preview-link"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            href={details.link}
                          >
                            {details.preview}
                          </a>
                        ) : (
                          details.preview
                        )}
                      </div>
                      <div className="col-12 col-sm-12 mb-2 ">
                        <i className="fa fa-info pr-2"></i>
                        Details :{" "}
                        <span className="ft-wt-600 uppercase modal__desc">
                          {details.description}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <figure className="modal__img">
                <Slider {...settings}>
                  {item.image.map((img, i) => {
                    return (
                      <div key={i}>
                        <img key={i} src={img} alt="portfolio project" />
                      </div>
                    );
                  })}
                </Slider>
              </figure>
              <button
                className="close-modal"
                onClick={() => setGetModal(false)}
              >
                <img src={CloseImg} alt="portfolio project" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Modal;
