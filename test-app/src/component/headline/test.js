import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import {findByTestAttr, checkProps} from './../../../utils/index';

const setupComponent = (props={}) => {
    const component = shallow(<Headline {...props} />);
    return component;
}


describe('Headline Component', () => {

    describe('Checking ProprTypes', () => {

        it('Should not throw a warning', () => { 
            
            const expectedProprs = { // create props that match the protypes schema(type spec)
                header: 'Test Header',
                desc: 'test desc',
                tempArr: [{
                    fName: "test fName",
                    lName: "test lName",
                    email: "test email",
                    age: 0,
                    status: false
                }]
            };
            const propsErr = checkProps(Headline, expectedProprs);
            expect(propsErr).toBeUndefined();
        })
    });

    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            const props = { // 自己创建props并pass给setupComponent()里的Header
                header : 'test header',
                desc : 'test desc'
            };
            wrapper = setupComponent(props);
        });

        it('Should reder without errors', () => {
            const component = findByTestAttr(wrapper, "HeadlineComponent");
            expect(component.length).toEqual(1);
        });

        it('Should render a H1', () => {
            const h1 = findByTestAttr(wrapper, 'header');
            expect(h1.length).toBe(1);
        });

        it('Should render a desc', () => {
            const desc = findByTestAttr(wrapper, 'desc');
            expect(desc.length).toBe(1);
        })
    });

    describe('Have no props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setupComponent();
        });

        it('Should not render', () => {
            const component = findByTestAttr(wrapper, "HeadlineComponent");
            expect(component.length).toBe(0);
        })
    });
});