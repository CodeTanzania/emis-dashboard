/*
 * Data used in testing alerts logic
 */

export const alert = {
  source: 'Tanzania Meteorological Agency',
  number: 'URN:OID:2.49.0.0.834.0.2018.7.18.12.20.4',
  status: 'Actual',
  type: 'Alert',
  scope: 'Public',
  category: 'Met',
  event: 'Strong winds and Large waves along the coast',
  response: 'Monitor',
  urgency: 'Expected',
  severity: 'Severe',
  certainty: 'Possible',
  headline: 'ORANGE WARNING. Strong winds and Large waves',
  description: 'This is the patched Alert',
  instruction:
    'Sea users and Residents of high risk areas are advised TO TAKE ACTIONS\r\n\r\nTMA will continue to monitor the situation and issue updates when necessary.',
  area:
    'Coasts of Mtwara, Lindi, Pwani, Dar es salaam, Tanga,  Unguja and Pemba islands',
  geometry: {
    type: 'Polygon',
    coordinates: [[[39.9, -4.6], [39.5, -4.5]]],
  },
  centroid: {
    type: 'Point',
    coordinates: [39.699999999999996, -7.566666666666664],
  },
  reportedAt: '2018-07-18T15:00:00.000Z',
  expectedAt: '2018-07-18T15:00:00.000Z',
  expiredAt: '2018-07-21T18:00:00.000Z',
  direction: 'Inbound',
  color: '#FE9901',
  _id: '5c188aecb470d100048dd5fe',
  updatedAt: '2018-12-28T13:31:59.276Z',
  createdAt: '2018-12-18T05:51:40.350Z',
  tags: ['tanzania', 'meteorological', 'actual', 'alert', 'inbound'],
};

export const polygon = {
  type: 'Feature',
  properties: {},
  geometry: {
    type: 'Polygon',
    coordinates: [[[39.9, -4.6], [39.5, -4.5]]],
  },
};

export const polygons = [polygon];
export const alerts = [alert];
