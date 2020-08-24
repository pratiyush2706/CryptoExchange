import { SET_ALL_COINS_DATA, SET_ACTIVE_COIN, SET_INPUT_VALUE, IS_LOADING_COINS_DATA } from '../../actions/dashboard.actions';

const initialState = {
  isFixed: false,
  sendCoin: {},
  getCoin: {},
  allCoins: [],
  activeCoin: {},
  inputCoinValue: '',
  isLoading: true,
  isChecked: false,
};

const dashboardDetails = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case SET_ALL_COINS_DATA: {
      const { allCoins } = action;
      return { ...state, allCoins };
    }
    case SET_ACTIVE_COIN: {
      const { sendCoin, getCoin } = action;
      return { ...state, sendCoin, getCoin };
    }
    case SET_INPUT_VALUE: {
      const { inputCoinValue } = action;
      return { ...state, inputCoinValue };
    }
    case IS_LOADING_COINS_DATA: {
      const { isLoading } = action;
      return { ...state, isLoading };
    }
    default:
      return state;
  }
};

export default dashboardDetails;
