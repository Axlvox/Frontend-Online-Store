import { ProductType } from '../types/types';
import ProductCard from './ProductCards';

type ProductProps = {
  list: ProductType[];
  shoppingList: ProductType[];
  setShoppingList: React.Dispatch<React.SetStateAction<ProductType[]>>;

};

function ProductsList({ list, shoppingList, setShoppingList }: ProductProps) {
  return (
    <div>
      {list.map((product) => (
        <ProductCard
          setShoppingList={ setShoppingList }
          shoppingList={ shoppingList }
          product={ product }
          key={ product.id }
        />
      ))}
      {list.length < 1 && <p>Nenhum produto foi encontrado</p>}
    </div>
  );
}

export default ProductsList;
