// eslint-disable-next-line import/no-unresolved
import 'swiper/css'
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/navigation'
import 'react-toastify/dist/ReactToastify.css'
import { RequireAuth } from 'components/utility/requireAuth'
import { ScrollToTop } from 'components/utility/scrollToTop'
import { auth } from 'firebase-config'
import { lazy, Suspense, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Route, Routes } from 'react-router-dom'
import { getCartItems } from 'store/slices/cartThunk'
import { useAppDispatch } from 'store/store'
import Footer from 'widgets/footer/footer'
import Header from 'widgets/header/header'
import { Notification } from 'widgets/notification'

const Login = lazy(() => import('pages/login/login'))
const Cart = lazy(() => import('pages/cart/cart'))
const Home = lazy(() => import('pages/home'))
const SignUp = lazy(() => import('pages/signUp/signUp'))
const Contact = lazy(() => import('pages/contact/contact'))
const Shop = lazy(() => import('pages/shop/shop'))
const Product = lazy(() => import('pages/product/product'))
const Categories = lazy(() => import('pages/categories/categories'))
const NotFound = lazy(() => import('pages/notFound'))
const Profile = lazy(() => import('pages/profile/profile'))

export function App() {
  const [user, loading] = useAuthState(auth)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (user?.email && !loading) dispatch(getCartItems({ email: user.email }))
  }, [user, loading])

  return (
    <ScrollToTop>
      <Header />
      <Suspense fallback={<div>loading...</div>}>
        <main>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/categories/:category" element={<Shop />} />
              <Route
                path="/categories/:category/:productId"
                element={<Product />}
              />
              <Route path="/categories" element={<Categories />} />
              <Route
                path="/cart"
                element={
                  <RequireAuth>
                    <Cart />
                  </RequireAuth>
                }
              />
              <Route
                path="/profile"
                element={
                  <RequireAuth>
                    <Profile />
                  </RequireAuth>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </main>
      </Suspense>
      <Notification />
      <Footer />
    </ScrollToTop>
  )
}
