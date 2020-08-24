import React from 'react';
import PropTypes from 'prop-types';
import style from './toggleSwitch.module.css';

const ToggleSwitch = ({ name, checked, onToggle }) => (
  <label
    htmlFor={name}
    className={style.switch}
    onClick={() => {
      onToggle(!checked);
    }}
    style={{
      opacity: checked ? '1' : '0.3',
    }}
  >
    <input
      className={style.checkbox}
      type="checkbox"
      {...{ name, checked }}
      onChange={({ target }) => onToggle(target.checked)}
    />
    <div className={checked ? `${style.switchContainer} ${style.switchedOn}` : `${style.switchContainer} ${style.switchedOff}`}>
      <div
        className={checked ? `${style.switchSlider} ${style.onSlider}` : `${style.switchSlider} ${style.offSlider}`}
        style={{ transform: checked ? 'translateX(2.05rem)' : 'translateX(0.25rem)' }}
      />
    </div>
  </label>
);

ToggleSwitch.defaultProps = {
  checked: false,
  onToggle: () => { },
  isProfile: false,
};

ToggleSwitch.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onToggle: PropTypes.func,
  isProfile: PropTypes.bool,
};

export default ToggleSwitch;
