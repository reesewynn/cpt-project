import React from 'react';

function ThreadPopup(props) {
  return (
    <div className="thread-popup-wrapper" style={props.visible ? {} : {'display': 'none'}}>
      <div className="thread-popup">
        {props.popupText}
      </div>
    </div>
  )
}

export default ThreadPopup;
