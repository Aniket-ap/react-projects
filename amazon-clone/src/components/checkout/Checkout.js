import React from "react";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../context/StateProvider";
import CheckoutProduct from "../checkoutProduct/CheckoutProduct";
import Subtotal from "../subtotal/Subtotal";

import "./Checkout.css";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <Link to="/">
          <img
            className="checkout__ad"
            src="https://www.amazon.in/images/G/31/img20/CEPC/WFH/ProHomeOffice/PHO_StorePage_PC_Header._CB430606738_._SY200_.jpg"
            alt="advert"
          />
        </Link>
        {basket?.length === 0 ? (
          <div>
            <h2>Your cart is empty!</h2>
            <p>Add items to it now</p>
            <Link to="/">
              <button
                style={{
                  background: "#f0c14b",
                  borderRadius: "2px",
                  height: "30px",
                  border: "1px solid",
                  marginTop: "10px",
                  borderColor: "#a88734 #9c7e31 #846a29",
                  color: "#111",
                }}
              >
                Shop now
              </button>
            </Link>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>

            {/* List of Product */}
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
