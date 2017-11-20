import {combineReducers} from 'redux';
import notificationReducers from './notificationReducers.js';
import toggleMenu from './menuReducers.js';

const allReducers = combineReducers({
  notifications: notificationReducers,
  menu: toggleMenu,
});

export default allReducers;
