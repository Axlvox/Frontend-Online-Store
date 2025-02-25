import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import { ProductType } from './types/types';
import ProductDetail from './pages/ProductDetail';

function App() {
  const [shoppingCart, setShoppingCart] = useState<ProductType[]>(
    localStorage.shoppingCart ? JSON.parse(localStorage.shoppingCart) : [],
  );
  useEffect(() => {
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  return (
    <Routes>
      <Route
        path="/"
        element={ <Home
          shoppingList={ shoppingCart }
          setShoppingList={ setShoppingCart }
        /> }
      />
      <Route
        path="/shoppingcart"
        element={ <ShoppingCart
          shoppingList={ shoppingCart }
          setShoppingList={ setShoppingCart }
        /> }
      />
      <Route
        path="/productdetail/:id"
        element={ <ProductDetail
          setShoppingList={ setShoppingCart }
          shoppingList={ shoppingCart }
        /> }
      />
    </Routes>
  );
}

export default App;
