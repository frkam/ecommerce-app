import { Button } from 'components/UI/button'
import { PageHero } from 'components/UI/pageHero'
import { auth } from 'firebase-config'
import { useAuthState } from 'react-firebase-hooks/auth'
import { NavLink } from 'react-router-dom'
import { changeQuantityOfItem, clearCart } from 'store/slices/cartThunk'
import { useAppDispatch, useAppSelector } from 'store/store'

const Cart = () => {
  const [user] = useAuthState(auth)

  const { items } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  const breadCrumbs = [
    {
      link: `/cart`,
      title: 'Shopping Cart',
    },
  ]

  return (
    <section>
      <PageHero breadCrumbs={breadCrumbs}>Shopping Cart</PageHero>
      <div className="main-container">
        {items.length > 0 && (
          <div className="flex flex-col">
            <div className="mb-4">
              {items.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex flex-row border-b-border-color pb-4 mt-4 border-b items-center w-full justify-between"
                  >
                    <NavLink
                      to={`/categories/${item.category}/${item.id}`}
                      className="flex tn:flex-row flex-col gap-4 tn:w-48 w-28 justify-center items-center hover:text-accent transition-colors"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-32 h-16"
                      />
                      <h2 className="font-josefin-sans font-medium ">
                        {item.title}
                      </h2>
                    </NavLink>
                    <span className="price w-14 flex justify-center">
                      {item.price}$
                    </span>
                    <div className="h-4 text-xs w-14 flex justify-center">
                      <button
                        className="bg-cart-quantity-button-bg w-3 text-cart-quantity-button"
                        onClick={() =>
                          dispatch(
                            changeQuantityOfItem({
                              itemId: item.id,
                              email: user!.email!,
                              type: 'reduce',
                              quantity: 1,
                            })
                          )
                        }
                      >
                        -
                      </button>
                      <span className="bg-cart-quantity-number-bg text-cart-quantity-number w-7 flex justify-center">
                        {item.quantity}
                      </span>
                      <button
                        className="bg-cart-quantity-button-bg w-3 text-cart-quantity-button"
                        onClick={() =>
                          dispatch(
                            changeQuantityOfItem({
                              itemId: item.id,
                              email: user!.email!,
                              type: 'increase',
                              quantity: 1,
                            })
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                    <span className="price w-16 flex justify-center">
                      {item.quantity * item.price}$
                    </span>
                  </div>
                )
              })}
            </div>
            <Button
              сlickHandler={() => dispatch(clearCart({ email: user!.email! }))}
            >
              Clear cart
            </Button>
          </div>
        )}
        {items.length <= 0 && (
          <p className="text-text-sub-dark-500 text-3xl flex justify-center">
            You don't have any products to the cart yet.
            <NavLink to="/categories" className="ml-2">
              Go shopping?
            </NavLink>
          </p>
        )}
      </div>
    </section>
  )
}

export default Cart
