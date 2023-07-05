import { useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryList from '../components/CategoryList';
import ProductsList from '../components/ProductsList';
import { getProductsFromCategoryAndQuery } from '../services/api';
import { ProductType } from '../types/types';

function Home() {
  const [listOfProducts, setListOfProducts] = useState<ProductType[]>([]);
  const [searchInput, setSearchInput] = useState('');

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await getProductsFromCategoryAndQuery('', searchInput);
    setListOfProducts(response);
  };

  return (
    <>
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          onChange={ handleInput }
          value={ searchInput }
          data-testid="query-input"
        />
        <button
          type="submit"
          data-testid="query-button"
        >
          Search
        </button>
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
      <ProductsList list={ listOfProducts } />
    </>
  );
}

export default Home;
