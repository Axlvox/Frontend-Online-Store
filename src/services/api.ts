export async function getCategories() {
  try {
    const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error();
  }
}

export async function getProductsByCategory(categoryId: string) {
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error();
  }
}

export async function getProductsFromCategoryAndQuery(categoryId: string, query: string) {
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error();
  }
}

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
