// src/components/TypeWriter.tsx
'use client';

import { useState, useEffect } from 'react';

interface TypeWriterProps {
  text: string;
  delay?: number; // delay between each character (ms)
  className?: string;
}

export default function TypeWriter({ text, delay = 100, className = '' }: TypeWriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    console.log('TypeWriter mounted with text:', text); // DEBUG
    let currentIndex = 0;
    setDisplayText(''); // Reset on mount
    
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsComplete(true);
        clearInterval(typingInterval);
      }
    }, delay);

    return () => clearInterval(typingInterval);
  }, [text, delay]);

  return (
    <span className={className}>
      {displayText}
      <span 
        className="inline-block w-0.5 bg-current ml-1 animate-blink"
        style={{ height: '1em', verticalAlign: 'baseline' }}
      />
    </span>
  );
}