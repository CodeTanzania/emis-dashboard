import React from 'react';
import { get } from 'lodash';
import L from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import 'leaflet-draw';
import IncidentForm from '../IncidentForm';
import MapNav from '../MapNav';
import { getIncidentsSuccess } from '../../actions';
import { baseMaps } from '../../helpers';

import './styles.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import IncidentsDraw from './components/IncidentsDraw/index';

const { Map: LeafletMap, TileLayer, Popup } = ReactLeaflet;

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
    incidents: PropTypes.arrayOf(
      PropTypes.shape({
        event: PropTypes.string,
        incidentsTypeData: PropTypes.shape({
          name: PropTypes.string,
          nature: PropTypes.string.isRequired,
          family: PropTypes.string.isRequired,
          color: PropTypes.string,
          _id: PropTypes.string,
        }),
        description: PropTypes.string.isRequired,
        startedAt: PropTypes.string,
        endedAt: PropTypes.string,
        _id: PropTypes.string,
      }).isRequired
    ),
    handleIncidents: PropTypes.func,
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
    this.onclickNewIncidentButton = this.onclickNewIncidentButton.bind(this);
    this.onCancelButton = this.onCancel.bind(this);
    this.onCloseDetail = this.onClose.bind(this);
  }

  componentDidMount() {
    const { handleIncidents } = this.props;
    handleIncidents();
  }

  mapLayers = () => {
    L.control.layers(baseMaps, {}, { position: 'bottomleft' }).addTo(this.map);
  };

  initDrawControls = () => {
    this.drawnItems = new L.FeatureGroup();
    this.map.addLayer(this.drawnItems);
    this.drawControl = new L.Control.Draw({
      position: 'topright',
      draw: {
        polyline: false,
        circlemarker: false,
        rectangle: false,
        marker: true,
      },
      edit: {
        featureGroup: this.drawnItems,
      },
    });
    this.map.addControl(this.drawControl);
  };

  showDrawnItems = e => {
    const { layer } = e;
    this.drawnItems.addLayer(layer);
    const type = get(layer.toGeoJSON(), 'geometry.type');
    this.setState({
      position:
        type === 'Point' ? layer.getLatLng() : layer.getBounds().getCenter(),
      area: layer.toGeoJSON(),
      showPopup: true,
    });
  };

  contentPopup = () => {
    const { position } = this.state;
    const contents = `<div>
      <div class="ant-modal-body">
        <h3>To create new incident, draw or put marker to the specific area involved</h3>
      </div>
      <div class="ant-modal-footer">
        <div>
        </div>
      </div>
    </div> `;

    this.popup = L.popup({ minWidth: 350 })
      .setLatLng(position)
      .setContent(contents)
      .openOn(this.map);
    this.setState({ hideButton: true });
  };

  onclickNewIncidentButton = () => {
    this.contentPopup();
    this.initDrawControls();
    this.map.on('draw:created', e => this.showDrawnItems(e));
    this.map.removeLayer(this.incidentLayer);
  };

  onCancel = () => {
    this.map.removeControl(this.drawControl);
    this.map.removeLayer(this.drawnItems);
    this.setState({ hideButton: false });
    this.map.closePopup();
  };

  onClose = () => {
    this.map.addLayer(this.incidentLayer);
  };

  render() {
    const { position, zoom, showPopup, hideButton, area } = this.state;
    const { incidents } = this.props;
    return (
      <div>
        {!hideButton ? (
          <MapNav
            newIncidentButton={this.onclickNewIncidentButton}
            onCloseDetail={this.onClose}
          />
        ) : null}
        <LeafletMap center={position} zoom={zoom} ref={this.mapRef}>
          <IncidentsDraw />
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            id="mapbox.light"
            url="https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoid29ybGRiYW5rLWVkdWNhdGlvbiIsImEiOiJIZ2VvODFjIn0.TDw5VdwGavwEsch53sAVxA#1.6/23.725906/-39.714135/0"
          />
          {showPopup ? (
            <Popup position={position} minWidth={450}>
              <IncidentForm
                onCancelButton={this.onCancel}
                location={area}
                incidentsTypeData={incidents}
              />
            </Popup>
          ) : null}
        </LeafletMap>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  incidents:
    state.incidents.data && state.incidents.data ? state.incidents.data : [],
});

const mapDispatchToProps = dispatch => ({
  handleIncidents: bindActionCreators(getIncidentsSuccess, dispatch),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IncidentMap);
