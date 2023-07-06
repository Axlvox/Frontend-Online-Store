import { useEffect, useState } from 'react';
import { getCategories, getProductsByCategory } from '../services/api';
import { ProductType } from '../types/types';

type Categories = {
  id: string;
  name: string;
};

type CategoryListProps = {
  handleChangeCategory: (listProducts: ProductType[]) => void;
  handleCategory: (category: string) => void;
};

function CategoryList({ handleChangeCategory, handleCategory }: CategoryListProps) {
  const [categories, setCategories] = useState<Categories[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  const handleSelected = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const data = await getProductsByCategory(event.target.value);
    setSelectedCategory(event.target.value);
    handleCategory(event.target.value);
    console.log(data);
    handleChangeCategory(data.results);
  };

  return (
    <aside>
      <h3>Categorias:</h3>

      {categories.length !== 0 && (
        categories.map((category) => (
          <label key={ category.id }>
            {category.name}
            <input
              data-testid="category"
              type="radio"
              name="category-buttons"
              value={ category.id }
              checked={ selectedCategory === category.id }
              onChange={ handleSelected }
            />
          </label>
        ))
      )}
    </aside>
  );
}

export default CategoryList;
