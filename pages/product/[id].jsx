import React from "react";
import classes from "../../styles/Product.module.css";
import Image from "next/image";

const Product = () => {
  const menuData = [
    {
      img: "chicken.jpg",
      id: 1,
      title: "Greek Salad",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ad ex nihil",
      price: "39.00",
    },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <Image
          src={`/assets/dishes/${menuData[0].img}`}
          layout="fill"
          alt="Photo of prepared food"
          objectFit="contain"
        />
      </div>
      <div className={classes.content}>
        <h2 className={classes.title}>{menuData[0].title}</h2>
        <span className={classes.price}>${menuData[0].price}</span>
        <p className={classes.desc}>{menuData[0].desc}</p>
        <button className="button-transparent">Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
