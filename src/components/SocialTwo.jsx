import React from "react";

const socialList = [
  {
    name: "FB.",
    link: "https://www.facebook.com/",
  },
  {
    name: "DR.",
    link: "https://dribbble.com/",
  },
  {
    name: "BE.",
    link: "https://www.behance.net/",
  },
  {
    name: "TW.",
    link: "https://twitter.com/",
  },
];

const SocialTwo = () => {
  return (
    <ul>
      {socialList.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <span className="first">{val.name}</span>
            <span className="second">{val.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialTwo;
