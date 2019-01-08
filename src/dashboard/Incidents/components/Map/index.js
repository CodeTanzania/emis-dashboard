import React from 'react';
import { get } from 'lodash';
import L from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Spin } from 'antd';

import 'leaflet-draw';
import IncidentForm from '../IncidentForm';
import MapNav from '../MapNav';
import { baseMaps, showMarkers } from '../../helpers';
import { getIncidentsSuccess } from '../../actions';

import './styles.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import RenderAllIncidents from './components/AllIncidents/index';
import RenderSingleIncident from './components/SingleIncident/index';
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
    selected: PropTypes.shape({
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
    }).isRequired,
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
    this.onclickNewIncidentButton = this.onclickNewIncidentButton.bind(this);
    this.onCancelButton = this.onCancel.bind(this);
    this.onSelectIncident = this.showSelectedIncident.bind(this);
  }

  componentDidMount() {
    const { handleIncidents } = this.props;
    handleIncidents();
  }

  mapLayers = () => {
    L.control.layers(baseMaps, {}, { position: 'bottomleft' }).addTo(this.map);
  };

  showPoint = areaSelected => {
    this.selectedIncidentLayer = L.geoJSON(areaSelected, {
      pointToLayer: showMarkers,
    }).addTo(this.map);
  };

  showSelectedIncident = incidentSelected => {
    const { areaSelected } = incidentSelected;
    this.showPoint(areaSelected);
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
    this.map.addLayer(this.incidentLayer);
  };

  getSpinValue = () => {
    const { loading } = this.props;
    let spin = false;
    if (loading) {
      spin = loading;
    }
    return spin;
  };

  render() {
    const { position, zoom, showPopup, hideButton, area } = this.state;
    const { incidents, } = this.props;
    const spin = this.getSpinValue();
    return (
      <div>
        <Spin
          spinning={spin}
          tip="Loading..."
          size="large"
          style={{ position: 'absolute', top: '25%', right: '5%' }}
        >
          <LeafletMap center={position} zoom={zoom} ref={this.mapRef}>
            <MapNav
              hideButton={hideButton}
              newIncidentButton={this.onclickNewIncidentButton}
              clickedIncident={this.onSelectIncident}
              goBack={this.onCancelButton}
            />
            <RenderAllIncidents /> 
            <RenderSingleIncident />
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
        </Spin>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  incidents:
    state.incidents.data && state.incidents.data ? state.incidents.data : [],
  selected: state.incidents.incident ? state.incidents.incident : [],
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
