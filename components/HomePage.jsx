import React from "react";
import classes from "./HomePage.module.css";
import { AiOutlineBook } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className={classes.container}>
      <Image
        src="/assets/home-dish.jpg"
        layout="fill"
        priority="true"
        alt="A chef preparing a dish"
        className={classes.image}
      />
      <div className="main__content">
        <h4 className="main__title-sm ">Delightful Experience</h4>
        <h1 className="main__title-bg">
          Flavors Inspired by <br /> the Seasons
        </h1>
        <p className="main__text">
          Come with family & feel the joy of mouthwatering food
        </p>
        <Link href="/menu">
          <p className="button-transparent">View our menu</p>
        </Link>
      </div>

      <Link href="#form">
        <div className={classes.book}>
          <button type="button" className={classes.first}>
            <AiOutlineBook className={classes.icon} />
            <p className={classes.book__text}>
              Book a <br />
              table
            </p>
          </button>
          <div className={classes.second}></div>
        </div>
      </Link>

      <div className="overlay"></div>
    </div>
  );
};

export default HomePage;
