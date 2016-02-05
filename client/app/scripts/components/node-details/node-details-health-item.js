import React from 'react';

import Sparkline from '../sparkline';
import metricFeeder from '../../hoc/metric-feeder';
import { formatMetric } from '../../utils/string-utils';

class NodeDetailsHealthItem extends React.Component {
  render() {
    return (
      <div className="node-details-health-item">
      <div className="node-details-health-item-value">{formatMetric(this.props.value, this.props)}</div>
        <div className="node-details-health-item-sparkline">
          <Sparkline data={this.props.samples} max={this.props.max}
            first={this.props.first} last={this.props.last} />
        </div>
        <div className="node-details-health-item-label">{this.props.label}</div>
      </div>
    );
  }
}

export default metricFeeder(NodeDetailsHealthItem);
