import L from 'leaflet';

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

export const satelliteLayer = new L.TileLayer(
  'https://api.mapbox.com/styles/v1/mapbox/satellite-v9/' +
    'tiles/256/{z}/{x}/{y}?access_token=' +
    'pk.eyJ1Ijoic2FtdHdlc2EiLCJhIjoiZTc1OTQ4ODE0ZmY2MzY0MGYwMDNjOWNlYTYxMjU4NDYifQ.' +
    'F1zCcOYqpXWd4C9l9xqvEQ',
  {
    attribution: mapboxAttribution,
    maxZoom: 20,
  }
);

export const baseLayers = {
  OpenStreetMap: osm,
  Satellite: satelliteLayer,
  Standard: customOsmBright,
  Dafault: defaultMap,
};
