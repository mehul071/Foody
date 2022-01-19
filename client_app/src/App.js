import "./App.css";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "../screens/HomePage";
import Register from "../src/screens/Register";
import CartScreen from "../src/screens/CartScreen";
import Login from "../src/screens/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route path="/" exact component={HomePage} />
        <Route path="/cart" exact component={CartScreen} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </BrowserRouter>
    </div>
  );
}

export default App;
