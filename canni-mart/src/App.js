import logo from "./logo.svg";
import "./App.css";

import { Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home.js";
import AllProducts from "./pages/AllProducts.js";
import Cart from "./pages/Cart.js";
import MyOrder from "./pages/MyOrder.js";
import Product from "./components/Product.js";

function App() {
  return (
    <div className="App">
      <div className="navbar-container">
        <Navbar />
        <p>Hello from App</p>
      </div>

      <Route
        path="/"
        exact
        render={() => {
          return <Home />;
        }}
      />

      <Route
        path="/allproducts"
        exact
        render={() => {
          return <AllProducts />;
        }}
      />

      <Route
      path="/cart"
      exact
      render={() => {
        return <Cart />
      }}
      />

      <Route
      path="/myorder"
      exact
      render={() => {
        return <MyOrder />
      }}
      />

      <Route
      path="/product/:id"
      exact
      render={() =>{
        return <Product />
      }}
      />

    </div>
  );
}

export default App;
