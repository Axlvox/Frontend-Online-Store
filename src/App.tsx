import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/shoppingCart" element={ <ShoppingCart /> } />
      <Route
        path="/ProductDetail"
        element={ <ProductDetail
          title={ ' ' }
          image={ ' ' }
          price={ ' ' }
          detailLink={ ' ' }
        /> }
      />
    </Routes>
  );
}

export default App;
