import React from "react";
import MenuCard from "../../components/Layout/MenuCard";
import classes from "../../styles/Menu.module.css";
import Image from "next/image";

import { client } from "../../lib/client";

const Menu = ({ menuData }) => {
  console.log(menuData);
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
              img={product.image[0]}
              title={product.Name}
              desc={product.description}
              price={product.price}
              id={product._id}
              key={product._id}
              slug={product.slug}
            />
          );
        })}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';

  const menuData = await client.fetch(query);

  return {
    props: { menuData },
  };
};

export default Menu;
