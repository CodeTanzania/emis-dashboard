import moment from 'moment';

/**
 * Helper functions
 */

/**
 * converts ISO date string to human readable
 * date and time
 *
 * @function
 * @name isoDateToHumanReadableDate
 *
 * @param {string} isoFormattDate
 *
 * @returns {string} human readable date
 * @version 0.1.0
 * @since 0.1.0
 */
export function isoDateToHumanReadableDate(isoFormattDate) {
  return moment(isoFormattDate).format('dddd, MMMM Do YYYY, h:mm:ss a');
}

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
  const { centroid, _id: id, event, expectedAt } = alert;
  if (type === 'Point') {
    const properties = { id, event, expectedAt };
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

/**
 * Formats Alert Field types in a way that they can be
 * easily understood
 *
 * @function
 * @name formatAlertFieldType
 *
 * @param {string} fieldType
 *
 * @returns {string} formatted field type
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function formatAlertFieldType(fieldType) {
  switch (fieldType) {
    case 'area.description': {
      return ' AREA DESCRIPTION';
    }
    case 'description': {
      return ' ALERT DESCRIPTION';
    }
    case 'reportedAt': {
      return ' WAS REPORTED ON';
    }
    case 'expectedAt': {
      return ' IS EXPECTED ON';
    }

    case 'expiredAt': {
      return ' WILL EXPIRE ON';
    }

    case 'source': {
      return 'ISSUED BY';
    }

    case 'headline': {
      return 'HEADLINE';
    }

    case 'instruction': {
      return 'INSTRUCTION';
    }

    default:
      return fieldType;
  }
}

/**
 * Formats Alert Field types values in a way that they can be
 * easily understood
 *
 * @function
 * @name formatAlertFieldTypeValue
 *
 * @param {string} fieldType
 * @param {string} fieldValue
 *
 * @returns {string} formatted field type value
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function formatAlertFieldTypeValue(fieldType, fieldValue) {
  switch (fieldType) {
    case 'reportedAt': {
      const m = isoDateToHumanReadableDate(fieldValue);
      return m;
    }
    case 'expectedAt': {
      const m = isoDateToHumanReadableDate(fieldValue);
      return m;
    }

    case 'expiredAt': {
      const m = isoDateToHumanReadableDate(fieldValue);
      return m;
    }

    default:
      return fieldValue;
  }
}
