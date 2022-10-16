import React from "react";
import classes from "../../styles/Product.module.css";
import { client, urlFor } from "../../lib/client";

const Product = ({ productData }) => {
  const { image, name, description, price, slug } = productData;

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
      <img
        src={urlFor(image && image[0])}
        alt={`Photo of prepared ${name}`}
        className={classes.image}
      />
      <div className={classes.content}>
        <h2 className={classes.title}>{name}</h2>
        <span className={classes.price}>${price}</span>
        <p className={classes.desc}>{description}</p>
        <button className="button-transparent">Add to cart</button>
      </div>
    </div>
  );
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;

  const productData = await client.fetch(query);

  return {
    props: { productData },
  };
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
      slug {
        current
      }
   }`;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export default Product;
