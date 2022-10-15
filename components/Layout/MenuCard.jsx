import React from "react";
import classes from "../../styles/MenuCard.module.css";
import Image from "next/image";
import Link from "next/link";

const MenuCard = ({ img, title, desc, price, id }) => {
  return (
    <div className={classes.card}>
      <Link href={`product/${id}`}>
        <Image
          src={`/assets/dishes/${img}`}
          alt="Photo of prepared food"
          width="200"
          height="200"
          objectFit="cover"
          className={classes.image}
        />
      </Link>
      <div className={classes.card__info}>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.desc}>{desc}</p>
        <Link href="/">
          <span className={classes.price}>${price}</span>
        </Link>
      </div>
    </div>
  );
};

export default MenuCard;
