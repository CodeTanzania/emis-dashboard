import L from 'leaflet';
import moment from 'moment';

export const incidents = [
  {
    type: {
      nature: 'Natural',
      family: 'Geophysical',
      name: 'Volcanic Activity',
      color: '#EFA28F',
      _id: '5bf96bf6785c090004a02add',
    },
    number: 'B0BDA1C7-862E-4934-963A-A50EB17043BF',
    event: 'Quia voluptatum quam exercitationem totam distinctio enim.',
    causes: [
      'Magni placeat asperiores culpa consequatur maxime odit est voluptatibus.',
    ],
    description: 'Autem libero et unde ut aut voluptates molestiae.',
    startedAt: '2018-12-24T10:08:38.143Z',
    areas: ['Bedfordshire'],
    epicentre: {
      type: 'Feature',
      properties: {
        number: 'B0BDA1C7-862E-4934-963A-A50EB17043BF',
        event: 'Quia voluptatum quam exercitationem totam distinctio enim.',
        causes: [
          'Magni placeat asperiores culpa consequatur maxime odit est voluptatibus.',
        ],
        areas: ['Bedfordshire'],
        remarks: ['Recusandae odio ut dolore possimus in ut tempore.'],
        description: 'Autem libero et unde ut aut voluptates molestiae.',
        startedAt: '2018-12-24T10:08:38.143Z',
        endedAt: '2018-10-26T03:13:12.515Z',
        incidenttype: {
          nature: 'Natural',
          family: 'Geophysical',
          name: 'Volcanic Activity',
          color: '#EFA28F',
          _id: '5bf96bf6785c090004a02add',
        },
        _id: '5c345fc85a7a800004c28992',
      },
      geometry: {
        type: 'Point',
        coordinates: [39.06558075493506, -2.8934711655595677],
      },
    },
    remarks: ['Recusandae odio ut dolore possimus in ut tempore.'],
    endedAt: '2018-10-26T03:13:12.515Z',
    _id: '5c345fc85a7a800004c28992',
    updatedAt: '2019-01-08T08:31:04.706Z',
    createdAt: '2019-01-08T08:31:04.706Z',
  },
  {
    type: {
      nature: 'Natural',
      family: 'Geophysical',
      name: 'Dry Mass Movement',
      color: '#85F771',
      _id: '5bf96bf6785c090004a02ae3',
    },
    number: '0E259A2A-2712-4530-A839-9B0889E6EBAA',
    event:
      'Aliquid architecto non excepturi et tenetur maxime laudantium provident.',
    causes: [
      'Laborum iusto et ea nobis quisquam minima accusantium sint ducimus.',
    ],
    description: 'Minus repellat velit molestiae aperiam beatae.',
    startedAt: '2018-10-28T06:20:39.712Z',
    areas: ['Berkshire'],
    epicentre: {
      type: 'Feature',
      properties: {
        number: '0E259A2A-2712-4530-A839-9B0889E6EBAA',
        event:
          'Aliquid architecto non excepturi et tenetur maxime laudantium provident.',
        causes: [
          'Laborum iusto et ea nobis quisquam minima accusantium sint ducimus.',
        ],
        areas: ['Berkshire'],
        remarks: ['Sit temporibus aliquid in porro est aliquam.'],

        description: 'Minus repellat velit molestiae aperiam beatae.',
        startedAt: '2018-10-28T06:20:39.712Z',
        endedAt: '2019-01-01T10:38:29.205Z',
        incidenttype: {
          nature: 'Natural',
          family: 'Geophysical',
          name: 'Dry Mass Movement',
          color: '#85F771',
          _id: '5bf96bf6785c090004a02ae3',
        },
        _id: '5c345fc85a7a800004c28993',
      },
      geometry: {
        type: 'Point',
        coordinates: [36.554333821521816, -6.003393673983406],
      },
    },
    remarks: ['Sit temporibus aliquid in porro est aliquam.'],
    endedAt: '2019-01-01T10:38:29.205Z',
    _id: '5c345fc85a7a800004c28993',
    updatedAt: '2019-01-08T08:31:04.706Z',
    createdAt: '2019-01-08T08:31:04.706Z',
  },
  {
    type: {
      nature: 'Natural',
      family: 'Meteorological',
      name: 'Storm',
      color: '#F776E6',
      _id: '5bf96bf6785c090004a02ad5',
    },
    number: 'C7DA9AC4-9A5A-46C2-93C5-2C93752757FB',
    event: 'Non totam odio accusantium quibusdam maxime qui excepturi est.',
    causes: ['Est consequatur consequatur in quia ea ut maxime cupiditate.'],
    description: 'Est est nam nulla ullam.',
    startedAt: '2018-07-09T05:43:42.209Z',
    areas: ['Berkshire'],
    epicentre: {
      type: 'Feature',
      properties: {
        number: 'C7DA9AC4-9A5A-46C2-93C5-2C93752757FB',
        event: 'Non totam odio accusantium quibusdam maxime qui excepturi est.',
        causes: [
          'Est consequatur consequatur in quia ea ut maxime cupiditate.',
        ],
        areas: ['Berkshire'],
        remarks: ['Deserunt corporis labore libero aperiam.'],

        description: 'Est est nam nulla ullam.',
        startedAt: '2018-07-09T05:43:42.209Z',
        endedAt: '2018-09-01T08:54:00.405Z',
        incidenttype: {
          nature: 'Natural',
          family: 'Meteorological',
          name: 'Storm',
          color: '#F776E6',
          _id: '5bf96bf6785c090004a02ad5',
        },
        _id: '5c345fc85a7a800004c28994',
      },
      geometry: {
        type: 'Point',
        coordinates: [38.451796326023675, -3.034215008679446],
      },
    },
    remarks: ['Deserunt corporis labore libero aperiam.'],
    endedAt: '2018-09-01T08:54:00.405Z',
    _id: '5c345fc85a7a800004c28994',
    updatedAt: '2019-01-08T08:31:04.707Z',
    createdAt: '2019-01-08T08:31:04.707Z',
  },
  {
    type: {
      nature: 'Natural',
      family: 'Meteorological',
      name: 'Extreme Temperature',
      color: '#F298A1',
      _id: '5bf96bf6785c090004a02ad8',
    },
    number: 'BCD650C5-F605-4EF3-8161-85786F2C3696',
    event: 'Omnis quod reprehenderit tempora aut neque sapiente deleniti eius.',
    causes: [
      'Alias molestiae magni perspiciatis inventore iusto alias nemo animi quo.',
    ],
    description: 'Aliquam voluptatibus hic officia quam et iusto.',
    startedAt: '2018-07-07T20:05:27.826Z',
    areas: ['Borders'],
    epicentre: {
      type: 'Feature',
      properties: {
        number: 'BCD650C5-F605-4EF3-8161-85786F2C3696',
        event:
          'Omnis quod reprehenderit tempora aut neque sapiente deleniti eius.',
        causes: [
          'Alias molestiae magni perspiciatis inventore iusto alias nemo animi quo.',
        ],
        areas: ['Borders'],
        remarks: ['Quod dolores ea.'],

        description: 'Aliquam voluptatibus hic officia quam et iusto.',
        startedAt: '2018-07-07T20:05:27.826Z',
        endedAt: '2018-11-06T00:09:07.622Z',
        incidenttype: {
          nature: 'Natural',
          family: 'Meteorological',
          name: 'Extreme Temperature',
          color: '#F298A1',
          _id: '5bf96bf6785c090004a02ad8',
        },
        _id: '5c345fc85a7a800004c28995',
      },
      geometry: {
        type: 'Point',
        coordinates: [31.06330788570888, -5.084299656065556],
      },
    },
    remarks: ['Quod dolores ea.'],
    endedAt: '2018-11-06T00:09:07.622Z',
    _id: '5c345fc85a7a800004c28995',
    updatedAt: '2019-01-08T08:31:04.707Z',
    createdAt: '2019-01-08T08:31:04.707Z',
  },
  {
    type: {
      nature: 'Natural',
      family: 'Meteorological',
      name: 'Fog',
      color: '#9CFCBE',
      _id: '5bf96bf6785c090004a02ae7',
    },
    number: 'AC79CA8D-D3C3-4BC9-8EF4-932AEDB3A8CE',
    event: 'Et rerum et nisi sequi quas corrupti repudiandae dicta natus.',
    causes: ['Dolorum pariatur alias at dolor eum sit incidunt ducimus sed.'],
    description: 'Quia quos ut debitis repellat eos.',
    startedAt: '2018-09-13T12:17:03.180Z',
    areas: ['Berkshire'],
    epicentre: {
      type: 'Feature',
      properties: {
        number: 'AC79CA8D-D3C3-4BC9-8EF4-932AEDB3A8CE',
        event: 'Et rerum et nisi sequi quas corrupti repudiandae dicta natus.',
        causes: [
          'Dolorum pariatur alias at dolor eum sit incidunt ducimus sed.',
        ],
        areas: ['Berkshire'],
        remarks: [
          'Laboriosam consequatur eveniet molestiae earum delectus accusamus.',
        ],

        description: 'Quia quos ut debitis repellat eos.',
        startedAt: '2018-09-13T12:17:03.180Z',
        endedAt: '2018-10-02T13:22:22.578Z',
        incidenttype: {
          nature: 'Natural',
          family: 'Meteorological',
          name: 'Fog',
          color: '#9CFCBE',
          _id: '5bf96bf6785c090004a02ae7',
        },
        _id: '5c345fc85a7a800004c28996',
      },
      geometry: {
        type: 'Point',
        coordinates: [35.76937711015205, -6.683815254602501],
      },
    },
    remarks: [
      'Laboriosam consequatur eveniet molestiae earum delectus accusamus.',
    ],
    endedAt: '2018-10-02T13:22:22.578Z',
    _id: '5c345fc85a7a800004c28996',
    updatedAt: '2019-01-08T08:31:04.708Z',
    createdAt: '2019-01-08T08:31:04.707Z',
  },
  {
    type: {
      nature: 'Natural',
      family: 'Climatological',
      name: 'Drought',
      color: '#BBFCA1',
      _id: '5bf96bf6785c090004a02ad9',
    },
    number: 'C0800EF3-006F-4C19-B923-A3BDE158AD31',
    event: 'Accusamus et eos saepe non delectus error.',
    causes: ['Fugit quia quisquam rerum quam eos ea sed enim.'],
    description: 'Rerum odit quod quidem labore sed quae consequatur non.',
    startedAt: '2018-05-29T19:51:23.274Z',
    areas: ['Berkshire'],
    epicentre: {
      type: 'Feature',
      properties: {
        number: 'C0800EF3-006F-4C19-B923-A3BDE158AD31',
        event: 'Accusamus et eos saepe non delectus error.',
        causes: ['Fugit quia quisquam rerum quam eos ea sed enim.'],
        areas: ['Berkshire'],
        remarks: ['Nisi harum assumenda.'],
        description: 'Rerum odit quod quidem labore sed quae consequatur non.',
        startedAt: '2018-05-29T19:51:23.274Z',
        endedAt: '2018-08-24T09:00:19.324Z',
        incidenttype: {
          nature: 'Natural',
          family: 'Climatological',
          name: 'Drought',
          color: '#BBFCA1',
          _id: '5bf96bf6785c090004a02ad9',
        },
        _id: '5c345fc85a7a800004c2899a',
      },
      geometry: {
        type: 'Point',
        coordinates: [36.47365959692709, -3.36976989671645],
      },
    },
    remarks: ['Nisi harum assumenda.'],
    endedAt: '2018-08-24T09:00:19.324Z',
    _id: '5c345fc85a7a800004c2899a',
    updatedAt: '2019-01-08T08:31:04.709Z',
    createdAt: '2019-01-08T08:31:04.709Z',
  },
  {
    type: {
      nature: 'Natural',
      family: 'Climatological',
      name: 'Wildfire',
      color: '#72F9F5',
      _id: '5bf96bf6785c090004a02ae8',
    },
    number: '8017980C-703A-43A1-9B63-3BE01EB8444B',
    event:
      'Blanditiis dolor distinctio corporis odit aliquid nihil et dolorem doloribus.',
    causes: ['Quis repellat adipisci aut placeat ab reprehenderit.'],
    description:
      'Veritatis eum praesentium velit aut exercitationem sit possimus.',
    startedAt: '2018-11-30T22:37:03.876Z',
    areas: ['Cambridgeshire'],
    epicentre: {
      type: 'Feature',
      properties: {
        number: '8017980C-703A-43A1-9B63-3BE01EB8444B',
        event:
          'Blanditiis dolor distinctio corporis odit aliquid nihil et dolorem doloribus.',
        causes: ['Quis repellat adipisci aut placeat ab reprehenderit.'],
        areas: ['Cambridgeshire'],
        remarks: ['Quibusdam suscipit voluptatum aut.'],
        description:
          'Veritatis eum praesentium velit aut exercitationem sit possimus.',
        startedAt: '2018-11-30T22:37:03.876Z',
        endedAt: '2018-11-27T09:54:33.164Z',
        incidenttype: {
          nature: 'Natural',
          family: 'Climatological',
          name: 'Wildfire',
          color: '#72F9F5',
          _id: '5bf96bf6785c090004a02ae8',
        },
        _id: '5c345fc85a7a800004c2899b',
      },
      geometry: {
        type: 'Point',
        coordinates: [40.253475446093724, -2.7756648802194004],
      },
    },
    remarks: ['Quibusdam suscipit voluptatum aut.'],
    endedAt: '2018-11-27T09:54:33.164Z',
    _id: '5c345fc85a7a800004c2899b',
    updatedAt: '2019-01-08T08:31:04.709Z',
    createdAt: '2019-01-08T08:31:04.709Z',
  },
  {
    type: {
      nature: 'Natural',
      family: 'Climatological',
      name: 'Glacial Lake Outburst',
      color: '#9FFCC1',
      _id: '5bf96bf6785c090004a02adf',
    },
    number: '791FFA0C-0241-4630-A9A9-5957E0B00C39',
    event: 'Debitis iste nihil nihil nam molestiae quia odio.',
    causes: ['Hic asperiores porro rerum ex.'],
    description: 'Non neque ut qui.',
    startedAt: '2018-11-24T12:43:59.727Z',
    areas: ['Berkshire'],
    epicentre: {
      type: 'Feature',
      properties: {
        number: '791FFA0C-0241-4630-A9A9-5957E0B00C39',
        event: 'Debitis iste nihil nihil nam molestiae quia odio.',
        causes: ['Hic asperiores porro rerum ex.'],
        areas: ['Berkshire'],
        remarks: ['Saepe est beatae labore.'],
        description: 'Non neque ut qui.',
        startedAt: '2018-11-24T12:43:59.727Z',
        endedAt: '2018-10-20T16:46:15.333Z',
        incidenttype: {
          nature: 'Natural',
          family: 'Climatological',
          name: 'Glacial Lake Outburst',
          color: '#9FFCC1',
          _id: '5bf96bf6785c090004a02adf',
        },
        _id: '5c345fc85a7a800004c2899c',
      },
      geometry: {
        type: 'Point',
        coordinates: [30.487012917221257, -2.764668022341306],
      },
    },
    remarks: ['Saepe est beatae labore.'],
    endedAt: '2018-10-20T16:46:15.333Z',
    _id: '5c345fc85a7a800004c2899c',
    updatedAt: '2019-01-08T08:31:04.710Z',
    createdAt: '2019-01-08T08:31:04.710Z',
  },
];

export function incidentToGeojson(incident) {
  const {
    number,
    event,
    causes,
    areas,
    remarks,
    tags,
    type: incidenttype,
    description,
    startedAt,
    endedAt,
    epicentre,
    _id,
  } = incident;
  const type = 'Feature';
  const properties = {
    number,
    event,
    causes,
    areas,
    remarks,
    tags,
    description,
    startedAt,
    endedAt,
    incidenttype,
    _id,
  };

  const geometry = epicentre;

  return { type, properties, geometry };
}

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

export const baseMaps = {
  OpenStreetMap: osm,
  Satellite: satelliteLayer,
  Standard: customOsmBright,
  Dafault: defaultMap,
};

export function generateMarkerIcon(fillColor = '#93c47d') {
  const svg = `<svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 453.54 566.93">
  <defs>
    <style>
      .cls-1 {
        fill: ${fillColor};
      }
    </style>
  </defs>
  <title>Severity-Minor</title>
  <path class="cls-1"
   d="M198.43,17.57A160.05,160.05,0,0,0,54.1,246.69c.56,1.19,144.33,282.88,144.33,282.88L341,250.19A160,160,0,0,0,198.43,17.57Zm0,256a96,96,0,1,1,96-96A96,96,0,0,1,198.43,273.57Z"/>
  </svg>
  `;

  const CustomIcon = L.Icon.extend({
    options: {
      iconSize: [40, 40],
      iconAnchor: [10, 20],
      shadowAnchor: [4, 62],
      popupAnchor: [0, -25],
    },
  });

  const iconUrl = encodeURI(`data:image/svg+xml,${svg}`).replace('#', '%23');
  const icon = new CustomIcon({ iconUrl });
  return icon;
}

export function showMarkers(geoJSON) {
  const { geometry, properties } = geoJSON;
  const { incidenttype } = properties;
  const { color } = incidenttype;
  const customIcon = generateMarkerIcon(color);
  const { coordinates } = geometry;
  return L.marker(coordinates.reverse(), { icon: customIcon });
}

export const convertIsoDate = date =>
  moment(date).format(' MMMM Do YYYY, h:mm:ss a');

export const convertIsoDateOnly = date => moment(date).format('MMMM Do YYYY');

export const causes = ['Alert', 'Plan', 'Others'];
export const location = ['Ubungo', 'Ilala', 'Temeke', 'Kigamboni', 'Kinondoni'];
