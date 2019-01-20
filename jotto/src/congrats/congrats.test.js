import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'
import Congrats from './congrats'
import {findByTestAttribute} from "../testUtils";

Enzyme.configure({adapter: new EnzymeAdapter()});

/// function to create shallowWrapper for Congrats component
const setup = (props={})=> {
    return (shallow(<Congrats{...props}/>))
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