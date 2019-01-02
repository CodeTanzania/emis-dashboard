import React from 'react';
import DrawControls from '../../../../common/components/DrawControls';

class AlertMapControls extends React.Component {
  constructor(props) {
    super(props);
    this.onDrawCreated = this.onDrawCreated.bind(this);
  }

  onDrawCreated = ({ geometry }) => {
    console.log(geometry);
  };

  render() {
    return <DrawControls onDrawCreated={this.onDrawCreated} />;
  }
}

export default AlertMapControls;
