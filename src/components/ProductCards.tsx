import { Link } from 'react-router-dom';
import { ProductType } from '../types/types';

type ProductCardProps = {
  product: ProductType;
};

function ProductCard({ product: { id, title, thumbnail, price } }: ProductCardProps) {
  return (
    <Link data-testid="product-detail-link" to={ `/productdetail/${id}` }>
      <div data-testid="product">
        <p>{title}</p>
        <img src={ thumbnail } alt={ id } />
        <p>{price}</p>
      </div>
    </Link>

  );
}

export default ProductCard;
