import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">A Book </Link>
        </li>
        <li>
          <Link to="/products/p2">A Apple </Link>
        </li>
        <li>
          <Link to="/products/p3">A NoteBook </Link>
        </li>
        <li>
          <Link to="/products/p4">A Dolpin </Link>
        </li>
        <li>
          <Link to="/products/p5">A Coder </Link>
        </li>
      </ul>
    </section>
  );
};

export default Product;
