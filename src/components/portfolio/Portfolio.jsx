import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PortfolioData from "./portfolioData";
import Modal from "./modal/Modal";

const Portfolio = () => {
  const [getModal, setGetModal] = useState(false);
  const [modalId, setModalId] = useState(1);

  const handleModal = (id) => {
    setGetModal(true);
    setModalId(id);
  };

  return (
    <>
      <div className="portfolio-main">
        <Tabs>
          <TabList className="portfolio-tab-list" data-aos="fade-up">
            <Tab>All</Tab>
            <Tab>Real Projects</Tab>
            <Tab>For Practice</Tab>
          </TabList>

          <div className="container">
            <TabPanel>
              <div className="tab-container">
                {PortfolioData.map((item) => {
                  const { id, title, image, delayAnimation } = item;
                  const img = image[0];
                  return (
                    <div
                      key={id}
                      data-aos="fade-right"
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className="tab-content"
                        onClick={() => handleModal(id)}
                      >
                        <img src={img} alt="portfolio project" />
                        <h3>
                          <span className="conent-title">
                            <i
                              className="fa fa-arrows-alt fa-2x"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </h3>
                      </div>
                      <h2>{title}</h2>
                    </div>
                  );
                })}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="tab-container">
                {PortfolioData.filter((item) => item.tag.includes("real")).map(
                  (item) => {
                    const { id, title, image, delayAnimation } = item;
                    const img = image[0];
                    return (
                      <div
                        key={id}
                        data-aos="fade-right"
                        data-aos-delay={delayAnimation}
                      >
                        <div
                          className="tab-content"
                          onClick={() => handleModal(id)}
                        >
                          <img src={img} alt="project beigene" />
                          <h3>
                            <span className="conent-title">
                              <i
                                className="fa fa-arrows-alt fa-2x"
                                aria-hidden="true"
                              ></i>
                            </span>
                          </h3>
                        </div>
                        <h2>{title}</h2>
                      </div>
                    );
                  }
                )}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="tab-container">
                {PortfolioData.filter((item) =>
                  item.tag.includes("practice")
                ).map((item) => {
                  const { id, title, image, delayAnimation } = item;
                  const img = image[0];
                  return (
                    <div
                      key={id}
                      data-aos="fade-right"
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className="tab-content"
                        onClick={() => handleModal(id)}
                      >
                        <img src={img} alt="portfolio project" />
                        <h3>
                          <span className="conent-title">
                            <i
                              className="fa fa-arrows-alt fa-2x"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </h3>
                      </div>
                      <h2>{title}</h2>
                    </div>
                  );
                })}
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
      {getModal && <Modal modalId={modalId} setGetModal={setGetModal} />}{" "}
    </>
  );
};

export default Portfolio;
