import { Avatar } from "@material-ui/core";
import React from "react";
import "./LeftSidebar.css";
import Option from "./Option";

function LeftSidebar() {
  return (
    <div className="leftSidebar">
      <div className="leftSidebar__login">
        <Avatar src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thescottishsun.co.uk%2Fwp-content%2Fuploads%2Fsites%2F2%2F2016%2F12%2Fnintchdbpict000257971845.jpg%3Fstrip%3Dall%26w%3D960&f=1&nofb=1" />
        <h3>Adam Cooke</h3>
        <div className="Leftsidebar__account">
          <p>My Account</p>
        </div>
      </div>

      <Option title="Trending" />
      <Option title="Coming Soon" />
      <Option title="Recommended" />
    </div>
  );
}

export default LeftSidebar;
