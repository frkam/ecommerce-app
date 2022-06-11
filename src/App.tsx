import { Routes, Route, Navigate } from "react-router-dom";
import { Notification } from "widgets/notification";
import { lazy, Suspense } from "react";

import { LoadingSpinner } from "components/utility/loadingSpinner";

import Header from "widgets/header/header";
import Footer from "widgets/footer/footer";

const Login = lazy(() => import("pages/login"));
const Cart = lazy(() => import("pages/cart"));
const Home = lazy(() => import("pages/home"));
const SignUp = lazy(() => import("pages/signup"));
const Contact = lazy(() => import("pages/contact/contact"));
const Shop = lazy(() => import("pages/shop/shop"));
const Categories = lazy(() => import("pages/categories/categories"));
const NotFound = lazy(() => import("pages/notFound"));

export function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>loading...</div>}>
        <main>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shop/:category" element={<Shop />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </main>
      </Suspense>
      <Notification />
      <Footer />
    </>
  );
}
