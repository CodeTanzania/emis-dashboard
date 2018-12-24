import React from 'react';
import L from 'leaflet';

class DrawSupport extends React.Component {
  componentDidMount() {
    const { map } = this.props;
    L.control.zoom({ position: 'bottomleft' }).addTo(map);
  }

  render() {
    return null;
  }
}

export default DrawSupport;
