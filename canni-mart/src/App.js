import "./App.css";

import { Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Searchbar from "./components/Searchbar.js";
import Home from "./pages/Home.js";
import AllProducts from "./pages/AllProducts.js";
import Cart from "./pages/Cart.js";
import MyOrder from "./pages/MyOrder.js";
import Product from "./components/Product.js";
import OrderDetail from "./components/OrderDetail.js";
import ProductList from "./components/ProductList.js";
import FilteredResults from "./pages/FilteredResults";

function App() {
  return (
    <div className="App">
      <div className="navbar-container">
        <Navbar />
        <p>Hello from App</p>
        <Searchbar placeholder="Enter your search term" />
      </div>

      <Route
        path="/"
        exact
        render={() => {
          return <Home />;
        }}
      />

      <Route
        path="/results"
        exact
        render={() => {
          return <FilteredResults />;
        }}
      />

      <Route
        path="/cart"
        exact
        render={() => {
          return <Cart />;
        }}
      />

      <Route
        path="/myorder"
        exact
        render={() => {
          return <MyOrder />;
        }}
      />

      <Route
        path="/product/:id"
        render={() => {
          return <Product />;
        }}
      />

      <Route
        path="/order/:id"
        render={() => {
          return <OrderDetail />;
        }}
      />
    </div>
  );
}

export default App;
