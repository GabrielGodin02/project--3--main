import React from 'react';

const Platform = ({ position, width }) => {
  const platformStyle = {
    position: 'absolute',
    width: width,
    height: '20px',
    backgroundColor: '#2ecc71',
    bottom: `${position.y}px`,
    left: `${position.x}px`,
    borderRadius: '10px',
  };

  return <div style={platformStyle} />;
};

export default Platform;


// DONE