import React from 'react';

const GameControls = ({ onJump, gameStarted, onStart }) => {
  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    margin: '10px',
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      {!gameStarted ? (
        <button style={buttonStyle} onClick={onStart}>
          Start Game
        </button>
      ) : (
        <button style={buttonStyle} onClick={onJump}>
          Jump!
        </button>
      )}
    </div>
  );
};

export default GameControls;