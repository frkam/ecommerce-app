import React, { useState } from "react";
import { BsCart, BsHeart, BsSearch } from "react-icons/bs";
import { IProduct } from "types/products.types";
import { RatingStars } from "./ratingStars";
import { nanoid } from "nanoid";
import { NavLink } from "react-router-dom";

import { useWindowWidth } from "hooks/useWindowWidth";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const Product: React.FC<{ products: IProduct[] }> = ({ products }) => {
  const width = useWindowWidth();

  const slidesPerViewConfig = (width: number) => {
    if (width > 1024) {
      return 3;
    } else if (width < 1024 && width > 500) {
      return 2;
    } else {
      return 1;
    }
  };

  const initProductsZoom = Array(products.length).fill(
    false,
    0,
    products.length
  );

  const [productZoom, setProductZoom] = useState(initProductsZoom);

  const zoomProductImage = (i: number) => {
    setProductZoom((prev) => {
      return [
        ...initProductsZoom.slice(0, i),
        !prev[i],
        ...initProductsZoom.slice(i + 1),
      ];
    });
  };

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
            className={`flex flex-col tn1:flex-row shadow-card p-4  ${
              productZoom[i] ? "!flex-col items-start" : "items-center tn1:h-56"
            }`}
          >
            {!productZoom[i] && (
              <img
                src={product.thumbnail}
                alt={product.title}
                className="sm:w-72 sm:h-full tn1:w-48 tn1:h-full rounded-sm mb-5 w-full h-1/2 mx-auto tn1:mx-0 tn1:mr-7 tn1:mb-0 select-none"
              />
            )}
            {productZoom[i] && (
              <Swiper
                slidesPerView={slidesPerViewConfig(width)}
                modules={[Navigation]}
                navigation
                className="w-full mb-4 select-none"
              >
                {product.images.map((img) => {
                  return (
                    <SwiperSlide className="h-64" key={nanoid()}>
                      <img
                        src={img}
                        alt="productImage"
                        className="w-[30rem] h-full"
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            )}
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
                  className={`shadow-controlCircle w-9 h-9 rounded-full flex items-center justify-center ${
                    productZoom[i] ? "text-accent" : ""
                  }`}
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
