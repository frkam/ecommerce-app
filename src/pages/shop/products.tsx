import Slider from 'components/UI/slider'
import React, { useState } from 'react'
import { BsCart, BsHeart, BsSearch } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { IProduct } from 'types/products.types'
import { RatingStars } from '../../components/UI/ratingStars'

const Product: React.FC<{ products: IProduct[] }> = ({ products }) => {
  const initProductsZoom = new Array(products.length).fill(
    false,
    0,
    products.length
  )

  const [productZoom, setProductZoom] = useState(initProductsZoom)

  const zoomProductImage = (i: number) => {
    setProductZoom((prev) => {
      return [
        ...initProductsZoom.slice(0, i),
        !prev[i],
        ...initProductsZoom.slice(i + 1),
      ]
    })
  }

  return (
    <React.Fragment>
      {products.map((product: IProduct, i: number) => {
        const priceWithDiscount = (
          product.price -
          product.price * product.discountPercentage * 0.01
        ).toFixed(2)
        return (
          <div
            key={product.id}
            className={`flex flex-col tn1:flex-row shadow-card p-4  ${
              productZoom[i] ? '!flex-col items-start' : 'items-center tn1:h-56'
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
              <Slider
                images={product.images}
                imageStyle="w-[30rem] h-full"
                slideStyle="h-64"
                swiperStyle="mb-4"
                maxSlides={3}
              />
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
                <div className=" pr-4">
                  <span className="price pr-2">{priceWithDiscount}$</span>
                  <span className="price-without-discount">
                    {product.price}$
                  </span>
                </div>
                <span className="flex">
                  <RatingStars rating={product.rating} />
                </span>
              </div>
              <div className="flex text-text text-xl gap-2 mt-8">
                <button className="shadow-controlCircle w-9 h-9 rounded-full flex items-center justify-center">
                  <BsHeart />
                </button>
                <button className="shadow-controlCircle w-9 h-9 rounded-full flex items-center justify-center">
                  <BsCart />
                </button>
                {product.images.length > 2 && (
                  <button
                    className={`shadow-controlCircle w-9 h-9 rounded-full flex items-center justify-center ${
                      productZoom[i] ? 'text-accent' : ''
                    }`}
                    onClick={() => zoomProductImage(i)}
                  >
                    <BsSearch />
                  </button>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </React.Fragment>
  )
}

export default Product
