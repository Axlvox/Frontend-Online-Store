import { useState } from 'react';

function Home() {
  const [listOfProducts] = useState([]);

  return (
    <>
      <form>
        <input type="text" name="" id="" />
      </form>
      {
        listOfProducts.length === 0 && (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        )
      }
    </>
  );
}

export default Home;
