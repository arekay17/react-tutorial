import React from 'react';
import styles from './AlphabetGrid.module.css';
import AlphabetCard from './AlphabetCard';

function AlphabetGrid({ onSelectLetter }) {
    const letters = [];
    for (let i = 65; i <= 90; i++) {
        letters.push(String.fromCharCode(i));
    };
    
    return (
        <div className={styles.grid}>
            {
                letters.map(function(letter){
                    return(
                        <AlphabetCard key={letter} letter={letter} onClick={function(){ onSelectLetter(letter)}} />
                    )
                })
            }
        </div>
    );

}

export default AlphabetGrid;