import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const CreativePortfolio = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  return (
    <SimpleReactLightbox>
      <div className="portfolio_list">
        <Tabs>
          <TabList className="creative-portfolio-list">
            <Tab>All</Tab>
            <Tab>Vimeo</Tab>
            <Tab>Youtube</Tab>
            <Tab>Dribbble</Tab>
          </TabList>
          <TabPanel>
            <ul className="gallery_zoom">
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="1gyTUHP6ne8"
                onClose={() => setOpen(false)}
              />
              {/* End Youtube Modal video */}

              <ModalVideo
                channel="vimeo"
                autoplay
                isOpen={isOpen2}
                videoId="100171151"
                onClose={() => setOpen2(false)}
              />
              {/* End Youtube Modal video */}

              <li data-aos="fade-right" data-aos-duration="1200">
                <div className="list_inner video">
                  <a
                    href="https://www.youtube.com/watch?v=1gyTUHP6ne8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="title"
                  >
                    <h3>Aura Dione </h3>
                    <span>Youtube Shoot</span>
                  </a>
                  <img
                    src="img/portfolio/3.jpg"
                    alt="Youtube Shoot"
                    onClick={() => setOpen(true)}
                  />
                </div>
              </li>
              {/* End youtube */}

              <li
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="list_inner video">
                  <a
                    href="https://player.vimeo.com/video/100171151?h=92d8f1bd0a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="title"
                  >
                    <h3>Jupita Rine </h3>
                    <span>Vimeo Shoot</span>
                  </a>
                  <img
                    src="img/portfolio/2.jpg"
                    alt="Vimeo Shoot"
                    onClick={() => setOpen2(true)}
                  />
                </div>
              </li>
              {/* End vimeo */}

              <SRLWrapper>
                <li
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <div className="list_inner">
                    <a
                      className="title"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://dribbble.com/shots/16529339-Beny-Personal-Portfolio-React-Template"
                    >
                      <h3>Ave Simone</h3>
                      <span>Dribbble Shoot</span>
                    </a>

                    <a href="img/portfolio/1.jpg">
                      <img src="img/portfolio/1.jpg" alt="Dribbble Shoot" />
                    </a>
                  </div>
                </li>
                {/* End image popup */}

                <li
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <div className="list_inner">
                    <a
                      className="title"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://dribbble.com/shots/16530034-Tokyo-Personal-Portfolio-React-Template-RTL"
                    >
                      <h3>Kelly Smith</h3>
                      <span>Dribbble Shoot</span>
                    </a>

                    <a href="img/portfolio/4.jpg">
                      <img src="img/portfolio/4.jpg" alt="Dribbble Shoot" />
                    </a>
                  </div>
                </li>
                {/* End image popup */}

                <li
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <div className="list_inner">
                    <a
                      className="title"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://dribbble.com/shots/16529282-Shane-Personal-Portfolio-React-Template"
                    >
                      <h3>Duru Sweet</h3>
                      <span>Dribbble Shoot</span>
                    </a>

                    <a href="img/portfolio/5.jpg">
                      <img src="img/portfolio/5.jpg" alt="Dribbble Shoot" />
                    </a>
                  </div>
                </li>
                {/* End image popup */}

                <li
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="500"
                >
                  <div className="list_inner">
                    <a
                      className="title"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.facebook.com/ibthemes"
                    >
                      <h3>Lisa Kotlins</h3>
                      <span>Facebook Shoot</span>
                    </a>

                    <a href="img/portfolio/6.jpg">
                      <img src="img/portfolio/6.jpg" alt="Facebook Shoot" />
                    </a>
                  </div>
                </li>
                {/* End image popup */}
              </SRLWrapper>
            </ul>
          </TabPanel>
          <TabPanel>
            <ul className="gallery_zoom">
              <ModalVideo
                channel="vimeo"
                autoplay
                isOpen={isOpen2}
                videoId="100171151"
                onClose={() => setOpen2(false)}
              />
              {/* End Youtube Modal video */}

              <li
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="list_inner video">
                  <a
                    href="https://player.vimeo.com/video/100171151?h=92d8f1bd0a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="title"
                  >
                    <h3>Jupita Rine </h3>
                    <span>Vimeo Shoot</span>
                  </a>
                  <img
                    src="img/portfolio/2.jpg"
                    alt="Vimeo Shoot"
                    onClick={() => setOpen2(true)}
                  />
                </div>
              </li>
              {/* End vimeo */}
            </ul>
          </TabPanel>
          <TabPanel>
            <ul className="gallery_zoom">
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="1gyTUHP6ne8"
                onClose={() => setOpen(false)}
              />
              {/* End Youtube Modal video */}

              <li data-aos="fade-right" data-aos-duration="1200">
                <div className="list_inner video">
                  <a
                    href="https://www.youtube.com/watch?v=1gyTUHP6ne8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="title"
                  >
                    <h3>Aura Dione </h3>
                    <span>Youtube Shoot</span>
                  </a>
                  <img
                    src="img/portfolio/3.jpg"
                    alt="Youtube Shoot"
                    onClick={() => setOpen(true)}
                  />
                </div>
              </li>
              {/* End youtube */}
            </ul>
          </TabPanel>
          <TabPanel>
            <ul className="gallery_zoom">
              <SRLWrapper>
                <li data-aos="fade-right" data-aos-duration="1200">
                  <div className="list_inner">
                    <a
                      className="title"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://dribbble.com/shots/16529339-Beny-Personal-Portfolio-React-Template"
                    >
                      <h3>Ave Simone</h3>
                      <span>Dribbble Shoot</span>
                    </a>

                    <a href="img/portfolio/1.jpg">
                      <img src="img/portfolio/1.jpg" alt="Dribbble Shoot" />
                    </a>
                  </div>
                </li>
                {/* End image popup */}

                <li
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <div className="list_inner">
                    <a
                      className="title"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://dribbble.com/shots/16530034-Tokyo-Personal-Portfolio-React-Template-RTL"
                    >
                      <h3>Kelly Smith</h3>
                      <span>Dribbble Shoot</span>
                    </a>

                    <a href="img/portfolio/4.jpg">
                      <img src="img/portfolio/4.jpg" alt="Dribbble Shoot" />
                    </a>
                  </div>
                </li>
                {/* End image popup */}

                <li
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <div className="list_inner">
                    <a
                      className="title"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://dribbble.com/shots/16529282-Shane-Personal-Portfolio-React-Template"
                    >
                      <h3>Duru Sweet</h3>
                      <span>Dribbble Shoot</span>
                    </a>

                    <a href="img/portfolio/5.jpg">
                      <img src="img/portfolio/5.jpg" alt="Dribbble Shoot" />
                    </a>
                  </div>
                </li>
                {/* End image popup */}
              </SRLWrapper>
            </ul>
          </TabPanel>
        </Tabs>
        {/* END TABLIST */}
      </div>
    </SimpleReactLightbox>
  );
};

export default CreativePortfolio;
