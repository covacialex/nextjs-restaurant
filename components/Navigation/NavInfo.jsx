import React from "react";
import classes from "./NavInfo.module.css";
import { HiLocationMarker } from "react-icons/hi";
import { BsClockFill, BsDiamond } from "react-icons/bs";
import { AiFillPhone, AiFillMail } from "react-icons/ai";

const NavInfo = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.address}>
          <HiLocationMarker className={classes.icon} />
          <address>Str Alexandru Ciurea 6, Cluj-Napoca 400000</address>
        </div>
        <BsDiamond className={classes.icon} />
        <div className={classes.hours}>
          <BsClockFill className={classes.icon} />
          <p>Daily: 6:00 am to 10:00 pm</p>
        </div>
      </div>

      <div className={classes.right}>
        <div className={classes.phone}>
          <AiFillPhone className={classes.icon} />
          <a href="tel:+40-752-988-352">+40 752 988 352</a>
        </div>
        <BsDiamond className={classes.icon} />
        <div className={classes.mail}>
          <AiFillMail className={classes.icon} />
          <a href="mailto: restaurant@delicious.com">
            restaurant@delicious.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavInfo;
