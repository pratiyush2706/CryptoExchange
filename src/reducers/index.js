import { combineReducers } from 'redux';
import homeReducer from './HomeReducer';
import dashboardReducer from './DashboardReducer';

const rootReducer = combineReducers({
  home: homeReducer,
  dashboard: dashboardReducer,
});

export default rootReducer;
