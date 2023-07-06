import { useNavigate } from 'react-router-dom';
import { ProductType } from '../types/types';
import ProductCard from './ProductCards';

type ProductProps = {
  list: ProductType[];
};

function ProductsList({ list }: ProductProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/ProductDetail');
  };

  return (
    <div>
      {list.map((product) => (
        <>
          <ProductCard product={ product } key={ product.id } />
          <button
            data-testid="product-detail-link"
            onClick={ handleClick }
          >
            Detalhe
          </button>

        </>
      ))}
      {list.length < 1 && <p>Nenhum produto foi encontrado</p>}
    </div>
  );
}

export default ProductsList;
