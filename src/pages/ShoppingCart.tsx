import { useState } from 'react';

function ShoppingCart() {
  const [cartList] = useState([]);
  return (
    <div>
      {cartList.length < 1 && (
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>)}
    </div>
  );
}

export default ShoppingCart;
