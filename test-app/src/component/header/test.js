import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findByTestAttr } from './../../../utils/index';

const setupComponent = (props = {}) => { //a arrow function
    const component = shallow(<Header {...props} />);
    return component;
}

describe('Header Component', () => {

    let component;
    beforeEach(() => {
        component = setupComponent();
    });

    it('Should render without errors', () => {
        // console.log(component.debug()); // 可以这样看shallow的component是啥样的
        const wrapper = findByTestAttr(component, 'headerComponent'); // find by className
        expect(wrapper.length).toEqual(1);
    });

    it('Should render a logo', () => {
        const logo = findByTestAttr(component, 'logoIMG'); // find by className
        expect(logo.length).toEqual(1);
    })
});