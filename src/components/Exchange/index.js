import React from 'react';
import { connect } from 'react-redux';
import style from './exchange.module.css';
import { SET_INPUT_VALUE, getExchangeRate } from '../../actions/dashboard.actions';
import InputBox from '../InputBox';

const mapStateToProps = state => state.dashboard;

const Exchange = ({ allCoins, sendCoin, getCoin, inputCoinValue, exchangedCoinValue, exchangeCoins, dispatch }) => {

  const onCoinChange = (event) => {
    console.log(event.target.value);

  }
  return (
    <div className={style.container}>
      <div className={style.sendContent}>
        <div className={style.title}>
          Send {sendCoin.name ? sendCoin.name : ''}
        </div>
        <div className={style.input}>
          <InputBox
            isValid
            type="number"
            label="Exchange"
            name="exchangeRate"
            value={inputCoinValue}
            onChange={({ target }) => {
              dispatch({ type: SET_INPUT_VALUE, inputCoinValue: target.value });
              dispatch(getExchangeRate(sendCoin.symbol, getCoin.symbol));
            }}
            style={{
              fontFamily: 'inherit',
              fontWeight: '700',
              fontSize: '1.1rem',
              borderRight: '2px solid #e3e8ef',
              fontWeight: '700',
              fontSize: '18px',
              color: '#353b48',
              flex: '60%',
            }}
          />
          <select
            className={style.coinSelector}
            name="coins"
            onChange={onCoinChange}
            value={sendCoin.value}
            style={{
              height: '100%',
              flex: '40%'
            }}
          >
            {allCoins.map((coin, index) => (
              <option
                key={coin.logoUrl}
                value={sendCoin.name}
              >
                {coin.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={style.receiveContent}>
        <div className={style.title}>
          Get {getCoin.name ? getCoin.name : ''}
        </div>
        <div className={style.input}>
          <InputBox
            isValid
            type="number"
            label="Exchange"
            name="exchangeRate"
            value={exchangedCoinValue}
            onChange={({ target }) => {
              dispatch({ type: SET_INPUT_VALUE, inputCoinValue: target.value });
            }}
            disabled
            style={{
              fontFamily: 'inherit',
              fontWeight: '700',
              fontSize: '1.1rem',
              borderRight: '2px solid #e3e8ef',
              fontWeight: '700',
              fontSize: '18px',
              color: '#353b48',
              flex: '60%',
            }}
          />
          <select
            className={style.coinSelector}
            name="coins"
            onChange={onCoinChange}
            value={getCoin.value}
            style={{
              height: '100%',
              flex: '40%'
            }}
          >
            {exchangeCoins.map((coin, index) => (
              <option
                key={coin.logoUrl}
                value={sendCoin.name}
              >
                {coin.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, null)(Exchange);
