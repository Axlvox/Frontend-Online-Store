import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import { ProductType } from './types/types';

function App() {
  const [shoppingCart, setShoppingCart] = useState<ProductType[]>([]);
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
        path="/shoppingCart"
        element={ <ShoppingCart
          shoppingList={ shoppingCart }
        /> }
      />
    </Routes>
  );
}

export default App;
