import React from 'react';
import styles from './VowelLearn.module.css';
import vowelData from '../data/vowelWords';

const vowels = ['A', 'E', 'I', 'O', 'U'];

function VowelLearn ({ onBackToVowelMenu }) {
    const handlePlayLetterSound = function (letter) {
        const audio = new Audio(`/sound/vowels/${letter}.mp3`);
        audio.play();
    };

    const handlePlayWordSound = function (letter) {
        const info = vowelData[letter];
        if (!info) return;
        const audio = new Audio(`/sound/vowels/${letter}_word.mp3`);
        audio.play();
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}> Mengenal Huruf Vokal</h1>
            <p className={styles.subtitle}> Klik huruf untuk eja vokal atau perkataan untuk eja perkataan</p>

            <div className={styles.grid}>
                {
                    vowels.map(
                        function(letter) {
                            const data = vowelData[letter];
                            if (!data) return null;

                            return (
                                <div key={letter} className={styles.card}>
                                    <div className={styles.topRow}>
                                        <button className={styles.letterButton} onClick={() => handlePlayLetterSound(letter)}>{letter}</button>
                                        <button className={styles.wordButton} onClick={() => handlePlayWordSound(letter)}>{data.word}</button>
                                    </div>
                                    <div className={styles.imageBox}>
                                        <img src={data.image} alt={data.word} className={styles.image} />
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
            <button className={styles.backButton} onClick={onBackToVowelMenu}>⬅ Kembali ke Menu Vokal</button>
        </div>
        
    );
};

export default VowelLearn;