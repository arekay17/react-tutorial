import React from 'react';
import styles from './VowelMenu.module.css';

function VowelMenu({ onSelectOption }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Huruf Vokal</h1>
      <p className={styles.subtitle}>Pilih aktiviti:</p>

      <div className={styles.buttonGrid}>
        <button
          className={styles.optionButton}
          onClick={() => onSelectOption('intro')}
        >
          Mengenal Huruf Vokal
        </button>

        <button
          className={styles.optionButton}
          onClick={() => onSelectOption('latihan1')}
        >
          Latihan 1
        </button>

        <button
          className={styles.optionButton}
          onClick={() => onSelectOption('latihan2')}
        >
          Latihan 2
        </button>
      </div>
    </div>
  );
}

export default VowelMenu;
