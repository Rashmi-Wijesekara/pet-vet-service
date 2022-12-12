import React from "react";
import HomeIcon from "../icons/home.svg";
// import NotificationIcon from "../icons/notification.svg";
import profilePicIcon from "../icons/profilePic.svg";

function Header() {
  return (
    <div className="header">
      <div className="imgHome">
        {/* <img src="/icons/home.svg" alt="homeicon"></img>  */}
        <img src={HomeIcon} alt="home" width="35" height="35" />
      </div>
      {/* <div className="notificationIcon">
        {/* <img src="/icons/notification.svg" alt="notification"></img> }
        <img src={NotificationIcon} alt="notify" width="35" height="35" />
      </div> */}

      <div className="profilePicIcon">
        {/* <img src="/icons/profilePic.svg" alt="profilePic"></img> */}
        <img src={profilePicIcon} alt="pro pic" width="35" height="35" />
      </div>

      {/* <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600"></img>  */}
    </div>
  );
}

export default Header;
