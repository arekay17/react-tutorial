import React from 'react';

function AlphabetGrid({ onSelectLetter }) {
    const letters = [];
    for (let i = 65; i <= 90; i++) {
        letters.push(String.fromCharCode(i));
    };
    
    return (
        <div style={styles.grid}>
            {letters.map(function(letter) {
                return (
                    <button 
                        key={letter} 
                        onClick={() => onSelectLetter(letter)}
                        styles={styles.button}
                        >
                        {letter}
                    </button>
                );
            }
            )}
        </div>    
        );

}


const styles = {
    grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '10px',
            padding: '20px',
        },
    button: {
        padding: '20px',
        fontsize: '20px',
        cursor: 'pointer',
        borderRadius: '10px',
    }
};

export default AlphabetGrid;