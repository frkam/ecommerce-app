import { PageHero } from 'components/UI/pageHero'
import NotFound from 'pages/notFound'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { getProductsByCategoryName } from 'store/slices/productThunk'
import { useAppDispatch, useAppSelector } from 'store/store'
import Product from './products'

const Shop = () => {
  const { category } = useParams()

  const categoryTitle = category?.replaceAll('-', ' ')

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getProductsByCategoryName(category!))
  }, [category, dispatch])

  const { products, isLoading } = useAppSelector((state) => state.products)

  return (
    <>
      {isLoading && <div>Loading....</div>}
      {!isLoading && products.products.length === 0 && <NotFound />}
      {!isLoading && products.products.length > 0 && (
        <section>
          <PageHero
            breadCrumbs={[
              { title: 'categories', link: 'categories' },
              { title: categoryTitle!, link: `shop/${category}` },
            ]}
          >
            {categoryTitle}
          </PageHero>
          <div className="main-container flex flex-col gap-y-[1.75rem]">
            <Product products={products.products} />
          </div>
        </section>
      )}
    </>
  )
}

export default Shop
