import React from 'react'
import PropTypes from 'prop-types'


const GuessedWords = (props)=>{
    let content;
    if(props.guessedWords.length===0){
        content = (
            <h3 data-test="guessedWords-instruction" >Guess the word!</h3>
        )
    }else{
        content = (
            <div data-test="guessedWords-div" >
                <h3>Guessed Words</h3>
                <table>
                    <thead>
                        <tr><th>Word</th><th>Letters match</th></tr>
                        <tbody>
                        {props.guessedWords.map((word,i)=>{
                            return (
                                <tr key={i} data-test="guessed-word">
                                    <td>{word.guessedWord}</td>
                                    <td>{word.letterMatch}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </thead>
                </table>
            </div>
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
        guessedWord: PropTypes.string.isRequired,
        letterMatch: PropTypes.number.isRequired
    })).isRequired
};

export default GuessedWords