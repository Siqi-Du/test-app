import { combineReducers } from 'redux';
import postsReducer from './posts/reducer';

export default combineReducers({ // combine all the reducers,store里至少有一个reducer
    postsReducer
});

// reducer return a new state
// TDD 先写test再写logic, we want to see test fails first