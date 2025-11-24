import React, { useState } from 'react';
import AlphabetGrid from './components/AlphabetGrid';
import alphabetData from './data/words';
import LetterPage from './components/LetterPage';
import StartScreen from './components/StartScreen';
import VowelMenu from './components/VowelMenu';
import VowelLearn from './components/VowelLearn';

function App() {
    // mode variables which can be 'all', 'vowels', 'syllable', 'simple'
    const [mode, setMode] = useState(null);

    // for 'all' mode letter selection
    const [selectedLetter, setSelectedLetter] = useState(null);
    
    // for 'vowels' mode screen navigation which can be 'menu', 'intro', 'latihan1', 'latihan2'
    const [vowelScreen, setVowelScreen] = useState('menu'); 

    //state handlers
    const handleSelectMode = function(selectedMode) {
        setMode(selectedMode);
        setSelectedLetter(null);
        setVowelScreen('menu'); // reset vowel screen to menu on mode change
    };
    const handleSelectLetter = function(letter) {
        setSelectedLetter(letter);
    };
    const handleBackFromLetterPage = function() {
        setSelectedLetter(null);
    };

    // Back to Start Screen handler for HomeBar
    const handleBackToStart = function() {
        setMode(null);
        setSelectedLetter(null);
        setVowelScreen('menu'); // reset vowel screen to menu on mode change
    };

    // Home Button Bar for Pages except Start Screen
    const HomeBar = (
        <div style={{padding: "10px", textAlign: "center"}}>
            <button onClick={handleBackToStart} aria-label="Kembali Ke Muka Depan">Kembali ke Muka Depan</button>
        </div>
    )

    //Screen Rendering Logic
    if (mode === null) {
        return <StartScreen onSelectMode={handleSelectMode} />;
    };

    // Render for 'all' mode
    if (mode === 'all') {
        if (selectedLetter === null) {
            return (
                <>
                { HomeBar }
                <AlphabetGrid onSelectLetter={handleSelectLetter} />
                </>
            );
    } else {
        return (
            <>
                { HomeBar }
                <LetterPage letter={selectedLetter} data={alphabetData[selectedLetter]} onBack={handleBackFromLetterPage} />
            </>
        )
        };       
    };

    //render for vowels mode
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

        // 2c) Latihan 1 & 2 (placeholder)
        if (vowelScreen === 'latihan1' || vowelScreen === 'latihan2') {
        return (
            <>
            {HomeBar}
            <div style={{ padding: '20px', textAlign: 'center' }}>
                {vowelScreen === 'latihan1'
                ? 'Latihan 1 akan datang.'
                : 'Latihan 2 akan datang.'}
            </div>
            </>
        );
        }
    }

    //render for syllable mode
    if (mode === 'syllable') {
        return (
            <>
            { HomeBar }
            <div style={{padding : "20px"}}> syllable mode in construction </div>
            </>
        );
    };

    //render for simple words mode
    if (mode === 'simple') {
        return (
            <>
            { HomeBar }
            <div style={{padding : "20px"}}> simple words mode in construction </div>
            </>
        );
    };  
    
};

export default App;
