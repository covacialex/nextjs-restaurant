import React, { useState } from "react";
import classes from "../../styles/Cart.module.css";
import { useRef } from "react";
import Link from "next/link";

import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";

import { useStateContext } from "../../context/StateContext";
import { urlFor } from "../../lib/client";
import getStripe from "../../lib/getStripe";

const Cart = () => {
  const cartRef = useRef();

  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext();

  const handleCheckout = async () => {
    // Get promise from lib
    const stripe = await getStripe();

    // Make API req
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div className={classes.cart__wrapper} ref={cartRef}>
      <div className={classes.cart__container}>
        <button
          type="button"
          className={classes.cart__heading}
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className={classes.heading}>Your Cart</span>
          <span className={classes.num__items}>({totalQuantities})</span>
        </button>

        {cartItems.length < 1 && (
          <div className={classes.cart__empty}>
            <AiOutlineShopping size={150} />
            <h3>Your shopping cart is empty</h3>
            <Link href="/menu">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="button"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className={classes.product__container}>
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className={classes.product} key={item._id}>
                <img
                  src={urlFor(item?.image[0])}
                  className={classes.product__image}
                />
                <div className={classes.item__desc}>
                  <div className={classes.flex__top}>
                    <h5>{item.name}</h5>
                    <h4>${item.price}</h4>
                  </div>
                  <div className={classes.flex__bottom}>
                    <div>
                      <p className="qty__desc">
                        <button
                          type="button"
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "dec")
                          }
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "inc")
                          }
                        >
                          +
                        </button>
                      </p>
                    </div>

                    <button
                      type="button"
                      className={classes.remove}
                      onClick={() => onRemove(item)}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {cartItems.length >= 1 && (
          <div className={classes.cart__bottom}>
            <div className={classes.total}>
              <h3>Subtotal:</h3>
              <p>${totalPrice}</p>
            </div>
            <div className={classes.button__container}>
              <button type="button" className="button" onClick={handleCheckout}>
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
