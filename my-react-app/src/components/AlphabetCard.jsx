import React from 'react';
import styles from './AlphabetCard.module.css';

function AlphabetCard({ letter, onClick }) {
    return (
        <button className={styles.button} onClick={onClick}>
            {letter}
        </button>
    )
};

export default AlphabetCard;