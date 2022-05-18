import Header from "./components/header";
import Login from "./pages/login";
import Cart from "./pages/cart";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import Footer from "components/footer";
import Contact from "pages/contact";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<Cart />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
