import React from 'react';
import * as ReactLeaflet from 'react-leaflet';
import { Row, Col, Button } from 'antd';
import { IncidentForm } from './components/IncidentsForm';
import './styles.css';

const { Map: LeafletMap, TileLayer, Marker, Popup } = ReactLeaflet;

export default class Incidents extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: -6.8161,
      lng: 39.2804,
      zoom: 13,
    };
  }

  render() {
    const renderIncidentActions = () => (
      <div id="sidebar">
        <Row style={{ padding: '5px' }}>
          <Col span={12}>
            <IncidentForm />
          </Col>

          <Col />
        </Row>
      </div>
    );
    const position = [this.state.lat, this.state.lng];
    return (
      <div>
        {renderIncidentActions()}
        <LeafletMap center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            id="mapbox.light"
            url="https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoid29ybGRiYW5rLWVkdWNhdGlvbiIsImEiOiJIZ2VvODFjIn0.TDw5VdwGavwEsch53sAVxA#1.6/23.725906/-39.714135/0"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </LeafletMap>
      </div>
    );
  }
}
