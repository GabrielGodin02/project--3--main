import React from 'react';

const Enemy = ({ position }) => {
  const enemyStyle = {
    position: 'absolute',
    width: '40px',
    height: '40px',
    backgroundColor: '#9b59b6',
    bottom: `${position.y}px`,
    left: `${position.x}px`,
    borderRadius: '50%',
  };

  return <div style={enemyStyle} />;
};

export default Enemy;