import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductType } from '../types/types';
import ShoppingCartCard from '../components/ShoppingCartCard';

type ShoppingCartProps = {
  shoppingList: ProductType[],
  setShoppingList: React.Dispatch<React.SetStateAction<ProductType[]>>
};
function ShoppingCart({ shoppingList, setShoppingList }: ShoppingCartProps) {
  const [filterShoppingList, setFilterShoppingList] = useState(shoppingList);

  const handleDeleteProduct = (id: string | number) => {
    const filterProductDeleted = filterShoppingList
      .filter((product) => product.id !== id);
    setFilterShoppingList(filterProductDeleted);
    setShoppingList(filterProductDeleted);
  };
  return (
    <div>
      <Link to="/">Voltar</Link>
      <div>
        {filterShoppingList.length === 0 ? (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>)
          : filterShoppingList.map((product) => (
            <ShoppingCartCard
              handleDelete={ handleDeleteProduct }
              product={ product }
              key={ product.id }
            />
          ))}
      </div>
    </div>
  );
}

export default ShoppingCart;
