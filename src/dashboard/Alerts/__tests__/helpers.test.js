import * as Helpers from '../helpers';

describe(`Helpers`, () => {
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

  it(`tests alertToGeoJson`, () => {
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
