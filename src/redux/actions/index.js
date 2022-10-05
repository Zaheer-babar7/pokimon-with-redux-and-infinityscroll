import axios from 'axios'

export const fetchPokimons = () => async (dispatch) => {
    const pokimons = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
        .catch((err) => {
          console.log('err', err);
        });
        const dataPromises = pokimons.data.results.map((val) => {
          return axios.get(val.url)
        })
        const data = await Promise.all(dataPromises)
  dispatch({type: 'FETCH_POKIMON', pokimon: {data, next: pokimons.data.next}})
} 

export const fetchSelectedPokimons   = (id, setLoading) => 
  async (dispatch) => {
    const response = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .catch((err) => {
      console.log('err', err);
    });
    dispatch({type: 'GET_SELECTED_POKIMON', pokimon: response.data})
    setLoading(false)
}

export const loadMore = (url) => async (dispatch) => {
  const pokimons = await axios.get(url)
      .catch((err) => {
        console.log('err', err);
      });
      const dataPromises = pokimons.data.results.map((val) => {
        return axios.get(val.url)
      })
      const data = await Promise.all(dataPromises)
dispatch({type: 'FETCH_MORE_POKIMON', pokimon: {data, next: pokimons.data.next}})
} 

