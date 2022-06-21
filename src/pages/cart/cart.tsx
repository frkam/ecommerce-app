import { PageHero } from 'components/UI/pageHero'
import { useAppSelector } from 'store/store'

const Cart = () => {
  const { items } = useAppSelector((state) => state.cart)
  const breadCrumbs = [
    {
      link: `/cart`,
      title: 'Shopping Curt',
    },
  ]

  return (
    <section>
      <PageHero breadCrumbs={breadCrumbs}>Shopping Curt</PageHero>
      <div className="main-container">
        <div className="flex flex-col">
          {items.map((item) => {
            return (
              <div key={item.id} className="flex flex-row">
                <img src={item.image} alt={item.title} />
                <h2>{item.title}</h2>
                <span className="price-without-discount">{item.price}$</span>
                <div>
                  {/* <button onClick={() => dispatch(deleteItemFromCart(item.id))}> */}
                  -{/* </button> */}
                  <span>{item.quantity}</span>
                  {/* <button onClick={() => dispatch(addItemToCart(item))}> */}
                  +{/* </button> */}
                </div>
                <span>{item.quantity * item.price}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Cart
