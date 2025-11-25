import React, { useState } from "react";
import styles from "./VowelExercise1.module.css";

export default function VowelExercise1({ onBack }) {
  const vowels = ["A", "E", "I", "O", "U"];
  const [foundVowels, setFoundVowels] = useState([]);
  const [wrongLetter, setWrongLetter] = useState(null);

  const letters = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );  

  const playCorrectSound = (letter) => {
    const audio = new Audio(`/sound/vowels/correct-${letter}.mp3`);
    audio.play();
  };

  const playWrongSound = () => {
    const audio = new Audio("/sound/vowels/wrong.mp3");
    audio.play();
  };

  const playWinSound = () => {
    const audio = new Audio("/sounds/win.mp3");
    audio.play();
  };

  const handleClick = (letter) => {
    const isVowel = vowels.includes(letter);

    if (isVowel) {
      if (!foundVowels.includes(letter)) {
        const updated = [...foundVowels, letter];
        setFoundVowels(updated);
        playCorrectSound(letter);

        // If this click completes all vowels, play win sound
        if (updated.length === vowels.length) {
          // Small delay so the "correct" sound can play first
          setTimeout(() => {
            playWinSound();
          }, 400);
        }
      }
    } else {
      setWrongLetter(letter);
      playWrongSound();

      // Clear wrong highlight after a short time
      setTimeout(() => {
        setWrongLetter(null);
      }, 300);
    }
  };

  const gameCompleted = foundVowels.length === vowels.length;

  const handleRestart = () => {
    setFoundVowels([]);
    setWrongLetter(null);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latihan 1: Cari Huruf Vokal</h2>
      <p className={styles.instruction}>
        Klik huruf vokal: <span className={styles.vowelText}>A, E, I, O, U</span>.
      </p>

      {gameCompleted && (
        <div className={styles.winBox}>
          <p>🎉 Tahniah! Kamu dah jumpa semua huruf vokal! 🎉</p>
          <button className={styles.winButton} onClick={handleRestart}>
            Main Lagi
          </button>
        </div>
      )}

      <div className={styles.grid}>
        {letters.map((letter) => {
          const isVowel = vowels.includes(letter);
          const isFound = foundVowels.includes(letter);
          const isWrong = wrongLetter === letter;

          return (
            <button
              key={letter}
              onClick={() => handleClick(letter)}
              disabled={isFound}
              className={`${styles.letterBtn}
                ${isFound ? styles.correct : ""}
                ${isWrong ? styles.wrong : ""}`}
              aria-label={`Huruf ${letter}`}
            >
              {letter}
              {isFound && isVowel && (
                <span className={styles.smallText}>vokal</span>
              )}
            </button>
          );
        })}
      </div>

      <div className={styles.bottomBar}>
        <button className={styles.backBtn} onClick={onBack}>
          ⬅ Kembali
        </button>
      </div>
    </div>
  );
}
