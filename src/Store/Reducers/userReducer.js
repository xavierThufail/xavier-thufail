const initialState = {
  user: null,
  isLogin: false,
  loading: false,
  error: null
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
    default:
      return state;
  };
};
