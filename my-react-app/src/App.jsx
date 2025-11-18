import React, { useState } from 'react';
import AlphabetGrid from './components/AlphabetGrid';
import { alphabetData } from './data/alphabetData';

function App(){
    const [selectedLetter, setSelectedLetter] = useState(null);

    const handleSelectLetter = (letter) => {
        setSelectedLetter(letter);
    };

    const handleBack = () => {
        setSelectedLetter(null);
    };

    return (
        <>
            {selectedLetter === null ? (
                <AlphabetGrid onSelectLetter={handleSelectLetter} />
            ) : ()
            };
        
        </>
    )

};