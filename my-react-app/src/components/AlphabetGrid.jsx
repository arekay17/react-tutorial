import React from 'react';

function AlphabetGrid({ onSelectLetter }) {
    const letters = [];
    for (let i = 65; i <= 90; i++) {
        letters.push(String.fromCharCode(i));
    };
    
    return (
        <div style={styles.grid}>
            
        </div>    
        );

}

const styles = {
    grid: {
            display: 'grid',
        }
    };