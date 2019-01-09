import React from 'react';
import { connect } from 'react-redux';
import { withLeaflet } from 'react-leaflet';
import L from 'leaflet';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'antd';

import DrawControls from '../../../../../../common/components/DrawControls';
import { storePolygons, getIncidentsSuccess } from '../../../../actions';

// this constant contains the contents that will be
// displayed inside leaflet  popup
const popupContent = `<div>
<div class="ant-modal-body">
    <h3>To create new Incident, draw the area/areas that incident will occur using the draw controls and fill the form</h3  >
</div>
<div class="ant-modal-footer">
    <div>
        <button type="button" id="info-button" class="ant-btn ant-btn-primary"><span>OK</span></button>
    </div>
</div>
</div>`;

/**
 *  Draw Control for Drawing Alert shapes
 * @class
 * @name AlertMapControls
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class IncidentMapDraw extends React.Component {
  static propTypes = {
    saveGeometry: PropTypes.func,
    leaflet: PropTypes.shape({
      map: PropTypes.object.isRequired,
    }).isRequired,
  };

  static defaultProps = {
    saveGeometry: () => {},
  };

  constructor(props) {
    super(props);
    this.onDrawCreated = this.onDrawCreated.bind(this);
  }

  componentDidMount() {
    this.map = this.props.leaflet.map;
    const {getIncidents} = this.props;
    getIncidents();
    this.showTutorial();
  }

  showTutorial = () => {
    L.popup({ minWidth: 400 })
      .setLatLng([-6.179, 35.754])
      .setContent(popupContent)
      .openOn(this.map);
    document.querySelector('#info-button').addEventListener('click', e => {
      e.preventDefault();
      this.map.closePopup();
    });
  };

  onDrawCreated = ({ geometry }) => {
    const { storeCollectiveFeature } = this.props;
    storeCollectiveFeature(geometry);
  };

  render() {
    return (
      <React.Fragment>
        <div style={{
            position: 'absolute',
            top: '10px',
            left:'55px',
            zIndex: '1000',
          }}>
        <Button
          type="primary"  >
          <Link to="/incidents/map" style={{ color: '#fff' }}>
            <Icon type="left" />
            Back Home
          </Link>
        </Button>
        </div>
        <DrawControls onDrawCreated={this.onDrawCreated} />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {
  storeCollectiveFeature:storePolygons,
  getIncidents:getIncidentsSuccess,
};

export default connect(
  null,
  mapDispatchToProps
)(withLeaflet(IncidentMapDraw));
