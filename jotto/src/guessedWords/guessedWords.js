import React from 'react'
import PropTypes from 'prop-types'


const GuessedWords = (props)=>{
    let content;
    if(props.guessedWords.length===0){
        content = (
            <h3 data-test="guessedWords-instruction" >Guess the word!</h3>
        )
    }
    return (
        <div data-test="component-guessWords">
            {content}
        </div>
    )
};

GuessedWords.propTypes={
    guessedWords: PropTypes.arrayOf(PropTypes.shape({
        guessedWords: PropTypes.string.isRequired,
        letterMatch: PropTypes.number.isRequired
    })).isRequired
};

export default GuessedWords