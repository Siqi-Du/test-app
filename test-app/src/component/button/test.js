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
        beforeEach(() => {
            const props = {
                buttonText: 'Example Button text',
                emitEvent: () => {

                }
            }
            wrapper = shallow(<SharedButton {...props}/>);
        });

        it('Should render a button', () => {
            const button = findByTestAtrr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        })
    });

});