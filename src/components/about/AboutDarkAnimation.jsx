import React from "react";
import Skills from "../skills/SkillsAnimation";

const AboutDarkAnimation = () => {
  return (
    <>
      <div className="about_inner">
        <div className="left">
          <img src="img/demo/demo1.jpg" alt="" />
          <div
            className="image"
            data-aos="fade-right"
            data-aos-duration="1200"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/demo/demo1.jpg"
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
            <h3>Hi my name is Martei Duel</h3>
            <h5>
              A Lead{" "}
              <span className="theme-color">
                Software developer and Marketing Expert{" "}
              </span>
              based in <span className="theme-color">Utah</span>
            </h5>
            <p>
            I design and develop services for customers specializing in creating
              stylish and modern websites, web services, and online stores. My
              passion is to design digital user experiences. Check out my Portfolio!
            </p>
          </div>
          <div className="extra">
            <h3 className="title">Personal Info</h3>
            <div className="list">
              <ul>
                <li>
                  <p>
                    <span>Name :</span> Martei Duel
                  </p>
                </li>
                <li>
                  <p>
                    <span>City :</span> Orem, Utah
                  </p>
                </li>
                <li>
                  <p>
                    <span>Age :</span> 25 Years
                  </p>
                </li>
                <li>
                  <p>
                    <span>Phone :</span> (801) 856-4685
                  </p>
                </li>
                <li>
                  <p>
                    <span>Nationality :</span> USA-Mexico
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email :</span> marteiwgc@gmail.com
                  </p>
                </li>
                <li>
                  <p>
                    <span>Freelance :</span> Available
                  </p>
                </li>
                <li>
                  <p>
                    <span>Languages :</span> English, Spanish
                  </p>
                </li>
              </ul>
            </div>
            {/* End list */}
            <div className="beny_tm_button color-outline">
              <a href="img/demo/Martei_Duel_Resume.pdf" download>
                <span className="wrapper">
                  <span className="first">Download CV</span>
                  <span className="second">Download CV</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Skills />
    </>
  );
};

export default AboutDarkAnimation;
