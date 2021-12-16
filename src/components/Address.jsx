import React from "react";

const Address = () => {
  return (
    <ul>
      <li>
        <img className="svg" src="img/svg/phone.svg" alt="" />
        <a href="Tel: 7614123224">+44 1632 967704</a>
      </li>
      {/* End li */}

      <li>
        <img className="svg" src="img/svg/mail.svg" alt="" />
        <span>
          <a href="mailto:ib-themes21@gmail.com">your@gmail.com</a>
        </span>
      </li>
      {/* End li */}

      <li>
        <img className="svg" src="img/svg/map.svg" alt="" />
        <span>
          245 King Street, Touterie Victoria
          <br /> 8520 Australia
        </span>
      </li>
    </ul>
  );
};

export default Address;
