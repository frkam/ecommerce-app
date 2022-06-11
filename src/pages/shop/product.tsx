import React, { useEffect, useState } from "react";
import { BsCart, BsHeart, BsSearch } from "react-icons/bs";
import { IProduct } from "types/products.types";
import { RatingStars } from "./ratingStars";
import { nanoid } from "nanoid";
import { NavLink } from "react-router-dom";

const Product: React.FC<{ products: IProduct[] }> = ({ products }) => {
  console.log(products);
  const initProductsZoom = Array(products.length).fill(
    false,
    0,
    products.length
  );

  const [productsZoom, setProductsZoom] = useState(initProductsZoom);

  const zoomProductImage = (i: number) => {
    setProductsZoom((prev) => {
      return [...prev.slice(0, i), !prev[i], ...prev.slice(i + 1)];
    });
  };

  useEffect(() => {
    console.log(productsZoom);
  });

  return (
    <React.Fragment>
      {products.map((product: IProduct, i: number) => {
        const priceWithDiscount = (
          product.price -
          product.price * product.discountPercentage * 0.01
        ).toFixed(2);
        return (
          <div
            key={nanoid()}
            className={`flex shadow-card p-4 items-center ${
              productsZoom[i] ? "flex-col" : ""
            }`}
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="sm:w-72 sm:h-48 w-48 h-24 mr-7 rounded-sm"
            />
            <div>
              <NavLink to={product.id.toString()}>
                <h3 className="text-text font-josefin-sans text-lg font-bold transition-[color] hover:text-accent w-fit">
                  {product.title}
                </h3>
                <p className="font-lato text-text-sub-dark-700 transition-[color] hover:text-accent mb-2">
                  {product.description}
                </p>
              </NavLink>
              <div className="flex items-center">
                <div className="font-josefin-sans pr-4">
                  <span className="text-text pr-2">{priceWithDiscount}$</span>
                  <span className="line-through text-accent">
                    {product.price}$
                  </span>
                </div>
                <span className="flex">
                  <RatingStars rating={product.rating}></RatingStars>
                </span>
              </div>
              <div className="flex text-text text-xl gap-2 mt-8">
                <button className="shadow-controlCircle w-9 h-9 rounded-full flex items-center justify-center">
                  <BsHeart />
                </button>
                <button className="shadow-controlCircle w-9 h-9 rounded-full flex items-center justify-center">
                  <BsCart />
                </button>
                <button
                  className={`shadow-controlCircle w-9 h-9 rounded-full flex items-center justify-center`}
                  onClick={() => zoomProductImage(i)}
                >
                  <BsSearch />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Product;
