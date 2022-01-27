import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ServiceAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <div className="service_list">
      <ul>
        <li>
          <div
            className="list_inner"
            onClick={toggleModalOne}
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <img className="svg" src="img/svg/1.svg" alt="" />
            <div className="service_title">
              <h3>Web Development</h3>
            </div>
            <div className="learn_more">
              Learn More<span></span>
            </div>
          </div>

          {/* Start Web Development */}
          <Modal
            isOpen={isOpen}
            onRequestClose={toggleModalOne}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="beny_tm_modalbox_service">
              <button className="close-modal" onClick={toggleModalOne}>
                <img src="/img/svg/cancel.svg" alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="popup_informations">
                    <div className="image">
                      <img src="img/service/web-development.jpg" alt="" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${
                            process.env.PUBLIC_URL +
                            "img/service/web-development.jpg"
                          })`,
                        }}
                      ></div>
                    </div>
                    <div className="description">
                      <h3>Web Development</h3>
                      <p>
                        Invest in yourself or your business by creating a
                        website. This is the first step in your path to
                        digitalization. New generations make decisions based on
                        that they see in the internet (social media, comerical
                        websites, blogs, etc.), with my help we can make you
                        more visible in order to compete with local, national
                        and international companies.
                      </p>
                      <h3>Why a website?</h3>
                      <p>
                        In today's economy, owners of all sizes of businesses
                        are looking for options to cut corners in their budgets
                        and save money. However, cutting corners or cost on
                        website design is a grave mistake.
                      </p>
                      <div className="in_list">
                        <div class="in_list">
                          <ul>
                            <li>
                              <p>Credibility to your business</p>
                            </li>
                            <li>
                              <p>People will search for you online</p>
                            </li>
                            <li>
                              <p>Build your Brand's Name</p>
                            </li>
                            <li>
                              <p>Increate the scope of your market</p>
                            </li>
                            <li>
                              <p>Website open 24/7</p>
                            </li>
                            <li>
                              <p>Your competitors have a website</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* <p>
                        Streets empty that are usually busy are remarkable and
                        can evoke the sense of historical pictures from before
                        the invention of the motorcar. Other things that are
                        different at the moment will be queues to get into
                        stores and the lines marked out on the floor to show how
                        far apart we should be.
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal Motion Graphy */}
        </li>
        <li>
          <div
            className="list_inner"
            onClick={toggleModalTwo}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <img className="svg" src="img/svg/2.svg" alt="" />
            <div className="service_title">
              <h3>Branding &amp; Design</h3>
            </div>
            <div className="learn_more">
              Learn More<span></span>
            </div>
          </div>

          {/* Start Modal Branding & Design */}
          <Modal
            isOpen={isOpen2}
            onRequestClose={toggleModalTwo}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="beny_tm_modalbox_service">
              <button className="close-modal" onClick={toggleModalTwo}>
                <img src="/img/svg/cancel.svg" alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="popup_informations">
                    <div className="image">
                      <img src="img/service/branding.jpg" alt="" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${
                            process.env.PUBLIC_URL + "img/service/branding.jpg"
                          })`,
                        }}
                      ></div>
                    </div>
                    <div className="description">
                      <h3>Branding &amp; Design</h3>
                      <p>
                        A fundamental piece in the path of a growing business is
                        branding. Branding is the way you want your customers to
                        know you, investing time and money in this can change
                        the course of your business. Colors, shapes and styles
                        that represent your brand help your customers to
                        remember you and although they seem simple it is
                        something that should not be taken lightly.
                      </p>
                      <p>
                        Allow me to help you in this important part of your
                        business, to be able to create in your clients and
                        future clients an image that you are proud of. In this
                        new digital age, the new generations take into account
                        each of these concepts to decide with whom they want to
                        spend their money.
                      </p>
                      <h3>What Is Branding?</h3>
                      <p>
                        Branding is the process of giving a meaning to specific
                        organization, company, products or services by creating
                        and shaping a brand in consumers’ minds. It is a
                        strategy designed by organizations to help people to
                        quickly identify and experience their brand, and give
                        them a reason to choose their products over the
                        competition’s, by clarifying what this particular brand
                        is and is not.
                      </p>
                      <div className="in_list">
                        <ul>
                          <li>
                            <p>Email is a crucial channel in any marketing.</p>
                          </li>
                          <li>
                            <p>Curious what to say? How to say it?</p>
                          </li>
                          <li>
                            <p>
                              Organize your marketing campaigns so that they are
                              as effective as possible
                            </p>
                          </li>
                          <li>
                            <p>
                              Your customers will know what they can expect from
                              you through your marketing
                            </p>
                          </li>
                        </ul>
                      </div>
                      <p>
                        The most important thing is to start, large companies
                        like McDonald's have evolved their marketing strategies
                        over the years but they would not have been able to get
                        there if they had not started at the right time. My
                        advice will always be "Start" although it may not seem
                        like much now, it will be later.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal Branding & Design */}
        </li>

        <li>
          <div
            className="list_inner"
            onClick={toggleModalThree}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <img className="svg" src="img/svg/3.svg" alt="" />
            <div className="service_title">
              <h3>Mobile App Design</h3>
            </div>
            <div className="learn_more">
              Learn More<span></span>
            </div>
          </div>

          {/* Start Modal Mobile App Design */}
          <Modal
            isOpen={isOpen3}
            onRequestClose={toggleModalThree}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="beny_tm_modalbox_service">
              <button className="close-modal" onClick={toggleModalThree}>
                <img src="/img/svg/cancel.svg" alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="popup_informations">
                    <div className="image">
                      <img src="img/service/mobile.jpg" alt="" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${
                            process.env.PUBLIC_URL + "img/service/mobile.jpg"
                          })`,
                        }}
                      ></div>
                    </div>
                    <div className="description">
                      <h3>Mobile Apps</h3>
                      <p>
                        In recent years, apps have developed an important place
                        in our lives, because they make our lives easier.
                        Whether your app is for the public or for internal use
                        in your business, I can help you develop logic in an app
                        that can make the sale of products and services more
                        efficient or improve the image of your business.
                      </p>
                      <p>
                        Have you ever thought that certain routines in your
                        business would be better through an app? Possibly a
                        clock in and clock out system, maybe it's client
                        registration, or appointment scheduling in a simple way.
                        Whatever your problem, we can find a solution through an
                        application that does that tedious work, something
                        automatic where you can receive updates in real time.
                      </p>
                      <h3>Why a mobile app?</h3>
                      <p>
                        Companies such as amazon, walmart, ebay, among others,
                        have seen an increase in sales through their platforms
                        for mobile devices, due to the convenience of the user
                        by not having to have a desktop computer or laptop at
                        hand. Being that the cell phone is something that most
                        of us have, we must take advantage of this opportunity
                        to improve our sales in an easy and simple way for our
                        customers.
                      </p>
                      <div className="in_list">
                        <ul>
                          <li>
                            <p>Convenient</p>
                          </li>
                          <li>
                            <p>Automate processes</p>
                          </li>
                          <li>
                            <p>Real time information</p>
                          </li>
                          <li>
                            <p>Within everyone's reach</p>
                          </li>
                        </ul>
                      </div>
                      <p>
                        I understand that not all companies have the need for an
                        app today, so contact me first to find out if there is
                        any process that can be more efficient through this tool
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal Mobile App Design*/}
        </li>

        <li>
          <div
            className="list_inner"
            onClick={toggleModalFour}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <img className="svg" src="img/svg/4.svg" alt="" />
            <div className="service_title">
              <h3>Ui/Ux Consultancy</h3>
            </div>
            <div className="learn_more">
              Learn More<span></span>
            </div>
          </div>

          {/* Start Modal Modal Ui/Ux Consultancy */}
          <Modal
            isOpen={isOpen4}
            onRequestClose={toggleModalFour}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="beny_tm_modalbox_service">
              <button className="close-modal" onClick={toggleModalFour}>
                <img src="/img/svg/cancel.svg" alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="popup_informations">
                    <div className="image">
                      <img src="img/service/uiux.jpg" alt="" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${
                            process.env.PUBLIC_URL + "img/service/uiux.jpg"
                          })`,
                        }}
                      ></div>
                    </div>
                    <div className="description">
                      <h3>Ui/Ux Consultancy</h3>
                      <p>
                        Improving the visual and logical experience on our web
                        pages and mobile apps will help our customers to get a
                        good image of our company, which will help us achieve
                        more regular customers and consequently help our sales.
                      </p>
                      <p>
                        Studies show that customers having a bad user experience
                        on our website makes our chances of that customer coming
                        back to almost zero. Customers will prefer to pay more
                        on another website than have another bad experience on
                        our website, even if our prices are more accessible.
                      </p>
                      <h3>What Is UI/UX?</h3>
                      <p>
                        UI stands for "User Interface" and UX stands for "User
                        Experience"
                      </p>
                      <div className="in_list">
                        <ul>
                          <li>
                            <p>Increase customer satisfaction</p>
                          </li>
                          <li>
                            <p>
                              Helps customer find what their are looking for
                            </p>
                          </li>
                          <li>
                            <p>Builds trust in customer</p>
                          </li>
                          <li>
                            <p>Helps the sale of products and services</p>
                          </li>
                        </ul>
                      </div>
                      <p>
                        These two important design principles, if used well,
                        will help our clients understand the message we want to
                        convey in the easiest way possible, whether it is an
                        organization for the needy, a clothing store or a
                        mechanical workshop, if we manage to make the experience
                        of our clients a good one, we have the possibility of
                        retaining as many clients as possible
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal Ui/Ux Consultancy*/}
        </li>
      </ul>
    </div>
  );
};

export default ServiceAnimation;
