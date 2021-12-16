import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const educationContent = [
  {
    passingYear: "2021",
    degree: "Cyber Security ",
    instituteName: "Ensign College, Salt Lake City, UT",
  },
  {
    passingYear: "2019",
    degree: "Full Stack Software Developer",
    instituteName: "Bottega University",
  },
  {
    passingYear: "2016",
    degree: "Maketing",
    instituteName: "UVM, Mexicali, Baja California",
  },
];

const skillsContent = [
  {
    name: "Web Design",
    skillPercent: "90",
  },
  {
    name: "Mobile App",
    skillPercent: "80",
  },
  {
    name: "Illustrator",
    skillPercent: "60",
  },
  {
    name: "Photoshop",
    skillPercent: "70",
  },
  {
    name: "Motion Graphy",
    skillPercent: "80",
  },
];

const awardContent = [
  {
    awardYear: "2020",
    degree: "Best Developer",
    instituteName: "University Of Melbourne, NA",
  },
  {
    awardYear: "2019",
    degree: "Best Writter",
    instituteName: "Online Typodev Soluation Ltd.",
  },
  {
    awardYear: "2007",
    degree: "Best Freelancer ",
    instituteName: "Fiver & Upwork Level 2 & Top Rated",
  },
];
const experienceContent = [
  {
    designation: "React (Front End) Software Developer",
    jobType: "Full Time",
    year: "Present",
    compnayName: "Maven Software Development",
    descriptions:
      "Writing application interface codes using JavaScript following React.JS lifecycle. Monitoring and improving front-end performance. Troubleshooting interface software and debugging application codes.",
    animationDealy: "",
  },
  {
    designation: "Full Stack Developer",
    jobType: "Full Time",
    year: "Present",
    compnayName: "MTYTEC",
    descriptions:
      "I help small and medium businesses start their path to digitalization, to able to compete in this digital era, though professional websites and marketing campains",
    animationDealy: "200",
  },
  {
    designation: "Sales Manager",
    jobType: "Full Time",
    year: "2013 - 2016",
    compnayName: "World Games and Computers",
    descriptions:
      `Increased sales by 30%. Launched the company’s market campaign. Develop community relationships with local business managers and owners.
      Manage social media studio platform with daily posts and engaging information.`,
    animationDealy: "",
  },
  {
    designation: "IT Technitian",
    jobType: "Full Time",
    year: "2013 - 2014",
    compnayName: "World Games and Computers",
    descriptions:
      "Fix computers (Software & Hardware). Fix smartphones. Fix videogames.",
    animationDealy: "200",
  },
];

const SkillsAnimation = () => {
  return (
    <>
      <div className="beny_tm_resume">
        <div className="main_title">
          <h3>My Experience</h3>
        </div>
        <Tabs>
          <TabList className="tab_list">
            <Tab> Education & Skills</Tab>
            <Tab>Experience</Tab>
          </TabList>
          <TabPanel>
            <div className="resume_inner">
              <div className="row">
                <div
                  className="col-4"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  <div className="education ">
                    <div className="edu_list">
                      <h4>
                        <label>Education</label>
                      </h4>
                      <ul>
                        {educationContent.map((val, i) => (
                          <li key={i}>
                            <span className="year">{val.passingYear}</span>
                            <p>
                              <span>{val.degree}</span> - {val.instituteName}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End .col-4 */}

                <div
                  className="col-4"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <div className="skills ">
                    <h4>
                      <label>Skills</label>
                    </h4>
                    <div className="beny_progress">
                      {skillsContent.map((val, i) => (
                        <div className="progress_inner" key={i}>
                          <span>
                            <span className="label">{val.name}</span>
                            <span className="number">{val.skillPercent}%</span>
                          </span>
                          <div className="background">
                            <div className="bar open">
                              <div
                                className="bar_in"
                                style={{ width: val.skillPercent + "%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* End .col-5 */}

                <div
                  className="col-4"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <div className="education ">
                    <div className="edu_list">
                      <h4>
                        <label>Awards</label>
                      </h4>
                      <ul>
                        {awardContent.map((val, i) => (
                          <li key={i}>
                            <span className="year">{val.awardYear}</span>
                            <p>
                              <span>{val.degree}</span> - {val.instituteName}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End .col-4 */}
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="row">
              {experienceContent.map((val, i) => (
                <div
                  className="col-6"
                  key={i}
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay={val.animationDealy}
                >
                  <div className="resume-box-01">
                    <h5>{val.designation}</h5>
                    <h6>{val.jobType}</h6>
                    <span>{val.year}</span>
                    <div className="hr"></div>
                    <h4>
                      <label>{val.compnayName}</label>
                    </h4>
                    <p>{val.descriptions}</p>
                  </div>
                </div>
                //  End .col
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default SkillsAnimation;
