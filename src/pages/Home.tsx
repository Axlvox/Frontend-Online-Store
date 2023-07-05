import { useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryList from '../components/CategoryList';
import ProductsList from '../components/ProductsList';

function Home() {
  const [listOfProducts] = useState([]);

  return (
    <>
      <form>
        <input type="text" name="" id="" />
      </form>
      <Link to="/shoppingCart" data-testid="shopping-cart-button">Carrinho</Link>
      {
        listOfProducts.length === 0 && (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        )
      }
      <CategoryList />
      <ProductsList />
    </>
  );
}

export default Home;
