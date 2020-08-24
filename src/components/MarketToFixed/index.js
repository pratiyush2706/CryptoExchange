import React from 'react';
import style from './marketToFixed.module.css';
import ToggleSwitch from '../ToggleSwitch';

const MarketToFixed = ({ isChecked, onToggle }) => {
  return (
    <div className={style.container}>
      <div className={style.text} style={{ paddingRight: '0.6rem' }}>
        Market Rate
      </div>
      <div className={style.toggle}>
        <ToggleSwitch checked={isChecked} onToggle={onToggle} />
      </div>
      <div className={style.text}>
        Fixed
      </div>
    </div>
  );
};

export default MarketToFixed;
