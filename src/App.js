import React from "react";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
     
    </>
  );
}

export default App;
