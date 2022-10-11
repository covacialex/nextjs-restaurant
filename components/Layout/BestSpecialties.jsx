import React from "react";
import classes from "./BestSpecialties.module.css";
import Image from "next/image";

const BestSpecialties = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content__left}>
        <div className="main__content">
          <h4 className="main__title-sm ">Have a date planned?</h4>
          <h1 className="main__title-bg">Planning a date?</h1>
          <p className="main__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
            inventore atque cumque. Suscipit magni earum ipsa corrupti animi
            nisi voluptate doloribus, quia iste saepe? Aliquid delectus ad iure
            sapiente ab!
          </p>
        </div>

        <div className={classes.image__left}>
          <Image
            src="/assets/date.jpg"
            alt="Date on a balcony"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={classes.content__right}>
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

        <div className={classes.image__right}>
          <Image
            src="/assets/restaurant.jpg"
            alt="Photo of an empty restaurant"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      <div className={classes.form}>
        <div className={classes.form__first}>
          <input type="text" name="name" placeholder="Your Name" />
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            required
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
          />
        </div>

        <div className={classes.form__second}>
          <select name="cars" className={classes.dropdown}>
            <option value="1">1 Person</option>
            <option value="2">2 People</option>
            <option value="5">10+ People</option>
          </select>
          <input type="date" name="date" className={classes.date} />
          <input type="time" min="10:00" max="18:00" className={classes.time} />
        </div>

        <div className={classes.message}>
          <textarea
            className={classes.message__text}
            placeholder="Message (optional)"
          ></textarea>
        </div>

        <button type="button" className="button">
          Book a table
        </button>
      </div>
    </div>
  );
};

export default BestSpecialties;
