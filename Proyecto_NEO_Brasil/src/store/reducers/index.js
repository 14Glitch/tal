// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu';
import message from './message';
import auth from './auth';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu, message, auth });

export default reducers;
