import { PageHero } from "components/UI/pageHero"

import { useMatch } from "react-router"

import { NavLink } from "react-router-dom"

import NotFound from "pages/notFound"
import { RatingStars } from "components/UI/ratingStars"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "store/store"
import { getProductsByCategoryName } from "store/slices/productsSlice"
import { IProduct } from "types/products.types"
import Slider from "components/UI/slider"

import { BsHeart } from "react-icons/bs"

const Product = () => {
  const urlParams = useMatch("/categories/:category/:productId")!.params
  const dispatch = useAppDispatch()

  const { products, isLoading } = useAppSelector((state) => state.products)

  useEffect(() => {
    if (!products.products.length) {
      dispatch(getProductsByCategoryName(urlParams.category!))
    }
  }, [dispatch, products.products.length, urlParams.category])

  const mainProductData = products.products.filter((item) => item.id === +urlParams.productId!)

  const relatedProductsData = products.products.filter((item) => item.id !== +urlParams.productId!)

  const productData = mainProductData[0]

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const priceWithDiscount = (productData: IProduct) => {
    const price = (
      productData?.price -
      productData?.price * productData?.discountPercentage * 0.01
    ).toFixed(2)
    return price
  }

  return (
    <div>
      <section>
        {isLoading && <>Loading...</>}
        {!isLoading && mainProductData.length === 0 && <NotFound></NotFound>}
        {!isLoading && productData && (
          <>
            <PageHero
              breadCrumbs={[
                {
                  title: "categories",
                  link: `categories`,
                },
                {
                  title: productData.category,
                  link: `categories/${productData.category}`,
                },
                {
                  title: productData.title,
                  link: `categories/${urlParams.category}/${urlParams.productId}`,
                },
              ]}
            >
              {productData.title}
            </PageHero>
            <div className="main-container flex flex-col gap-y-[1.75rem]">
              <div className="shadow-card w-[73.125rem] h-[31.8rem] flex rounded-sm gap-11 items-center p-3">
                <div className="w-[34.3rem] h-full flex flex-col justify-center">
                  <img
                    src={productData.thumbnail}
                    alt={productData.title}
                    className="w-full h-full"
                  />
                  {productData.images.length > 2 && (
                    <Slider images={productData.images} imageStyle={`w-full h-32`} maxSlides={3} />
                  )}
                </div>
                <div className="w">
                  <h1 className="contact-header capitalize">{productData.title}</h1>
                  <div className="flex my-2">
                    <RatingStars rating={productData.rating} />
                    <span className="text-text font-josefin-sans text-sm ml-1">
                      ({productData.rating})
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <span className="price">{priceWithDiscount(productData)}$</span>
                    <span className="price-without-discount">{productData.price}$</span>
                  </div>
                  <p className="text-text-sub-dark-500 font-josefin-sans my-3">
                    {productData.description}
                  </p>
                  <div className="flex gap-5 items-center ml-14">
                    <button className="text-text font-josefin-sans">Add to cart</button>
                    <button>
                      <BsHeart></BsHeart>
                    </button>
                  </div>
                </div>
              </div>
              <div className="">
                <h2 className="contact-header mb-12">Related Products</h2>
                <div className="flex">
                  {relatedProductsData.map((product) => {
                    return (
                      <div key={product.id}>
                        <NavLink to={`/categories/${urlParams.category}/${product.id}`}>
                          <img src={product.thumbnail} alt={product.title} />
                        </NavLink>
                        <div className="flex items-center justify-between">
                          <NavLink to={`/categories/${urlParams.category}/${product.id}`}>
                            {product.title}
                          </NavLink>
                          <span className="flex">
                            <RatingStars rating={product.rating} />
                          </span>
                        </div>
                        <span className="price">{priceWithDiscount(product)}$</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  )
}

export default Product
