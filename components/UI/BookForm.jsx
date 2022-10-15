import React, { useRef } from "react";
import classes from "./BookForm.module.css";

const BookForm = () => {
  const nameRef = useRef();
  const phoneRef = useRef();
  const personRef = useRef();
  const dateRef = useRef();
  const timeRef = useRef();
  const messageRef = useRef();

  const confirmBooking = (e) => {
    e.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredPhone = phoneRef.current.value;
    const enteredPerson = personRef.current.value;
    const enteredDate = dateRef.current.value;
    const enteredTime = timeRef.current.value;
    const enteredMessage = messageRef.current.value;

    console.log(
      enteredName,
      enteredPhone,
      enteredPerson,
      enteredDate,
      enteredTime,
      enteredMessage
    );
  };

  return (
    <form className={classes.form} onSubmit={confirmBooking} id="form">
      <div className={classes.form__first}>
        <input type="text" name="name" placeholder="Your Name" ref={nameRef} />
        <input
          type="tel"
          name="phone"
          placeholder="Phone number"
          ref={phoneRef}
        />
      </div>
      <div className={classes.form__second}>
        <select name="cars" className={classes.dropdown} ref={personRef}>
          <option value="1">1 Person</option>
          <option value="2">2 People</option>
          <option value="5">10+ People</option>
        </select>
        <input type="date" name="date" className={classes.date} ref={dateRef} />
        <input
          type="time"
          min="10:00"
          max="18:00"
          className={classes.time}
          ref={timeRef}
        />
      </div>
      <div className={classes.message}>
        <textarea
          className={classes.message__text}
          placeholder="Message (optional)"
          ref={messageRef}
        ></textarea>
      </div>
      <button
        type="submit"
        className="button"
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "0 auto",
          width: "88%",
        }}
      >
        Book a table
      </button>
    </form>
  );
};

export default BookForm;
