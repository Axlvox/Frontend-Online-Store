import { ProductType } from '../types/types';

type ShoppingCartCardProps = {
  product: ProductType
};

function ShoppingCartCard({ product }: ShoppingCartCardProps) {
  return (
    <div>
      <h3 data-testid="shopping-cart-product-name">{product.title}</h3>
      <p>{product.price}</p>
      <p data-testid="shopping-cart-product-quantity">1</p>
    </div>
  );
}

export default ShoppingCartCard;
