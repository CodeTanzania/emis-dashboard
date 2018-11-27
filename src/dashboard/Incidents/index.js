import React from 'react';
import { get } from 'lodash';
import L from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import 'leaflet-draw';
import IncidentForm from './components/IncidentForm';
import MapNav from './components/MapNav';
import { getIncidentsSuccess } from './actions';
import { showMarkers} from '../../common/lib/mapUtil';
import popupContent from './components/mapPopup';
import '../styles.css';
import 'leaflet-draw/dist/leaflet.draw.css';

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
  static propTypes = {
    incidents: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        incidentsType: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        startAt: PropTypes.string.isRequired,
        endAt: PropTypes.string.isRequired,
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
      position: [-6.8161, 39.2804],
      zoom: 7,
      showPopup: false,
      hideButton: false,
      area: {},
    };
    this.mapRef = React.createRef();
    this.onclickNewIncidentButton = this.onclickNewIncidentButton.bind(this);
    this.onCancelButton = this.onCancel.bind(this);
    this.onSubmitButton = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.map = this.mapRef.current.leafletElement;
    this.mapLayers();
    this.DisplayMarkers();
    const { handleIncidents } = this.props;
    handleIncidents();
  }

  componentDidUpdate(prevProps) {
    const { incidents } = this.props;
    if (incidents !== prevProps.incidents) {
      incidents.map(({ epicentre }) => this.incidentLayer.addData(epicentre));
      this.map.setView([-6.179, 35.754], 7);
      this.map.flyTo([-6.179, 35.754]);
    }
  }

  DisplayMarkers = () => {
    this.incidentLayer = L.geoJSON([], {
      pointToLayer: showMarkers,
      onEachFeature: this.onEachFeature,
    }).addTo(this.map);
  };
 
  onEachFeature = (feature, layer) => {
    const { properties, } = feature;
    const { name,incidentType,description,startedAt, } = properties;
    layer.bindPopup(popupContent({name,incidentType,description,startedAt}));
        layer
          .on({ click: this.onclickGeoJson })
          .bindTooltip(`${name}`)
          .openTooltip();
      
  };

  mapLayers = () => {
    const mapboxAttribution =
      '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a>' +
      ' © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> ' +
      '<strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">' +
      'Improve this map</a></strong>';

    const osmAttr =
      'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,' +
      ' <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>';

    const osm = new L.TileLayer(
      'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution: osmAttr,
        maxZoom: 19,
      }
    );

    const customOsmBright = new L.TileLayer(
      'https://api.mapbox.com/styles/v1/samtwesa/' +
        'cj6p13u2o25wa2rmj3k05qnrx/tiles/256/{z}/{x}/{y}?access_token=' +
        'pk.eyJ1Ijoic2FtdHdlc2EiLCJhIjoiZTc1OTQ4ODE0ZmY2MzY0MGYwMDNjOWNlYTYxMjU4NDYifQ.' +
        'F1zCcOYqpXWd4C9l9xqvEQ',
      {
        attribution: mapboxAttribution,
        maxZoom: 20,
      }
    );

    const defaultMap = new L.TileLayer(
      'https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoid29ybGRiYW5rLWVkdWNhdGlvbiIsImEiOiJIZ2VvODFjIn0.TDw5VdwGavwEsch53sAVxA#1.6/23.725906/-39.714135/0',
      {
        attribution: mapboxAttribution,
        maxZoom: 20,
      }
    );

    const satelliteLayer = new L.TileLayer(
      'https://api.mapbox.com/styles/v1/mapbox/satellite-v9/' +
        'tiles/256/{z}/{x}/{y}?access_token=' +
        'pk.eyJ1Ijoic2FtdHdlc2EiLCJhIjoiZTc1OTQ4ODE0ZmY2MzY0MGYwMDNjOWNlYTYxMjU4NDYifQ.' +
        'F1zCcOYqpXWd4C9l9xqvEQ',
      {
        attribution: mapboxAttribution,
        maxZoom: 20,
      }
    );

    const baseMaps = {
      OpenStreetMap: osm,
      Satellite: satelliteLayer,
      Standard: customOsmBright,
      Dafault: defaultMap,
    };

    L.control.layers(baseMaps).addTo(this.map);
  };

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
          <button type="button" id="ok-button" class="ant-btn ant-btn-primary"><span>OK</span></button>
        </div>
      </div>
    </div> `;

    this.popup = L.popup({ minWidth: 400 })
      .setLatLng(position)
      .setContent(contents)
      .openOn(this.map);
    this.setState({ hideButton: true });

    // document.querySelector('#ok-button').addEventListener('click', e => {
    //   e.preventDefault();
    //   this.map.closePopup();
    // });
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

  onSubmit = () => {
    this.map.removeControl(this.drawControl);
    this.setState({ hideButton: false });
    this.map.closePopup();
  };

  render() {
    const { position, zoom, showPopup, hideButton, area } = this.state;
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
              <IncidentForm
                onCancelButton={this.onCancel}
                onSubmitButton={this.onSubmit}
                area={area}
              />
            </Popup>
          ) : null}
        </LeafletMap>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  incidents: state.incidents.data ? state.incidents.data : [],
});

const mapDispatchToProps = dispatch => ({
  handleIncidents: bindActionCreators(getIncidentsSuccess, dispatch),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Incidents);
