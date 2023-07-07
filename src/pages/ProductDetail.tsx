import { useNavigate, useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductType } from '../types/types';
import { getProductById } from '../services/api';

type ProductDetailProps = {
  setShoppingList: React.Dispatch<React.SetStateAction<ProductType[]>>;
  shoppingList: ProductType[];
};

function ProductDetail({ setShoppingList, shoppingList }: ProductDetailProps) {
  const [product, setProduct] = useState<ProductType>();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClickCart = () => {
    navigate('/shoppingcart');
  };

  const HandleClick = () => {
    if (product) {
      setShoppingList([
        ...shoppingList,
        product,
      ]);
    }
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
            <button onClick={ HandleClick } data-testid="product-detail-add-to-cart">
              Adicionar ao Carrinho
            </button>
            <ul>
              { product.attributes && product.attributes.map((attribute) => (
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
