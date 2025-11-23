import React from 'react';
import styles from './LetterPage.module.css';

function LetterPage({ letter, data, onBack }) {
  return (
    <div className={styles.container}>
      <button onClick={onBack} className={styles.backButton}>
        ⬅ Kembali
      </button>

      <h1 className={styles.heading}>
        {letter} for <span className={styles.word}>{data.word}</span>
      </h1>

      <div className={styles.imageWrapper}>
        <img
          src={data.image}
          alt={data.word}
          className={styles.image}
        />
      </div>
    </div>
  );
}

export default LetterPage;