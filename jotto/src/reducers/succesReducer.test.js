import {actionTypes} from "../actions";
import successReducer from './successReducer'

test('return default inital state of false when no action',()=>{
    const currState = successReducer(undefined,{});
    expect(currState).toBe(false)
});
test('return state or true when action CORRECT_GUESS',()=>{
    const newState= successReducer(undefined,{type:actionTypes.CORRECT_GUESS});
    expect(newState).toBe(true)
});