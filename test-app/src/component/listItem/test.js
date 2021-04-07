import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAtrr, checkProps} from './../../../Utils';
import ListItem from './index'; // imports the testing component!!!!


describe('ListItem Component', () => {

    describe('Checking PropTypes', () => {

        it('Should NOT throw warning', () => {
            const expectedProps = {
                title: 'example title',
                desc: 'example desc'
            };
            const propsError = checkProps(ListItem, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('Component Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'example title',
                desc: 'example desc'
            };
            wrapper = shallow(<ListItem {...props}/>);
        });

        it('Should render without error', () => {
            const component = findByTestAtrr(wrapper, "listItemComponent");
            expect(component.length).toBe(1);
        });

        it('Should render a title', () => {
            const title = findByTestAtrr(wrapper, "componentTitle");
            expect(title.length).toBe(1);
        });

        it('Should render a desc', () => {
            const desc = findByTestAtrr(wrapper, 'componentDesc');
            expect(desc.length).toBe(1);
        })
        
    });

    describe('Should NOT render', () => {
        let wrapper;
        beforeEach(() => {
            const props = { // 没有title不render
                desc: 'example desc'
            };
            wrapper = shallow(<ListItem {...props}/>);
        });

        it('component is not redered', () =>{
            const component = findByTestAtrr(wrapper, "listItemComponent");
            expect(component.length).toBe(0);
        })
    });
});