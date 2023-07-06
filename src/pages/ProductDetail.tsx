import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductDetailProps, ProductType } from '../types/types';
import { getCategories } from '../services/api';

type Categories = {
  id: string;
  name: string;
};

type ProductProps = {
  list: ProductType[];
};

const navigate = useNavigate();
const handleClick = () => {
  navigate('/ProductList');
};

function ProductDetail({ title, image, price, detailLink }: ProductDetailProps) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <div data-testid="product">
      <button
        data-testid="shopping-cart-button"
        onClick={ handleClick }
      >
        Voltar
      </button>
      {categories.length !== 0 && (
        categories.map((category) => (
          <>
            <h2
              data-testid="product-detail-name"
            >
              {category.title}
            </h2>
            <h2
              data-testid="product-detail-price"
            >
              {category.price}
            </h2>
            <img
              data-testid="product-detail-image"
              src={ category.image }
              alt={ category.title } />
            <ul>
              <li>{ category.detailLink }</li>
            </ul>
          </>
        ))
      )}
    </div>
  );
}

export default ProductDetail;
