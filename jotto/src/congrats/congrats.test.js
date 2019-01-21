import React from 'react';
import {shallow} from 'enzyme';

import Congrats from './congrats'
import {findByTestAttribute,checkProps} from "../testUtils";


const defaultProps = {success:false};

/// function to create shallowWrapper for Congrats component
const setup = (props={})=> {
    const setupProps = {...defaultProps,...props};
    return (shallow(<Congrats{...setupProps}/>))
};

test('render without error',()=>{
    const wrapper = setup();
    const component = findByTestAttribute(wrapper,"component-congrats");
    expect(component.length).toBe(1)
});

test("render no text when props 'success' is false ",()=>{
    const wrapper = setup({success:false});
    const component = findByTestAttribute(wrapper,"component-congrats");
    expect(component.text()).toBe('')
});

test("render text when props 'success' is true",()=>{
    const wrapper = setup({success:true});
    const message = findByTestAttribute(wrapper,"congrats-message");
    expect(message.text().length).not.toBe(0)
});

test('do not throw warning with expected props',()=>{
    const expectedProps = {success:false};
    checkProps(Congrats,expectedProps)
});