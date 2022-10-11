import Link from "next/link";
import React from "react";
import classes from "./Samples.module.css";
import Image from "next/image";

const Samples = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className="main__content">
          <h4 className="main__title-sm ">Flavors for royalty</h4>
          <h1 className="main__title-bg">We Offer Top Notch</h1>
          <p className="main__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
            inventore atque cumque. Suscipit magni earum ipsa corrupti animi
            nisi voluptate doloribus, quia iste saepe? Aliquid delectus ad iure
            sapiente ab!
          </p>
        </div>
      </div>

      <div className={classes.samples}>
        <div className={classes.sample}>
          <div className={classes.imageContainer}>
            <Image
              src="/assets/breakfast.jpg"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h3 className="heading-sm">Breakfast</h3>
          <Link href="/">
            <p className={classes.view}>View menu</p>
          </Link>
        </div>

        <div className={[classes.sample, classes.imageTrans].join(" ")}>
          <div className={classes.imageContainer}>
            <Image
              src="/assets/appetizer.jpg"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h3 className="heading-sm">Appetizers</h3>
          <Link href="/">
            <p className={classes.view}>View menu</p>
          </Link>
        </div>

        <div className={classes.sample}>
          <div className={classes.imageContainer}>
            <Image
              src="/assets/drinks.jpg"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h3 className="heading-sm">Drinks</h3>
          <Link href="/">
            <p className={classes.view}>View menu</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Samples;
