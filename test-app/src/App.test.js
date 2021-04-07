import App from './App';
import { shallow } from 'enzyme';
import { findByTestAtrr, testStore } from './../Utils';
import React from 'react';

const setUp = (initialState={}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />).childAt(0).dive(); 
    // <ContextProvider value={{...}}>
    //     <App store={{...}} posts={{...}} fetchPosts={[Function (anonymous)]} />
    // </ContextProvider>
    // 从declaration里得到具体的div !!!!!!! => .childAt(0).dive()
    return wrapper;
};

describe('App Component', () => {

    let wrapper;
    beforeEach(() => {
        const initialState = {
            posts: [{
                title: 'Example title 1',
                body: 'Some text'
            }, {
                title: 'Example title 2',
                body: 'Some text'
            }, {
                title: 'Example title 3',
                body: 'Some text'
            }]
        }
        wrapper = setUp(initialState);
    });

    it('Should render without errors', () => {
        const component = findByTestAtrr(wrapper, 'appComponent');
        expect(component.length).toBe(1);
    });

    // have an instance of this class App and trigger this function to see if the state is updated(hideBtn changed)
    it('exampleMethod_updateState() Method should update state as expected', () => {
        const classInstance = wrapper.instance();
        classInstance.exampleMethod_updateState();
        const newState = classInstance.state.hideBtn;
        expect(newState).toBe(true); // 因为initialState is false
    });

    it('exampleMethod_returnsAValue Method should return value as expected', () => {
        const classInstance = wrapper.instance();
        const newValue = classInstance.exampleMethod_returnsAValue(5);
        expect(newValue).toBe(6);
    });

});