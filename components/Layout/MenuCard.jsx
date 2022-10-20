import React from "react";
import classes from "../../styles/MenuCard.module.css";
import Link from "next/link";
import { urlFor } from "../../lib/client";

const MenuCard = ({ img, title, desc, price, id, slug }) => {
  return (
    <li className={classes.card} key={id}>
      <Link href={`product/${slug.current}`}>
        <div className={classes.image_wrapper}>
          <img
            src={urlFor(img)}
            alt="Photo of prepared food"
            className={classes.image}
          />
        </div>
      </Link>
      <div className={classes.card__info}>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.desc}>{desc}</p>
        <div>
          <span className={classes.price}>${price}</span>
        </div>
      </div>
    </li>
  );
};

export default MenuCard;
