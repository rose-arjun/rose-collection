import { BrowserRouter,Routes,Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Categories from "./components/Categories";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import Footer from "./components/Footer";


export default function App()
{
  return(
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/category/:name" element={<CategoryPage />}/>
      <Route path="/product/:id" element={<ProductPage/>}/>
    </Routes>    
    <Footer/>
  
    </BrowserRouter>

  );
}