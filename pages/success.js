import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import classes from "../styles/Success.module.css";

import { StateContext, useStateContext } from "../context/StateContext";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.success}>
        <p className={classes.icon}>
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order</h2>
        <p className={classes.email_msg}>
          Check your email inbox for the receipt
        </p>
        <p className={classes.description}>
          If you have any questions, please email:
          <a
            className={classes.email}
            href="mailto:orders@restaurantdelicious.com"
          >
            orders@restaurantdelicious.com
          </a>
        </p>
        <Link href="/">
          <button className="button" type="button">
            Back to the homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
