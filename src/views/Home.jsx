import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Index from "../components/about/index";
import Address from "../components/Address";
import Portfolio from "../components/portfolio/Portfolio";
// import Blog from "../components/blog/Blog";
import Contact from "../components/Contact";
import Social from "../components/Social";
import SwitchDark from "../components/switch/SwitchDark";

const menuItem = [
  { icon: "fa-home", menuName: "Home" },
  { icon: "fa-briefcase", menuName: "Portfolio" },
  { icon: "fa-envelope-open", menuName: "Contact" },
  // { icon: "fa-comments", menuName: "Blog" },
];

const Home = () => {
  document.querySelector("body").classList.remove("rtl");

  return (
    <div className="yellow">
      <SwitchDark />
      <Tabs>
        <div className="header">
          <TabList className=" icon-menu  revealator-slideup revealator-once revealator-delay1">
            {menuItem.map((item, i) => (
              <Tab className="icon-box" key={i}>
                <i className={`fa ${item.icon}`}></i>
                <h2>{item.menuName}</h2>
              </Tab>
            ))}
          </TabList>
        </div>
        <div className="tab-panel_list">
          <TabPanel className="home ">
            <div className="about">
              <div data-aos="fade-up" data-aos-duration="1200">
                <Index />
              </div>
            </div>
          </TabPanel>

          <TabPanel className="portfolio professional">
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                my <span>portfolio</span>
              </h1>
              <span className="title-bg">works</span>
            </div>
            <Portfolio />
          </TabPanel>

          <TabPanel className="contact">
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                get in <span>touch</span>
              </h1>
              <span className="title-bg">contact</span>
            </div>
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="row">
                <div className="col-12 col-lg-4">
                  <h3 className="custom-title mb-0 ft-wt-600 pb-3">
                    Suggestion or Questions?
                  </h3>
                  <p className="open-sans-font mb-4">
                    Feel free to get in touch with me. I am always open to
                    discussing new projects, creative ideas or opportunities to
                    be part of your visions.
                  </p>
                  <Address />

                  <Social />
                </div>

                <div className="col-12 col-lg-8">
                  <Contact />
                </div>
              </div>
            </div>
          </TabPanel>

          {/* <TabPanel className="blog"> 
            <div
              className="title-section text-left text-sm-center "
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                my <span>blog</span>
              </h1>
              <span className="title-bg">posts</span>
            </div>
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="row pb-50">
                <Blog />
              </div>
            </div>
          </TabPanel> */}
        </div>
      </Tabs>
    </div>
  );
};

export default Home;
