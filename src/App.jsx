import { BrowserRouter,Routes,Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Categories from "./components/Categories";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import Footer from "./components/Footer";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";


export default function App()
{
  return(
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/category/:name" element={<CategoryPage />}/>
      <Route path="/product/:id" element={<ProductPage/>}/>
      <Route path="/cart" element={<CartPage/>} />
      <Route path="/checkout" element={<CheckoutPage/>}/>
      <Route path="/order-success" element={<OrderSuccessPage/>}></Route>
    </Routes>    
    <Footer/>
  
    </BrowserRouter>

  );
}