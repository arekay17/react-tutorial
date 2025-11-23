import React from 'react';
import styles from './StartScreen.module.css';

function StartScreen ({onSelectMode}){
    return (
        <div className={styles.startContainer}>
            <h1 className={styles.heading}>Pilih Mode Belajar</h1>
            <div className={styles.button}>
                <button className={styles.modeButton} onClick={() => onSelectMode('all')} aria-label="Belajar Semua Huruf">Belajar Semua Huruf</button>
                <button className={styles.modeButton} onClick={() => onSelectMode('vowels')} aria-label="Learn Vowels">Huruf Vokal</button>
                <button className={styles.modeButton} onClick={() => onSelectMode('syllable')} aria-label="Learn Syllables">Suku Kata</button>
                <button className={styles.modeButton} onClick={() => onSelectMode('simple')} aria-label="Learn Simple Words">Belajar Perkataan Ringkas</button>
            </div>
        </div>
    );
}

export default StartScreen;