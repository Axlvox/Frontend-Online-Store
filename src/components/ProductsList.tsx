import { ProductType } from '../types/types';
import ProductCard from './ProductCards';

type ProductProps = {
  list: ProductType[];
  shopingList: ProductType[];
  setShopingList: React.Dispatch<React.SetStateAction<ProductType[]>>;

};

function ProductsList({ list, shopingList, setShopingList }: ProductProps) {
  return (
    <div>
      {list.map((product) => (
        <ProductCard
          setShopingList={ setShopingList }
          shoppingList={ shopingList }
          product={ product }
          key={ product.id }
        />
      ))}
      {list.length < 1 && <p>Nenhum produto foi encontrado</p>}
    </div>
  );
}

export default ProductsList;
