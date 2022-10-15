import React from "react";
import classes from "../../styles/Nav.module.css";
import { GiWineBottle } from "react-icons/gi";
import Link from "next/link";

const Nav = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <GiWineBottle className={classes.icon} />
        <h2 className={classes.title}>Restaurant Delicios</h2>
      </div>
      <ul className={classes.pages}>
        <Link href="/">
          <li>Homepage</li>
        </Link>
        <Link href="/menu">
          <li>Menu</li>
        </Link>
        <Link href="#form">
          <li>Reservations</li>
        </Link>
        <Link href="#form">
          <li>Events</li>
        </Link>
        <Link href="#form">
          <li>Contact</li>
        </Link>
      </ul>
      <div className={classes.buttons}>
        <button className="button">Find a table</button>
        <button className="button-transparent">Order some food</button>
      </div>
    </div>
  );
};

export default Nav;
