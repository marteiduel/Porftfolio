import React from "react";
import PortfolioTile from "./PortfolioTile";

const PortfolioTiles = () => {
  return (
    <div>
      <div className="portfoliotiles">
        <PortfolioTile
          title="Mar Spa Azul"
          imageSource={"../../../img/portfolio/vJaUY9wiAb.png"}
          website="https://spamarazul.com/"
        />
        <PortfolioTile
          title="Hungry Budget"
          imageSource={"../../../img/portfolio/lTbQeBxSAT.png"}
          website="https://hungrybudget.com/"
        />
        <PortfolioTile
          title="Alta Design & Construction"
          imageSource={"../../../img/portfolio/OGvKg54DFE.png"}
          website="https://adc.homes/"
        />
        <PortfolioTile
          title="Master Stylist"
          imageSource={"../../../img/portfolio/MasterStylist.jpg"}
          website="https://www.masterstylistutah.com/"
        />
        <PortfolioTile
          title="DevCampFries"
          imageSource={"../../../img/portfolio/2.jpg"}
          website="https://devcamp-fries-martei.netlify.app"
        />
        <PortfolioTile
          title="Delipan"
          imageSource={"../../../img/portfolio/1.jpg"}
          website="https://delipanutah.com/"
        />
      </div>
    </div>
  );
};

export default PortfolioTiles;
