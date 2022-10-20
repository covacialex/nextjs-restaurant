import React from "react";
import classes from "../../styles/Nav.module.css";
import { GiWineBottle } from "react-icons/gi";
import Link from "next/link";
import Cart from "../Layout/Cart";
import { useStateContext } from "../../context/StateContext";

import { BsCart, BsCartCheck } from "react-icons/bs";

const Nav = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

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
      <div className={classes.buttons}>
        <button className={classes.cart} onClick={() => setShowCart(true)}>
          {totalQuantities >= 1 ? <BsCartCheck /> : <BsCart />}
          <span className={classes.cart__qty}>{totalQuantities}</span>
        </button>

        {showCart && <Cart />}
      </div>
    </div>
  );
};

export default Nav;
