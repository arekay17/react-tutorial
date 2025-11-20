import React from 'react';
import styles from './AlphabetCard.module.css';

function AlphabetCard({ letter, onSelectLetter }) {
    return (
        <button className={styles.card} onClick={function() {onSelectLetter(letter)}}>
            {letter}
        </button>
    )
}

export default AlphabetCard;