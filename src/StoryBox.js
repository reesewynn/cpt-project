import React, { Component } from 'react';

class StoryBox extends Component {
  render() {
    return (
      <div className="story-box-wrapper">
        <div className="story-box" ref={n => this.box = n}>
          {this.props.contents}
        </div>
      </div>
    )
  }

  componentDidUpdate() {
    this.box.scrollTop = this.box.scrollHeight;
  }
}

export default StoryBox;