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
          website="https://devcamp-fries-martei.netlify.app"
        />
        <PortfolioTile
          title="Delipan"
          imageSource={"../../../img/portfolio/1.jpg"}
          website="http://delipanutah.com/"
        />
        <PortfolioTile
          title="Cynthia's Pics"
          imageSource={"../../../img/portfolio/Cynthiaspics.jpg"}
          website="http://cynthiaspics.com/"
        />
        <PortfolioTile
          title="Glass Auto Repair"
          imageSource={"../../../img/portfolio/GlassRepairShop.jpg"}
          website="http://glassrepair.marteiportfolio.site"
        />
        {/* <PortfolioTile
          title="Solar Panels"
          imageSource={"../../../img/portfolio/1.jpg"}
        /> */}
      </div>
    </div>
  );
};

export default PortfolioTiles;
