import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import {findByTestAttr} from './../../../utils/index';
import Header from '../header';

const setupComponent = (props={}) => {
    const component = shallow(<Headline {...props} />);
    return component;
}


describe('Headline Component', () => {

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