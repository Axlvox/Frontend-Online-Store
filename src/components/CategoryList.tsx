import { useEffect, useState } from 'react';
import { getCategories } from '../services/api';

type Categories = {
  id: string;
  name: string;
};

function CategoryList() {
  const [categories, setCategories] = useState<Categories[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <aside>
      <h3>Categorias:</h3>

      {categories.length !== 0 && (
        categories.map((category) => (
          <label key={ category.id }>
            {category.name}
            <input data-testid="category" type="radio" name="category-buttons" id="" />
          </label>
        ))
      )}
    </aside>
  );
}

export default CategoryList;
