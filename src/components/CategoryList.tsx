import { useEffect, useState } from 'react';
import { getCategories } from '../services/api';

type Categories = {
  id: string;
  name: string;
};

type CategoryListProps = {
  handleChangeCategory: (category: string) => void;
};

function CategoryList({ handleChangeCategory }: CategoryListProps) {
  const [categories, setCategories] = useState<Categories[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  const handleSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(event.target.value);
    handleChangeCategory(selectedCategory);
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
              id=""
              // Não está econtrando todas as categorias
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
