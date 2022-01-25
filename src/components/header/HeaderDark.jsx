import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiUser,
  FiSettings,
  FiGrid,
  FiCast,
  FiPhoneOutgoing,
} from "react-icons/fi";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      {/* TOPBAR  */}
      <div className={navbar ? "beny_tm_topbar animate" : "beny_tm_topbar"}>
        <div className="in">
          <div className="topbar_inner">
            <div className="logo">
              <Link to="/">
                {/* <img src="img/logo/light.png" alt="brand" /> */}
              </Link>
            </div>
            <div className="menu">
              <Scrollspy
                className="anchor_nav"
                items={[
                  "home",
                  "about",
                  "services",
                  // "portfolio",
                  // "news",
                  "contact",
                ]}
                currentClassName="current"
                offset={-88}
              >
                <li className="current">
                  <a href="#home">
                    <span className="first">Home</span>
                    <span className="second">Home</span>
                  </a>
                </li>
                <li>
                  <a href="#about">
                    <span className="first">About</span>
                    <span className="second">About</span>
                  </a>
                </li>
                <li>
                  <a href="#service">
                    <span className="first">Services</span>
                    <span className="second">Services</span>
                  </a>
                </li>
                {/* <li>
                  <a href="#portfolio">
                    <span className="first">Portfolio</span>
                    <span className="second">Portfolio</span>
                  </a>
                </li> */}
                {/* <li>
                  <a href="#news">
                    <span className="first">News</span>
                    <span className="second">News</span>
                  </a>
                </li> */}
                <li>
                  <a href="#contact">
                    <span className="first">Contact</span>
                    <span className="second">Contact</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://calendly.com/marteiduel"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <span className="wrapper">
                      <span className="first">Schedule</span>
                      <span className="second">Schedule</span>
                    </span>
                  </a>
                </li>
              </Scrollspy>
            </div>
          </div>
        </div>
      </div>
      {/* /TOPBAR */}

      <div className="mobile-menu-wrapper">
        <Scrollspy
          className="mobile_menu-icon"
          items={["home", "about", "service", "portfolio", "news", "contact"]}
          currentClassName="current"
          offset={-65}
        >
          <li>
            <a href="#home">
              <FiHome />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#about">
              <FiUser />
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#service">
              <FiSettings />
              <span>Serivce</span>
            </a>
          </li>
          {/* <li>
            <a href="#portfolio">
              <FiGrid />
              <span>Portfolio</span>
            </a>
          </li>
          <li>
            <a href="#news">
              <FiCast />
              <span>News</span>
            </a>
          </li> */}
          <li>
            <a href="#contact">
              <FiPhoneOutgoing />
              <span>Contact</span>
            </a>
          </li>
        </Scrollspy>
      </div>
      {/* End mobile-menu */}
    </>
  );
};

export default Header;
