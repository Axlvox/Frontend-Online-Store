import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/shoppingCart" element={ <ShoppingCart /> } />
    </Routes>
  );
}

export default App;
