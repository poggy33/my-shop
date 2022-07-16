import React, { useState, useEffect } from "react";
const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);

  const handleChange = (amount, id) => {
    const idCurrent = id;
    const amountCurrent = Number(amount);
    const arr = cart;
    arr.map((item) => {
      if (item.id === idCurrent) item.amount = amountCurrent;
    });
    setCart([...arr]);
    const arr2 = arr.filter((item) => item.amount > 0);
    let deletedItem = arr.filter((item) => item.amount <= 0);
    if(deletedItem[0]) {
      deletedItem[0].amount = 1;
    }
    
    console.log(deletedItem);
    console.log(arr2);
    setCart(arr2);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <div className="containercart">
      <div className="form">
        <form action="">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" required />
          <label htmlFor="phone">Phone:</label>
          <input type="text" name="phone" id="phone" required />
          <label htmlFor="adress">Adress:</label>
          <input type="text" name="adress" id="adress" required />
        </form>
      </div>

      <div className="cart">
        <div className="overflow">
        {cart.length === 0 ? <h1>Your Cart is empty...</h1> : null }
        {cart.map((item) => (
          <div className="basket" key={item.id}>
            <div className="cart-item">
              <img src={item.img} alt="yooo" />
              <div className="cart-price">
                <h4>{item.title}</h4>
                <p>
                  <strong>Price {item.price}$</strong>
                </p>
                <input
                  type="number"
                  name=""
                  id={item.id}
                  value={item.amount}
                  onChange={(event) =>
                    handleChange(event.target.value, item.id)
                  }
                />
              </div>
            </div>
          </div>
        ))}
        </div>
        <div className="checkout">
          <h3>Total price: {price.toFixed(2)}$</h3>
          <button type="submit" className="submit">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
