import Header from "./components/header";
import Login from "./pages/login";
import Cart from "./pages/cart";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<Login />} />
        <Route path="cart" element={<Cart />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </main>
  );
}

export default App;
