import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import OrderPlase from './components/OrderPlease/OrderPlase';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header> 
        <Routes>
          <Route path = "/" element = {<Shop></Shop>}></Route>
          <Route path = "shop" element = {<Shop></Shop>}></Route>
          <Route path = "review" element = {<OrderReview></OrderReview>}></Route>
          <Route path = "inventory" element = {<Inventory></Inventory>}></Route>
          <Route path = "confirmed" element = {<OrderPlase></OrderPlase>}></Route>
          <Route path = "*" element = {<NotFound></NotFound>}></Route>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
