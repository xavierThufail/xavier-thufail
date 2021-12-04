const initialState = {
  user: {},
  isLogin: false,
  loading: false,
  error: null,
  items: []
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER/SET_USER':
      return {...state, user: action.payload};
    case 'USER/SET_LOGIN':
      return {...state, isLogin: action.payload};
    case 'USER/SET_LOADING':
      return {...state, loading: action.payload};
    case 'USER/SET_ERROR':
      return {...state, error: action.payload};
    case 'USER/SET_ITEMS':
      return {...state, items: action.payload};
    case 'USER/RESET':
      return initialState;
    default:
      return state;
  };
};
