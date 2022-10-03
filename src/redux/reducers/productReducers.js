const initialState = {
  products: []
};

export const productReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return {
        ...state, 
        products: action.products
      };
    default:
      return state;
  }
};

export const selectedproductReducers = (state = initialState, {type, product}) => {
  switch (type) {
    case 'GET_SELECTED_PRODUCT':
      return {
        ...state, 
        products: product
      };
    default:
      return state;
  }
};
