import { PageHero } from 'components/UI/pageHero'
import { useAppDispatch, useAppSelector } from 'store/store'
// import { addItemToCart, deleteItemFromCart } from 'store/slices/cartSlice'
import { getCartItems } from 'store/slices/cartThunk'
import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from 'firebase-config'

const Cart = () => {
  const [user, loading] = useAuthState(auth)
  const { items } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (user?.email && !loading) dispatch(getCartItems({ email: user.email }))
  }, [user, loading])

  console.log(items)

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
