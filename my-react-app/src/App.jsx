import React, { useState } from 'react';
import AlphabetGrid from './components/AlphabetGrid';
import alphabetData from './data/words';
import LetterPage from './components/LetterPage';
import StartScreen from './components/StartScreen';
import VowelMenu from './components/VowelMenu';
import VowelLearn from './components/VowelLearn';
import styles from './App.module.css';
import VowelExercise1 from './components/VowelExercise1';

function App() {
  const [mode, setMode] = useState(null);
  const [selectedLetter, setSelectedLetter] = useState(null);

  // sub-mode untuk bahagian vokal: 'menu', 'intro', 'latihan1', 'latihan2'
  const [vowelScreen, setVowelScreen] = useState('menu');

  // --- state handlers ---
  const handleSelectMode = function (selectedMode) {
    setMode(selectedMode);
    setSelectedLetter(null);
    setVowelScreen('menu'); // reset bila tukar mode
  };

  const handleSelectLetter = function (letter) {
    setSelectedLetter(letter);
  };

  const handleBackFromLetterPage = function () {
    setSelectedLetter(null);
  };

  // Back to Start Screen handler for HomeBar
  const handleBackToStart = function () {
    setMode(null);
    setSelectedLetter(null);
    setVowelScreen('menu');
  };


 // Home Button Bar for Pages except Start Screen
const HomeBar = (
  <div className={styles.homeBar}>
    <button
      className={styles.homeButton}
      onClick={handleBackToStart}
      aria-label="Kembali Ke Muka Depan"
    >
      ⬅ Kembali ke Muka Depan
    </button>
  </div>
);


  // --- Screen Rendering Logic ---

  // 0) Start screen
  if (mode === null) {
    return <StartScreen onSelectMode={handleSelectMode} />;
  }

  // 1) Render for 'all' mode
  if (mode === 'all') {
    if (selectedLetter === null) {
      return (
        <>
          {HomeBar}
          <AlphabetGrid onSelectLetter={handleSelectLetter} />
        </>
      );
    } else {
      return (
        <>
          {HomeBar}
          <LetterPage
            letter={selectedLetter}
            data={alphabetData[selectedLetter]}
            onBack={handleBackFromLetterPage}
          />
        </>
      );
    }
  }

  // 2) Render for 'vowels' mode (dengan sub-screen)
  if (mode === 'vowels') {
    // 2a) Menu utama untuk vokal
    if (vowelScreen === 'menu') {
      return (
        <>
          {HomeBar}
          <VowelMenu onSelectOption={setVowelScreen} />
        </>
      );
    }

    // 2b) Mengenal Huruf Vokal
    if (vowelScreen === 'intro') {
      return (
        <>
          {HomeBar}
          <VowelLearn onBackToVowelMenu={() => setVowelScreen('menu')} />
        </>
      );
    }

    // 2c) Latihan 1
    if (vowelScreen === 'latihan1') {
      return (
        <>
          {HomeBar}
          <VowelExercise1 onBackToVowelMenu={() => setVowelScreen('menu')} />
        </>
      );
    }

    if (vowelScreen === 'latihan2') {
      return (
        <>
          {HomeBar}
          
        </>
      );
    }
  }

  // 3) Render for syllable mode
  if (mode === 'syllable') {
    return (
      <>
        {HomeBar}
        <div style={{ padding: '20px' }}>syllable mode in construction</div>
      </>
    );
  }

  // 4) Render for simple words mode
  if (mode === 'simple') {
    return (
      <>
        {HomeBar}
        <div style={{ padding: '20px' }}>simple words mode in construction</div>
      </>
    );
  }

  return null;
}

export default App;
