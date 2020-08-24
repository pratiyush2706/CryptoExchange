import React, { useState, useEffect } from 'react';
import style from './dashboard.module.css';
import { connect } from 'react-redux';
import Options from '../../components/Options';
import MarketToFixed from '../../components/MarketToFixed';
import { getAllCoins } from '../../actions/dashboard.actions';
import Exchange from '../../components/Exchange';

const mapStateToProps = state => state.dashboard;

const Dashboard = ({ allCoins, dispatch, isLoading, isChecked }) => {

  useEffect(() => {
    dispatch(getAllCoins());
  }, []);

  return (
    <div className={style.container}>
      {isLoading ? (
        <div className={style.loader}>
          Show Loader Here
          </div>
      ) : (
          <>
            <div className={style.firstRow}>
              <Options />
              <MarketToFixed
                isChecked={isChecked}
                onToggle={() => {
                }}
              />
            </div>
            {allCoins.length && (
              <div className={style.exchange}>
                <Exchange />
              </div>
            )}
          </>
        )}
    </div>
  );
};

export default connect(mapStateToProps, null)(Dashboard);
