import React from 'react';

const ProgressBarComponent = (props) => {
    const { color, percentage } = props;

  const containerStyles = {
    height: 30,
    backgroundColor: "#e0e0de",
    width: '50%'
  }

  const fillerStyles = {
    height: '100%',
    width: `${percentage}%`,
    backgroundColor: color,
    borderRadius: 'inherit',
    textAlign: 'center',
    transition: 'width 1s ease-in-out',
    maxWidth: '100%',
    minWidth:'0%'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${percentage}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBarComponent;