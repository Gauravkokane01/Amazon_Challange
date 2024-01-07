import Checkout from "./Checkout";

import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
   <diV>
   <BrowserRouter>
   <Routes>
   <Route exact path="/" element={<Home></Home>}/>
   
   <Route path="/checkout" element={<Checkout></Checkout>} />
   </Routes>
   </BrowserRouter>
   
   </diV>
  )
}

export default App;
