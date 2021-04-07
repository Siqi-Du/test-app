import { combineReducers } from 'redux';
import success from './successReducer';

export default combineReducers({ // combine all the reducers,store里至少有一个reducer
    success
});