import { Link } from "react-router-dom";
const Header = (props) => {
    return ( 
        <div className="header">
            <Link to="/">Shop</Link><span>|</span>
            <Link to="/cart">Shopping Cart</Link><span className="amount">{props.n}</span>
        </div>
     );
}
 
export default Header;