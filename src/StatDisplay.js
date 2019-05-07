import React from 'react';

function StatDisplay(props) {
  return (
    <div className="stat-display">
        <div className="stat-child">
          <h4 className="stat-label">{props.label}</h4>
          <span className="stat-value">{props.value}</span>
        </div>
    </div>
  )
}

export default StatDisplay;
