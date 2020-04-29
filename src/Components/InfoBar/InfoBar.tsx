import React from "react";
import "./InfoBar.css";

import closeIcon from "../../icons/closeIcon.png";
import onlineIcon from "../../icons/onlineIcon.png";

export default function InfoBar({ room }: { room: string }) {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img src={onlineIcon} alt="Online" className="onlineIcon" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <img src={closeIcon} alt="Close" />
        </a>
      </div>
    </div>
  );
}
