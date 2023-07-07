import { useState } from 'react';
import { ProductType } from '../types/types';

type ShoppingCartCardProps = {
  product: ProductType
  handleDelete: ((id: string | number) => void)
};

function ShoppingCartCard({ product, handleDelete }: ShoppingCartCardProps) {
  const [countProducts, setCountProducts] = useState(1);
  const [disableDecrement, setDisableDecrement] = useState(true);

  const handleDecrement = () => {
    if (countProducts > 1) {
      setDisableDecrement(false);
      setCountProducts(countProducts - 1);
    } else {
      setDisableDecrement(true);
    }
  };

  const handleIncrement = () => {
    setDisableDecrement(false);
    setCountProducts(countProducts + 1);
  };

  const handleDeleteId = () => {
    handleDelete(product.id);
  };

  return (
    <div>
      <button data-testid="remove-product" onClick={ handleDeleteId }>X</button>
      <h3 data-testid="shopping-cart-product-name">{product.title}</h3>
      <p>{product.price}</p>
      <button
        data-testid="product-decrease-quantity"
        onClick={ handleDecrement }
        disabled={ disableDecrement }
      >
        -
      </button>
      <p data-testid="shopping-cart-product-quantity">{ countProducts }</p>
      <button
        data-testid="product-increase-quantity"
        onClick={ handleIncrement }
      >
        +
      </button>
    </div>
  );
}

export default ShoppingCartCard;
