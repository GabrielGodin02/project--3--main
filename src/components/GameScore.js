import React from 'react';

const GameScore = ({ score }) => {
  const scoreStyle = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: '#fff',
    fontSize: '24px',
    fontFamily: 'Arial, sans-serif',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
  };

  return <div style={scoreStyle}>Score: {score}</div>;
};

export default GameScore;