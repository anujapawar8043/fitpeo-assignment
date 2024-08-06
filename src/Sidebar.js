import React from "react";
import "./styles/Sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'
// import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid';
import {
  faHouse,
  faBars,
  faSquarePollVertical,
  faBagShopping,
  faClipboard,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
function Sidebar() {
  return (
    <div className="sidebar">
      <FontAwesomeIcon icon={faBars} className="barsicon" />

      <div className="menu-list">
        <div className="menu-item">
          <FontAwesomeIcon icon={faHouse} />
          <FontAwesomeIcon icon={faClipboard} />
          <FontAwesomeIcon icon={faBagShopping} />
          <FontAwesomeIcon icon={faSquarePollVertical} />
        </div>
        <div className="exit">
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
