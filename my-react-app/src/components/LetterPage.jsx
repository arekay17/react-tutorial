import React from 'react';
import styles from './LetterPage.module.css';

function LetterPage ({ letter, data, onBack }) {
    return (
        <div className={styles.container}>
            <button onClick={onBack} className={styles.backButton}>Back</button>
            <h1>{letter} for the {data.word}</h1>
            <p>test</p>
            <p>test 2</p>
            <img src={data.image} alt={data.word} className={styles.image} />
        </div>
    );
}

export default LetterPage;