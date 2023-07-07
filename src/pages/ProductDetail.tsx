import { useNavigate, useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductWithAttributes } from '../types/types';
import { getProductById } from '../services/api';

function ProductDetail() {
  const [product, setProduct] = useState<ProductWithAttributes>();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClickCart = () => {
    navigate('/shoppingcart');
  };

  useEffect(() => {
    const fetchProductById = async () => {
      const data = await getProductById(id ?? '');
      setProduct(data);
    };

    fetchProductById();
  }, [id]);

  return (
    <div data-testid="product">
      <Link to="/">Voltar</Link>
      <button
        data-testid="shopping-cart-button"
        onClick={ handleClickCart }
      >
        Carrinho
      </button>
      {product
        ? (
          <>
            <h2
              data-testid="product-detail-name"
            >
              {product.title}
            </h2>
            <h2
              data-testid="product-detail-price"
            >
              {product.price}
            </h2>
            <img
              data-testid="product-detail-image"
              src={ product.thumbnail }
              alt={ product.title }
            />
            <ul>
              { product.attributes.map((attribute) => (
                <li key={ attribute.value_id }>
                  <p>{ attribute.name }</p>
                  <p>{ attribute.value_name }</p>
                </li>
              )) }
            </ul>
          </>
        )
        : (<p>Produto não entrado</p>)}
    </div>
  );
}

export default ProductDetail;
