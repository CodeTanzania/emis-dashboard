import React from 'react';
import { get } from 'lodash';
import L from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import 'leaflet-draw';
import IncidentForm from './components/IncidentForm';
import MapNav from './components/MapNav';

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
export default class Incidents extends React.Component {
  constructor() {
    super();
    this.state = {
      position: [-6.8161, 39.2804],
      area: {},
      zoom: 13,
      showPopup: false
    };

    this.mapRef = React.createRef();
  }

  initDrawControls = () => {
    this.drawnItems = new L.FeatureGroup();
    this.map.addLayer(this.drawnItems);
    this.drawControl = new L.Control.Draw({
      position: 'topleft',
      draw: {
        polyline: false,
        circlemarker: false, // Turns off this drawing tool
        rectangle: false,
        marker: true,
      },
      edit: {
        featureGroup: this.drawnItems,
      },
    });
    this.map.addControl(this.drawControl);
  }

  showDrawnItems = (e) => {
    const { layer } = e;
    this.drawnItems.addLayer(layer);
    console.log('drwan area');
    console.log(layer.toGeoJSON());
    const type = get(layer.toGeoJSON(), 'geometry.type')
    this.setState({
      position: type === 'Point' ? layer.getLatLng() : layer.getBounds().
        getCenter(), area: layer.toGeoJSON(),
      showPopup: true
    });
  }

  componentDidMount() {
    this.map = this.mapRef.current.leafletElement;
    this.initDrawControls();
    this.map.on('draw:created', e => this.showDrawnItems(e));


  }

  render() {
    const { position, zoom, showPopup } = this.state;
    return (
      <div>
        <MapNav />
        <LeafletMap
          center={position}
          zoom={zoom}
          ref={this.mapRef}
        >
          <TileLayer
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            id="mapbox.light"
            url="https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoid29ybGRiYW5rLWVkdWNhdGlvbiIsImEiOiJIZ2VvODFjIn0.TDw5VdwGavwEsch53sAVxA#1.6/23.725906/-39.714135/0"
          />
          {showPopup ? <Popup position={position} minWidth={400}>
            <IncidentForm />
          </Popup> : null}
        </LeafletMap>

      </div>
    );
  }
}
