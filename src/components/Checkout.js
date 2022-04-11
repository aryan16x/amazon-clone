import React from "react";
import { getBasketTotal } from "../reducer";
import "./Checkout.css";
import CheckOutProduct from "./CheckOutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkOut">
      <div className="checkOutLeft">
        <img
          src="https://wp.disruptiveadvertising.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png"
          alt="sponserAd"
          className="checkOutAd"
        />

        <div>
          <h3 className="userName">Hello {user?.email}</h3>
          <h2 className="checkOutTitle">Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckOutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkOutRight">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
