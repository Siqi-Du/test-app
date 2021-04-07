import React from 'react';
import {findByTestAtrr, checkProps} from './../../../Utils/index';
import SharedButton from './index';
import { shallow } from 'enzyme';

describe('SharedButton Component', () =>{
    
    describe('Checking PropTypes', ()=>{
        it('Should NOT throw a warning', () => {
            const expectedProps = {
                buttonText: 'Example Button text',
                emitEvent: () => {} // emitEvent is a function
            };
            const propsErr = checkProps(SharedButton, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });

    describe('Renders', () => {
        let wrapper;
        let mockFunction;

        beforeEach(() => {
            mockFunction = jest.fn();
            const props = {
                buttonText: 'Example Button text',
                emitEvent: mockFunction
            }
            wrapper = shallow(<SharedButton {...props}/>);
        });

        it('Should render a button', () => {
            const button = findByTestAtrr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        });

        //// we simulate a click event, then ckeck the # of calls to emitEvent() should be 1
        it('Should emit callback on click event', () => {
            const button = findByTestAtrr(wrapper, "buttonComponent");
            button.simulate('click'); //simulate a click event
            
            const callback = mockFunction.mock.calls;
            expect(callback.length).toBe(1); //ckeck the # of calls to emitEvent() should be 1
        })
    });

});

