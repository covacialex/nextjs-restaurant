import React from "react";
import classes from "../../styles/Product.module.css";
import { client, urlFor } from "../../lib/client";
import { useStateContext } from "../../context/StateContext";

const Product = ({ productData }) => {
  const { image, name, description, price, slug } = productData;

  const { decQty, incQty, qty, onAdd } = useStateContext();

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
        <div className={classes.qty__content}>
          <h3 className={classes.qty__text}>Quantity:</h3>
          <p className={classes.qty__desc}>
            <span onClick={decQty}>-</span>
            <span>{qty}</span>
            <span onClick={incQty}>+</span>
          </p>
        </div>
        <p className={classes.desc}>{description}</p>
        <button
          className="button-transparent"
          onClick={() => onAdd(productData, qty)}
        >
          Add to cart
        </button>
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
