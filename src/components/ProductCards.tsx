import { ProductType } from '../types/types';

type ProductCardProps = {
  product: ProductType;
  setShoppingList:React.Dispatch<React.SetStateAction<ProductType[]>>
  shoppingList: ProductType[];

};

function ProductCard({ product: { id, title, thumbnail, price },
  setShoppingList, shoppingList }: ProductCardProps) {
  const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const list = [...shoppingList, { id, title, thumbnail, price }];
    setShoppingList(list);
  };
  return (
    <div data-testid="product">
      <p>{title}</p>
      <img src={ thumbnail } alt={ id } />
      <p>{price}</p>
      <button
        data-testid="product-add-to-cart"
        onClick={ (e) => handleClick(e) }
      >
        Adicionar ao carrinho
        {' '}

      </button>

    </div>
  );
}

export default ProductCard;
