import { SET_LOGIN } from '../../actions/home.actions';

const initialState = {
  isLogin: false,
};

const homeReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case SET_LOGIN: {
      const { isLogin } = action;
      return { ...state, isLogin };
    }
    default:
      return state;
  }
};

export default homeReducer;