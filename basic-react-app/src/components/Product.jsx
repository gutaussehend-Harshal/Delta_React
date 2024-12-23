import React from "react";
import "./Product.css";

function Product({ title, age }) {
  let styles = { backgroundColor: "red" };
  return (
    <div
      className="Product"
      style={age >= 28 ? styles : { backgroundColor: "white" }}
    >
      <h3>Product Title : {title}</h3>
      <h5>Product Description : {age}</h5>
      {/* <p>
        Product Features :{" "}
        {features.map((feature) => (
          <li>{feature}</li>
        ))}
      </p> */}
      {age >= 28 ? <p>Papa bolo</p> : <p>Beta kaise ho</p>}
    </div>
  );
}

export default Product;
