import React from 'react';
import { get } from 'lodash';
import L from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import 'leaflet-draw';
import IncidentForm from './components/IncidentForm';
import MapNav from './components/MapNav';
import { fetchIncidentsTypeSuccess } from './actions';


import '../styles.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const { Map: LeafletMap, TileLayer, Popup } = ReactLeaflet;

/**
 * Incidents component
 * this component will show incident contents
 * on Openstreet map
 *
 * @class
 * @name Incidents
 *
 * @version 0.1.0
 * @since 0.1.0
 */
 class Incidents extends React.Component {
  constructor() {
    super();
    this.state = {
      position: [-6.8161, 39.2804],
      // area: {},
      zoom: 13,
      showPopup: false,
      hideButton: false,
    };

    this.mapRef = React.createRef();
    this.onclickNewIncidentButton = this.onclickNewIncidentButton.bind(this);
    this.onCancelButton = this.onCancel.bind(this);
    this.onSubmitButton = this.onSubmit.bind(this);

  }

  componentDidMount() {
    this.map = this.mapRef.current.leafletElement;
    const {getIncidentstype} = this.props;
    getIncidentstype();
  }

  initDrawControls = () => {
    this.drawnItems = new L.FeatureGroup();
    this.map.addLayer(this.drawnItems);
    this.drawControl = new L.Control.Draw({
      position: 'topleft',
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
      // area: layer.toGeoJSON(),
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
          <button type="button" id="ok-button" class="ant-btn ant-btn-primary"><span>OK</span></button>
        </div>
      </div>
    </div> `;

    this.popup = L.popup({ minWidth: 400 })
      .setLatLng(position)
      .setContent(contents)
      .openOn(this.map);
    this.setState({ hideButton: true });

    document.querySelector('#ok-button').addEventListener('click', e => {
      e.preventDefault();
      this.map.closePopup();
    });
  };

  onclickNewIncidentButton = () => {
    this.contentPopup();
    this.initDrawControls();
    this.map.on('draw:created', e => this.showDrawnItems(e));
  };

  onCancel = () => {
    this.map.removeControl(this.drawControl);
    this.map.removeLayer(this.drawnItems);
    this.setState({ hideButton: false });
    this.map.closePopup();
  };

onSubmit= () => {
  this.map.removeControl(this.drawControl);
  this.setState({ hideButton: false });
  this.map.closePopup();

}
  render() {
    const { position, zoom, showPopup, hideButton } = this.state;
    const {incidentsType} = this.props;

    return (
      <div>
        {!hideButton ? (
          <MapNav
            newIncidentButton={this.onclickNewIncidentButton}
            id="mapNav"
          />
        ) : null}
        <LeafletMap center={position} zoom={zoom} ref={this.mapRef}>
          <TileLayer
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            id="mapbox.light"
            url="https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoid29ybGRiYW5rLWVkdWNhdGlvbiIsImEiOiJIZ2VvODFjIn0.TDw5VdwGavwEsch53sAVxA#1.6/23.725906/-39.714135/0"
          />
          {showPopup ? (
            <Popup position={position} minWidth={450}>
              <IncidentForm onCancelButton={this.onCancel} onSubmitButton={this.onSubmit} incidentsType={incidentsType} />
            </Popup>
          ) : null}
        </LeafletMap>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  incidentsType: state.incidentsType.data,
})

const mapDispatchToProps = dispatch => ({
  getIncidentstype: bindActionCreators(
    fetchIncidentsTypeSuccess,
    dispatch
  ),
})

export default connect(mapStateToProps, mapDispatchToProps)(Incidents)