import checkPropTypes from 'check-prop-types'

export const findByTestAttribute =(wrapper,value)=>{
    return wrapper.find(`[data-test="${value}"]`)
};

export const checkProps = (component,propsToTest)=>{
    const propsError = checkPropTypes(component.propTypes,propsToTest,'props',component.name)
    expect(propsError).toBeUndefined();
};