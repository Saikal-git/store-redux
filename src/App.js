import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Product";
import Favorite from "./components/Favorite";
import Basket from "./components/Basket";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/search/:title" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
