import { ProductType } from '../types/types';

type ProductCardProps = {
  product: ProductType;
};

function ProductCard({ product: { id, title, thumbnail, price } }: ProductCardProps) {
  return (
    <div data-testid="product">
      <p>{title}</p>
      <img src={ thumbnail } alt={ id } />
      <p>{price}</p>
    </div>
  );
}

export default ProductCard;
