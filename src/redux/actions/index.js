import axios from 'axios'

export const fetchProducts = () => 
  async (dispatch) => {
    const response = await axios
        .get('https://fakestoreapi.com/products')
        .catch((err) => {
          console.log('err', err);
        });
  dispatch({type: 'FETCH_PRODUCTS', products: response.data})
}

export const fetchSelectedProduct   = (id, setLoading) => 
  async (dispatch) => {
    const response = await axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .catch((err) => {
      console.log('err', err);
    });
    dispatch({type: 'GET_SELECTED_PRODUCT', product: response.data})
    setLoading(false)
}

