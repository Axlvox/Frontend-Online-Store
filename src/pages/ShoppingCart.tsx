import { ProductType } from '../types/types';
import ShoppingCartCard from '../components/ShoppingCartCard';

type ShoppingCartProps = {
  shoppingList: ProductType[],
};
function ShoppingCart({ shoppingList }: ShoppingCartProps) {
  return (
    <div>
      {shoppingList.length === 0 ? (
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>)
        : shoppingList.map((product) => (
          <ShoppingCartCard product={ product } key={ product.id } />
        ))}
    </div>
  );
}

export default ShoppingCart;
