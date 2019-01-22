import React from 'react'
import {shallow} from 'enzyme'
import {findByTestAttribute,checkProps} from "../testUtils";
import GuessedWords from "./guessedWords";

const defaultProps = {
    guessedWords: [{guessedWord: "train",letterMatch: 3}]
};


/// function to create shallowWrapper for GuessedWords component
const setup = (props={})=>{
    const setupProps= {...defaultProps,...props};
    return (shallow(<GuessedWords {...setupProps}/>))
};


test("render without any error",()=>{
    checkProps(GuessedWords,defaultProps)
});

describe("if there isn't any word guessed",()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = setup({guessedWords:[]});
    });
    test('render without any error',()=>{
        const component = findByTestAttribute(wrapper,'component-guessWords');
        expect(component.length).toBe(1)
    });

    test('render instruction to run',()=>{
        const instructions = findByTestAttribute(wrapper,'guessedWords-instruction');
        expect(instructions.text().length).not.toBe(0);
    });
});


describe("if there are words guessed",()=>{
    let guessedWords= [{guessedWord: "train",letterMatch: 3},{guessedWord: "train",letterMatch: 3},{guessedWord: "train",letterMatch: 3}];
    let wrapper;
    beforeEach(()=>{
        wrapper = setup({guessedWords})
    });

    test('render without error',()=>{
        const component = findByTestAttribute(wrapper,'component-guessWords');
        expect(component.length).toBe(1)
    });

    test('render guessed words section',()=>{
        const guessedWordsDiv = findByTestAttribute(wrapper,'guessedWords-div');
        expect(guessedWordsDiv.length).toBe(1)
    });

    test('correct number of guessed words',()=>{
        const guessedWordNodes = findByTestAttribute(wrapper,'guessed-word');
        expect(guessedWordNodes.length).toBe(guessedWords.length)
    });
});