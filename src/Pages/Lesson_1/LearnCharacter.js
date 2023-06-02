import React, { useState } from 'react';
import { useParams } from 'react-router';
import Card from '../../Components/Card';
import { letters } from '../../utils/characters';
import { vocab_examples } from '../../utils/examples';

export default function LearnCharacter() {
  const { letter } = useParams();
  const [char, setChar] = useState(letters.find(c => c.character === letter));
  const [examples, setExamples] = useState(vocab_examples.find(c => c.character === letter));

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ko-KR'; // Set the language to Korean
    window.speechSynthesis.speak(utterance);
  };

  const buttonStyles = {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    backgroundColor: '#4a90e2',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyles = {
    backgroundColor: '#3676c6',
  };

  const characterInfoStyles = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
  };

  const characterDetailsStyles = {
    marginLeft: '1rem',
  };

  const pronunciationStyles = {
    marginBottom: '0.5rem',
  };

  const examplesStyles = {
    marginTop: '1rem',
  };

  const exampleStyles = {
    marginBottom: '1rem',
  };

  const wordStyles = {
    marginBottom: '0.5rem',
  };

  return (
    <div>
      <div style={characterInfoStyles}>
        <Card letter={char} hoverable={false} />
        <div style={characterDetailsStyles}>
          <p style={pronunciationStyles}>{char.pronunciation}</p>
          <button
            style={buttonStyles}
            onClick={() => speak(char.character)}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = buttonHoverStyles.backgroundColor;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = buttonStyles.backgroundColor;
            }}
          >
            Speak
          </button>
        </div>
      </div>

      <div style={examplesStyles}>
        {examples.examples.map((ex, idx) => (
          <div key={idx} style={exampleStyles}>
            <p style={wordStyles}>{ex.word}</p>
            <button
              style={buttonStyles}
              onClick={() => speak(ex.word)}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = buttonHoverStyles.backgroundColor;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = buttonStyles.backgroundColor;
              }}
            >
              Speak
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
