import "./App.css";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "../src/screens/HomePage";
import Register from "../src/screens/Register";
import CartScreen from "../src/screens/cartScreen";
import Login from "../src/screens/Login";
import Fotter from "./Components/Fotter";

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
      <Fotter />
    </div>
  );
}

export default App;
