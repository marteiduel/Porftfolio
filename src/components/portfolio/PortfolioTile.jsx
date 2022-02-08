import React from "react";

const PortfolioTile = (props) => {
  console.log("aquiestoy en tiles", props);
  return (
    <div className="tile">
      <a target="_blank" rel="noopener noreferrer" href={props.website}>
        <img className="tile-image" alt="imagen" src={props.imageSource} />
        <p className="title-link">{props.title}</p>
      </a>
    </div>
  );
};

export default PortfolioTile;
