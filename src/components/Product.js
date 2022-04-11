import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product(props) {
  const { id, title, image, price, rating, key } = props;

  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // Dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="Product">
      <div className="productInfo">
        <p>{title.length > 150 ? title.slice(0, 145) + "....." : title}</p>
        <p className="productPrice">
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
      </div>
      <img src={image} alt="productImage" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
