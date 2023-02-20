import React from 'react';

const ProgressBarComponent = (props) => {
    const { color, percentage } = props;

  const containerStyles = {
    height: 40,
    backgroundColor: "#fff",
    width: '50%',
    border:'1px solid #c1c1c1'
  }

  const fillerStyles = {
    height: '100%',
    width: `${percentage}%`,
    backgroundColor: color,
    borderRadius: 'inherit',
    textAlign: 'center',
    transition: 'width 1s ease-in-out',
    maxWidth: '100%',
    minWidth:'0%',
    lineHeight:'32px'
  }

  const labelStyles = {
    padding: 5,
    color: '#000',
    fontWeight: 'bold'
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span className="progressPercentage" style={labelStyles}>{`${percentage}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBarComponent;