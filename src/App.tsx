import Header from "./components/header";
import Login from "./pages/login";
import Cart from "./pages/cart";
import Home from "./pages/home";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="cart" element={<Cart />}></Route>
      </Routes>
    </main>
  );
}

export default App;
