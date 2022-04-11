import React from "react";
import "./CheckOutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckOutProduct(props) {
  let { id, image, title, price, rating } = props;

  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkOutProduct">
      <img src={image} alt="productImage" className="outProductImage" />
      <div className="outProductInfo">
        <p className="outProductTitle">{title}</p>
        <p className="outProductPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="productRating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <button className="productRemove" onClick={removeFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckOutProduct;
