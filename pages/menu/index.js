import React from "react";
import MenuCard from "../../components/Layout/MenuCard";
import classes from "../../styles/Menu.module.css";
import Image from "next/image";

const Menu = () => {
  const menuData = [
    {
      img: "chicken.jpg",
      id: 1,
      title: "Greek Salad",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ad ex nihil",
      price: "39.00",
    },
    {
      img: "lasagna.jpg",
      id: 2,
      title: "Lasagna",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ad ex nihil",
      price: "39.00",
    },
    {
      img: "chicken.jpg",
      id: 3,
      title: "Raviolli",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ad ex nihil",
      price: "39.00",
    },
    {
      img: "chicken.jpg",
      id: 4,
      title: "Turkish Salad",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ad ex nihil",
      price: "39.00",
    },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.menu__header}>
        <div className="main__content">
          <h4 className="main__title-sm ">Delicious & Amazing</h4>
          <h1 className="main__title-bg">Our Menu</h1>
          <p className="main__text">
            Experience the best our chefs have to offer!
          </p>
        </div>

        <Image
          src="/assets/menuPage.jpg"
          layout="fill"
          objectFit="cover"
          className={classes.image__background}
        />
      </div>

      <div className={classes.menu__container}>
        {menuData.map((product) => {
          return (
            <MenuCard
              img={product.img}
              title={product.title}
              desc={product.desc}
              price={product.price}
              id={product.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
