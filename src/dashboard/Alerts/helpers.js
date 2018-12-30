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
 * @returns {Object} GeoJSON feature
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
 * @returns {Object} GeoJSON point
 * @version 0.1.0
 * @since 0.1.0
 */
export function alertToGeoJson(alert, type) {
  const { centroid, _id: id } = alert;
  if (type === 'Point') {
    const properties = { id };
    const point = generateGeoJsonPoint(centroid, properties);
    return point;
  }

  return null;
}

/**
 * Converts array Alert Objects  to Array of GeoJSON objects
 *
 * @function
 * @name alertsToGeoJson
 *
 * @param {Array} alerts
 *
 * @returns {Array} GeoJSON  points
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function alertsToGeoJson(alerts) {
  const alertPoints = alerts.map(alert => alertToGeoJson(alert, 'Point'));
  return alertPoints;
}
