import React from "react";
import Skills from "../skills/SkillsAnimation";
import Social from "../Social";

const AboutTyper = () => {
  return (
    <>
      <div className="about_inner">
        <div className="left">
          <img src="img/thumbs/1-1.jpg" alt="" />
          <div
            className="image"
            data-aos="fade-right"
            data-aos-duration="1200"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/about/6.jpg"
              })`,
            }}
          ></div>
        </div>
        <div
          className="right"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="50"
        >
          <div className="short">
            <h3>John Smith</h3>
            <h5>
              A Lead <span className="theme-color"> Photographer </span>
              based in <span className="theme-color">America</span>
            </h5>
            <p>
              I design and develop services for customers specializing creating
              stylish, modern websites, web services and online stores. My
              passion is to design digital user experiences through meaningful
              interactions. Check out my Portfolio
            </p>
            <div className="about_social">
              <Social />
            </div>
          </div>
          <div className="extra">
            <h3 className="title">Personal Info</h3>
            <div className="list">
              <ul>
                <li>
                  <p>
                    <span>Name :</span> John Smith
                  </p>
                </li>
                <li>
                  <p>
                    <span>Address :</span> H-400 - Path2UK
                  </p>
                </li>
                <li>
                  <p>
                    <span>Age :</span> 21 Years
                  </p>
                </li>
                <li>
                  <p>
                    <span>Phone :</span> +12345667
                  </p>
                </li>
                <li>
                  <p>
                    <span>Nationality :</span> USA
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email :</span> yourmail@gmail.com
                  </p>
                </li>
                <li>
                  <p>
                    <span>Freelance :</span> Available
                  </p>
                </li>
                <li>
                  <p>
                    <span>Languages :</span> French, English
                  </p>
                </li>
              </ul>
            </div>
            {/* End list */}
          </div>
        </div>
      </div>
      <Skills />
    </>
  );
};

export default AboutTyper;
