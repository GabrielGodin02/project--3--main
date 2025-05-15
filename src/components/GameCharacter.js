import React, { useState, useEffect } from 'react';

const GameCharacter = ({ position, isJumping }) => {
  const [characterStyle, setCharacterStyle] = useState({
    position: 'absolute',
    width: '50px',
    height: '50px',
    backgroundColor: '#e74c3c',
    borderRadius: '50%',
    bottom: `${position.y}px`,
    left: `${position.x}px`,
    transition: isJumping ? 'bottom 0.3s ease-out, left 0.1s linear' : 'left 0.1s linear',
    zIndex: 10,
  });

  useEffect(() => {
    setCharacterStyle(prev => ({
      ...prev,
      bottom: `${position.y}px`,
      left: `${position.x}px`,
      transition: isJumping ? 'bottom 0.3s ease-out, left 0.1s linear' : 'left 0.1s linear',
    }));
  }, [position, isJumping]);

  return <div style={characterStyle} />;
};

export default GameCharacter;