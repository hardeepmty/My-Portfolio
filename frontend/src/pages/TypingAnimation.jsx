import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

const words = ['developer', 'designer'];

const TypingAnimation = () => {
  const [currentText, setCurrentText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const typingSpeed = 150; // Typing speed in milliseconds
  const erasingSpeed = 100; // Erasing speed in milliseconds
  const pauseDuration = 1000; // Pause between words in milliseconds
  
  useEffect(() => {
    let timeout;

    if (isTyping) {
      // Typing letters one by one
      if (letterIndex < words[wordIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText((currentText + words[wordIndex][letterIndex]).toUpperCase());
          setLetterIndex(letterIndex + 1);
        }, typingSpeed);
      } else {
        // Finished typing, pause before erasing
        setTimeout(() => {
          setIsTyping(false);
        }, pauseDuration);
      }
    } else {
      // Erasing letters one by one
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, erasingSpeed);
      } else {
        // Finished erasing, move to the next word
        setIsTyping(true);
        setWordIndex((wordIndex + 1) % words.length);
        setLetterIndex(0);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isTyping, letterIndex, wordIndex]);

  return (
    <Typography sx={{ margin: '5px', fontFamily: 'Montserrat', color: '#bbaffe' }}>
      {currentText}
    </Typography>
  );
};

export default TypingAnimation;
