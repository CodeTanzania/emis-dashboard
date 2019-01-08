import moment from 'moment';
import * as Helpers from '../helpers';

describe(`Helpers`, () => {
  it('tests generateSvgIconUrl', () => {
    const color = '#93c47d';
    const iconUrl = `data:image/svg+xml,%3Csvg%20id=%22Capa_1%22%20data-name=%22Capa%201%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20453.54%20566.93%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3Cstyle%3E%0A%20%20%20%20%20%20%20%20.cls-1%20%7B%0A%20%20%20%20%20%20%20%20%20%20fill:%20%2393c47d;%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%3C/style%3E%0A%20%20%20%20%3C/defs%3E%0A%20%20%20%20%3Ctitle%3ESeverity-Minor%3C/title%3E%0A%20%20%20%20%3Cpath%20class=%22cls-1%22%20d=%22M198.43,17.57A160.05,160.05,0,0,0,54.1,246.69c.56,1.19,144.33,282.88,144.33,282.88L341,250.19A160,160,0,0,0,198.43,17.57Zm0,256a96,96,0,1,1,96-96A96,96,0,0,1,198.43,273.57Z%22/%3E%0A%20%20%20%20%3C/svg%3E%0A%20%20%20%20`;
    expect(Helpers.generateSvgIconUrl(color)).toEqual(iconUrl);
  });

  it('tests generateFilterParams when expected At Filter is active', () => {
    const filters = {
      expectedAt: ['2019-01-07T06:11:51.661Z', '2020-01-07T06:11:51.661Z'],
    };
    const expected = {
      filter: {
        expectedAt: {
          $gte: '2019-01-07T06:11:51.661Z',
          $lt: '2020-01-07T06:11:51.661Z',
        },
      },
      limit: 100,
    };
    expect(Helpers.generateFilterParams(filters)).toEqual(expected);
  });

  it(`tests isoDateToHumanReadableDate`, () => {
    const isoDate = '2018-07-18T15:00:00.000Z';
    const expected = 'Wednesday, July 18th 2018, 3:00:00 pm';
    expect(Helpers.isoDateToHumanReadableDate(isoDate)).toBe(expected);
  });

  it(' tests humanTimeToday', () => {
    const today = moment().format(' MMMM Do ');
    expect(Helpers.humanTimeToday()).toBe(today);
  });

  it(`tests formatAlertFieldType`, () => {
    const alertFieldType = 'description';
    const expected = ' ALERT DESCRIPTION';
    expect(Helpers.formatAlertFieldType(alertFieldType)).toBe(expected);
  });

  it('test formatAlertFieldTypeValue', () => {
    const fieldType = 'reportedAt';
    const fieldValue = '2018-07-18T15:00:00.000Z';
    const expected = 'Wednesday, July 18th 2018, 3:00:00 pm';
    expect(Helpers.formatAlertFieldTypeValue(fieldType, fieldValue)).toBe(
      expected
    );
  });

  it('tests generateGeoJsonPoint', () => {
    const geometry = {
      type: 'Point',
      coordinates: [1, 2],
    };

    const properties = {
      id: '1234abcd',
    };

    const expected = {
      type: 'Feature',
      geometry,
      properties,
    };

    expect(Helpers.generateGeoJsonPoint(geometry, properties)).toEqual(
      expected
    );
  });

  it('tests generateGeoJsonPolygon', () => {
    const geometry = {
      type: 'Polygon',
      coordinates: [[1, 2], [3, 4]],
    };

    const expected = {
      type: 'Feature',
      geometry,
      properties: {},
    };

    expect(Helpers.generateGeoJsonPolygon(geometry)).toEqual(expected);
  });

  it(`tests alertToGeoJson when type is Polygon`, () => {
    const alert = {
      geometry: {
        type: 'Polygon',
        coordinates: [[1, 2], [3, 4]],
      },
    };

    const type = 'Polygon';

    const expected = {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[1, 2], [3, 4]],
      },
      properties: {},
    };

    expect(Helpers.alertToGeoJson(alert, type)).toEqual(expected);
  });

  it(`tests alertToGeoJson when type is Point`, () => {
    const alert = {
      centroid: {
        type: 'Point',
        coordinates: [1, 2],
      },
      _id: '1234abcd',
    };

    const type = 'Point';

    const expected = {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [1, 2],
      },
      properties: {
        id: '1234abcd',
      },
    };

    expect(Helpers.alertToGeoJson(alert, type)).toEqual(expected);
  });

  it('test alertsToGeoJson', () => {
    const alerts = [];
    const expected = [];

    expect(Helpers.alertsToGeoJson(alerts)).toEqual(expected);
  });
});
