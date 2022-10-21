import React from "react";
import classes from "./BestSpecialties.module.css";
import Image from "next/image";
import BookForm from "../UI/BookForm";

const BestSpecialties = () => {
  return (
    <div className={classes.container}>
      <Image
        src="/assets/restaurant.jpg"
        alt="Tables and chairs in a restaurant"
        layout="fill"
        objectFit="cover"
        className={classes.image__left}
      />
      <div className={classes.content}>
        <div className="main__content">
          <h4 className="main__title-sm ">Planning a wedding?</h4>
          <h1 className="main__title-bg">Planning an event?</h1>
          <p className="main__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
            inventore atque cumque. Suscipit magni earum ipsa corrupti animi
            nisi voluptate doloribus, quia iste saepe? Aliquid delectus ad iure
            sapiente ab!
          </p>
        </div>
      </div>

      <div className={classes.form__container}>
        <div className={classes.form__order}>
          <h2>Online Reservation</h2>
          <p>
            Booking request <a className={classes.number}>+40 000 000 000</a> or
            fill out the order form.
          </p>
          <BookForm />
        </div>
        <div className={classes.info}>
          <h2>Contact Us</h2>

          <div className={classes.request}>
            <h5>Booking request</h5>
            <a href="tel:+40 759 552 234" className={classes.number}>
              +40 759 552 234
            </a>
          </div>

          <div className={classes.location}>
            <h5>Location</h5>
            <address>
              Restaurant Delicious, Str Alexandru Ciurea 6 Cluj-Napoca
            </address>
          </div>

          <div className={classes.lunch}>
            <h5>Lunch time</h5>
            <p>
              Monday to Sunday <br /> 11:00am - 2:30pm
            </p>
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default BestSpecialties;
