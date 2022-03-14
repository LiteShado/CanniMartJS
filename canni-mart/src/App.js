import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'

function App() {
  return (
    <div className="App">
      <div className="navbar-container">
      <Navbar />
        <p>
          Hello from App
        </p>
      </div>
    </div>
  );
}

export default App;
