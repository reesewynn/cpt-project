import React, {Component} from 'react';
import StatDisplay from './StatDisplay';

class StatsBox extends Component {

  labels = {
    'balance': 'Bank Balance',
    'days': 'Days Since Launch',
    'privacy': 'Current Privacy',
  };

  render() {
    return (
      <div className="stats-box">
        {Object.keys(this.labels).map(
          key => <StatDisplay key={key} label={this.labels[key]} value={this.props[key]}/>
        )}
      </div>
    );
  }
}

export default StatsBox;