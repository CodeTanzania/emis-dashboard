/**
 * Helper functions
 */

/**
 * combines geomentry and properties objects
 * to generate a GeoJSON Point feature
 *
 * @function
 * @name generateGeoJsonPoint
 *
 * @param {Object} geomentry
 * @param {Object} properties
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export const generateGeoJsonPoint = (geometry, properties) => ({
  type: 'Feature',
  properties,
  geometry,
});

/**
 * Converts Alert Object to GeoJSON object
 *
 * @function
 * @name alertToGeoJson
 *
 * @param {Object} alert
 * @param {string} type // type of the GeoJSON( Eg. point, polygon or cirlce)
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function alertToGeoJson(alert, type) {
  const { centroind, _id: id } = alert;
  if (type === 'Point') {
    const properties = { id };
    const point = generateGeoJsonPoint(centroind, properties);
    return point;
  }

  return null;
}
