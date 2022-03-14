import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="nav-main">
      <nav>
        <Link className="nav" to="/">
          Home
        </Link>
        <Link className="nav" to="/allproducts">
          All Products
        </Link>
        <Link className="nav" to="/cart">
          My Cart
        </Link>
        <Link className="nav" to="/myorder">
          My Order
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
