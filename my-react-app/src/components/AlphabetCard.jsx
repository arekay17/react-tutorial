import React from 'react';
import styles from './AlphabetCard.module.css';

function AlphabetCard({ letter, onSelectLetter }) {
    const handleClick = () => {
        onSelectLetter(letter);

        const audio = new Audio("/sound/click.mp3");
        audio.currentTIme = 0;
        audio.play().catch((error) => {
            console.error("Error playing sound:", error);
        });
    }   

    return (
        <button className={styles.card} onClick={handleClick}>
            {letter}
        </button>
    )
}

export default AlphabetCard;