import React from "react";
import Link from "next/link";
import classes from "../styles/Footer.module.css";
import { GiWineBottle } from "react-icons/gi";

const Footer = () => {
  return (
    <div className={classes.container}>
      <ul className={classes.left}>
        <Link href="/">
          <li>Homepage</li>
        </Link>
        <Link href="/menu">
          <li>Menu</li>
        </Link>
        <Link href="/#form">
          <li>Reservations</li>
        </Link>
        <Link href="/#form">
          <li>Events</li>
        </Link>
        <Link href="/#form">
          <li>Contact</li>
        </Link>
      </ul>
      <div className={classes.mid}>
        <div className={classes.title__contents}>
          <GiWineBottle className={classes.title__image} />
          <h2 className={classes.title}>
            Delicios <span>Restaurant</span>
          </h2>
        </div>
        <div className={classes.info}>
          <address>Restaurant Delicious, Str Alexandru Ciurea 6, CJ</address>
          <a href="mailto:restaurant@delicious.com">restaurant@delicious.com</a>
          <p>Booking request</p>
          <a href="tel:+40 759 552 234" className={classes.number}>
            +40 759 552 234
          </a>
        </div>
        <p>Open: 09:00 am - 05:00 pm</p>
      </div>
      <ul className={classes.left}>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Youtube</li>
        <li>LinkedIn</li>
        <li>Pinterest</li>
      </ul>
    </div>
  );
};

export default Footer;
