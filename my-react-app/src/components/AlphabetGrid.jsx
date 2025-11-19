import React from 'react';
import styles from './AlphabetGrid.module.css';

function AlphabetGrid({ onSelectLetter }) {
    const letters = [];
    for (let i = 65; i <= 90; i++) {
        letters.push(String.fromCharCode(i));
    };
    
    return (
        <div className={styles.grid}>
            {letters.map(function(letter) {
                return (
                    <button 
                        key={letter} 
                        onClick={() => onSelectLetter(letter)}
                        className={styles.button}
                        >
                        {letter}
                    </button>
                );
            }
            )}
        </div>    
        );

}

export default AlphabetGrid;