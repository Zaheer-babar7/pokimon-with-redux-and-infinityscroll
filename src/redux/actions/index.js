export const getAllProducts = (products) => {
  return {
    type: 'GET_ALL_PRODUCTS',
    products
  }
}

export const getProductById   = (product) => {
  return {
    type: 'GET_SELECTED_PRODUCT',
    product
  }
}
