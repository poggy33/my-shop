import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Mac from "./components/Mac";
import Cola from "./components/Cola";
import Pepsi from "./components/Pepsi";
import Cart from "./components/Cart";
import { Routes, Route } from "react-router-dom";

function App() {

  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    console.log(item)
  };
  return (
    <div className="App">
      <Header n={cart.length} />
      <Routes>
        <Route path="/" element={<Mac handleClick={handleClick} />} />
        <Route path="/cola" element={<Cola handleClick={handleClick} />} />
        <Route path="/pepsi" element={<Pepsi handleClick={handleClick} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </div>
  );
}

export default App;
