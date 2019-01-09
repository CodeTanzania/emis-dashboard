import React from 'react';
import * as ReactLeaflet from 'react-leaflet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Spin } from 'antd';

import 'leaflet-draw';
import MapNav from '../MapNav';
import { getIncidentsSuccess } from '../../actions';

import './styles.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import RenderAllIncidents from './components/AllIncidents/index';
import RenderSingleIncident from './components/SingleIncident/index';
import LayerSwitchControls from '../../../../common/components/LayerSwitchControls';

const { Map: LeafletMap, TileLayer, } = ReactLeaflet;

/**
 * IncidentMap component
 * this component will show incident contents
 * on Openstreet map
 *
 * @class
 * @name IncidentMap
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class IncidentMap extends React.Component {
  static propTypes = {
    handleIncidents: PropTypes.func,
    loading: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    incidents: null,
    handleIncidents: null,
  };

  constructor() {
    super();
    this.state = {
      position: [-6.7161, 37.0804],
      zoom: 7,
      showPopup: false,
      hideButton: false,
      area: {},
    };
  }

  componentDidMount() {
    const { handleIncidents } = this.props;
    handleIncidents();
  }

  getSpinValue = () => {
    const { loading } = this.props;
    let spin = false;
    if (loading) {
      spin = loading;
    }
    return spin;
  };

  render() {
    const { position, zoom, } = this.state;
    const spin = this.getSpinValue();
    return (
      <div>
        <Spin
          spinning={spin}
          tip="Loading..."
          size="large"
          style={{ position: 'absolute', top: '25%', right: '5%' }}
        >
          <LeafletMap
            center={position}
            zoom={zoom}
            ref={this.mapRef}
            zoomControl={false}
          >
            <MapNav />
            <LayerSwitchControls />
            <RenderAllIncidents />
            <RenderSingleIncident />
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              id="mapbox.light"
              url="https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoid29ybGRiYW5rLWVkdWNhdGlvbiIsImEiOiJIZ2VvODFjIn0.TDw5VdwGavwEsch53sAVxA#1.6/23.725906/-39.714135/0"
            />
          </LeafletMap>
        </Spin>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  incidentsAction: state.incidents.incidentActionsData
    ? state.incidents.incidentActionsData
    : [],
  loading: state.incidents.isLoading,
});

const mapDispatchToProps = {
  handleIncidents: getIncidentsSuccess,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IncidentMap);
