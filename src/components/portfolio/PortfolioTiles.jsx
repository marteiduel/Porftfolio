import React from "react";
import PortfolioTile from "./PortfolioTile";

const PortfolioTiles = () => {
  return (
    <div>
      <div className="portfoliotiles">
        <PortfolioTile
          title="Master Stylist"
          imageSource={"../../../img/portfolio/MasterStylist.jpg"}
          website="https://www.masterstylistutah.com/"
        />
        <PortfolioTile
          title="DevCampFries"
          imageSource={"../../../img/portfolio/2.jpg"}
        />
        <PortfolioTile
          title="Delipan"
          imageSource={"../../../img/portfolio/1.jpg"}
        />
        <PortfolioTile
          title="Master Stylist"
          imageSource={"../../../img/portfolio/MasterStylist.jpg"}
        />
        <PortfolioTile
          title="DevCampFries"
          imageSource={"../../../img/portfolio/2.jpg"}
        />
        <PortfolioTile
          title="Delipan"
          imageSource={"../../../img/portfolio/1.jpg"}
        />
      </div>
    </div>
  );
};

export default PortfolioTiles;
