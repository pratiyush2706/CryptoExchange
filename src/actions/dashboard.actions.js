import { get, post } from '../utils/makeRequests';

export const SET_ALL_COINS_DATA = 'SET_ALL_COINS_DATA';
export const IS_LOADING_COINS_DATA = 'IS_LOADING_COINS_DATA';
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const SET_ACTIVE_COIN = 'SET_ACTIVE_COIN';

export const getAllCoins = () => async (dispatch) => {
  try {
    dispatch({ type: IS_LOADING_COINS_DATA, isLoading: true });
    const response = await get('https://run.mocky.io/v3/6a68f6d1-c9bc-4c4a-bc5a-3b4598f67caa');
    const { data } = response;
    const sendCoin = data.filter(coin => coin.is_active);
    console.log(sendCoin[0]);

    dispatch({ type: SET_ACTIVE_COIN, sendCoin: sendCoin[0], getCoin: sendCoin[1] });
    dispatch({ type: SET_ALL_COINS_DATA, allCoins: data });
    dispatch({ type: IS_LOADING_COINS_DATA, isLoading: false });
  } catch (error) {
    dispatch({ type: IS_LOADING_COINS_DATA, isLoading: false });
    console.log(error);
  }
};

export const getExchangeRate = (sendCode, getCode) => async (dispatch) => {
  try {
    const response = await post(`https://min-api.cryptocompare.com/data/price?fsym=${sendCode}&tsyms=${getCode} `);
    console.log(response);

  } catch (error) {
    console.log(error);
  }
}