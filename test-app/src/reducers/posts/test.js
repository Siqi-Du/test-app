import {types} from './../../actions/types';
import postsReducer from './reducer';

// when testing a reducer, we are tesing a function so we need to import this function(postsReducer) first

describe('Posts reducer', () => {
    it('Should return default state', () => { // test the type of action not match return default state[]
        const newState = postsReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    it('Should return new state if receiving type', () =>{
        
        // payload of our action(state array)
        const posts = [
            {title: 'Test1'},
            {title: 'Test1'},
            {title: 'Test1'}
        ];

        const newState = postsReducer(undefined, {
            type: types.GET_POST,
            payload: posts
        });
        expect(newState).toEqual(posts);

    });
});