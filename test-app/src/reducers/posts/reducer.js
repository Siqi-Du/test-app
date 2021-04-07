import {types} from './../../actions/types';

export default (state=[], action) => {
    // aciton 有type和payload(new state array)
    switch(action.type){ 
        case types.GET_POST:
            return action.payload;
        default:
            return state;
    }
}

// reducers are functions with switch statement
// check action type matches, return new piece of state; 
// if not match, return default piece of state(the state array)

// when we dispatch an action, every reducer in the store receive that action and return a state