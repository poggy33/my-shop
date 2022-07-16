import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";

const Cola = ({ handleClick }) => {
    //fething data from server.js
    const [cola, setCola] = useState([{}]);
    useEffect(() => {
      fetch("/cola").then(response => response.json()).then(data => setCola(data))
    },[]);
    //
  return (
    <div className="home">
      <div className="markets">
        <Link to="/" className="link">
          McDonald’s
        </Link>
        <Link to="/cola">Coca-Cola</Link>
        <Link to="/pepsi">Pepsi-Cola</Link>
      </div>

      <div className="produkts">
        <div className="item-container">
          {cola.map((item) => (
            <Cards key={item.id} item={item} handleClick={handleClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cola;
