import React from 'react';
import { connect } from 'react-redux';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';

class DrawSupport extends React.Component {
  componentDidMount() {
    this.map = this.props.map;
    L.control.zoom({ position: 'bottomleft' }).addTo(this.map);
  }

  componentDidUpdate(prevProps) {
    const { points } = this.props;
    const { points: prevPoints } = prevProps;

    if (points !== prevPoints) {
      this.showPoints(points);
    }
  }

  showPoints = points => {
    const DefaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow,
    });
    L.Marker.prototype.options.icon = DefaultIcon;
    this.pointsLayer = L.geoJSON().addTo(this.map);
    this.pointsLayer.addData(points);
  };

  render() {
    return null;
  }
}

const mapStateToProps = state => ({
  points: state.alertsMap.points,
});

export default connect(mapStateToProps)(DrawSupport);
