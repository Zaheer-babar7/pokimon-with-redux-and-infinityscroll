const initialState = {
  pokemon: [],
  next: ""
};

export const pokimonReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POKIMON':
      return {
        ...state, 
        pokemon: action.pokimon.data,
        next: action.pokimon.next
      };
    case 'FETCH_MORE_POKIMON':
      return {
        ...state, 
        pokemon: [...state.pokemon, ...action.pokimon.data],
        next: action.pokimon.next
      };
    default:
      return state;
  }
};

export const selectedPokimonReducers = (state = initialState, {type, pokimon}) => {
  switch (type) {
    case 'GET_SELECTED_POKIMON':
      return {
        ...state, 
        pokemon: pokimon
      };
    default:
      return state;
  }
};
