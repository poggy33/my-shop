import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";

const Mac = ({handleClick}) => {
  //fething data from server.js
  const [mac, setMac] = useState([{}]);
useEffect(() => {
  fetch("/mac").then(response => response.json()).then(data => setMac(data))
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
          { mac.map((item) => (
            <Cards key={item.id} item={item} handleClick={handleClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mac;
