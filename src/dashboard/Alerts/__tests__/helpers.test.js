import moment from 'moment';
import * as Helpers from '../helpers';

describe(`Helpers`, () => {
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
