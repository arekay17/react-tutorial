import React from 'react';

function LetterPage ({ letter, data, onBack }) {
    return (
        <div style={styles.container}>
            <button onClick={onBack} style={styles.backButton}>Back</button>
            <h1>{letter} for {data.word}</h1>
            <img src={data.image} alt={data.word} style={styles.image} />
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        padding: '20px',
    },
    backButton: {
        padding: '10px 20px',
        marginBottom: '20px',
        cursorr: 'pointer',
    },
    image: {
        width: '250px',
        borderradius: '15px',
        marginTop: '20px',
    },
};


export default LetterPage;