import { combineReducers } from 'redux';
import posts from './posts/reducer';

export default combineReducers({ // combine all the reducers,store里至少有一个reducer
    posts // 返回了一个state的attr with key="posts"
});


// TDD 先写test再写logic, we want to see test fails first