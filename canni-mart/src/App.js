import logo from "./logo.svg";
import "./App.css";

import { Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home.js";

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
    </div>
  );
}

export default App;
