import React, { useState } from 'react';
import AlphabetGrid from './components/AlphabetGrid';
import alphabetData from './data/words';
import LetterPage from './components/LetterPage';
import StartScreen from './components/StartScreen';

function App() {
    const [mode, setMode] = useState(null);
    const [selectedLetter, setSelectedLetter] = useState(null);

    //state handlers
    const handleSelectMode = function(selectedMode) {
        setMode(selectedMode);
        setSelectedLetter(null);
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
        return (
            <>
            { HomeBar }
            <div style={{padding : "20px"}}> vowels mode in construction </div>
            </>
        );
    };

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
