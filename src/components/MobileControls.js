import React from 'react';

const MobileControls = ({ onMoveLeft, onMoveRight, onJump }) => {
  const controlsContainer = {
    position: 'fixed',
    bottom: '20px',
    left: '0',
    right: '0',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 20px',
    zIndex: 100,
  };

  const controlButton = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    border: '2px solid white',
    color: 'white',
    fontSize: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
    touchAction: 'manipulation',
  };

  const centerControls = {
    display: 'flex',
    gap: '20px',
  };

  return (
    <div style={controlsContainer}>
      <button style={controlButton} onTouchStart={onMoveLeft} onTouchEnd={onMoveLeft}>
        ←
      </button>
      <div style={centerControls}>
        <button style={controlButton} onTouchStart={onJump}>
          ↑
        </button>
      </div>
      <button style={controlButton} onTouchStart={onMoveRight} onTouchEnd={onMoveRight}>
        →
      </button>
    </div>
  );
};

export default MobileControls;