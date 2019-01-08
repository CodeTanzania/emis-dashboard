import moment from 'moment';
import isEmpty from 'lodash/isEmpty';
import merge from 'lodash/merge';

/**
 * Helper functions
 */

/**
 * generates costom svg  Icon url based  on the color
 * supplied
 *
 * @function
 * @name generateSvgIconUrl
 *
 * @param {Object} svgIconUrl
 *
 * @returns {string} human readable date
 * @version 0.1.0
 * @since 0.1.0
 */
export function generateSvgIconUrl(fillColor = '#93c47d') {
  const svg = `<svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 453.54 566.93">
    <defs>
      <style>
        .cls-1 {
          fill: ${fillColor};
        }
      </style>
    </defs>
    <title>Severity-Minor</title>
    <path class="cls-1" d="M198.43,17.57A160.05,160.05,0,0,0,54.1,246.69c.56,1.19,144.33,282.88,144.33,282.88L341,250.19A160,160,0,0,0,198.43,17.57Zm0,256a96,96,0,1,1,96-96A96,96,0,0,1,198.43,273.57Z"/>
    </svg>
    `;

  const svgIconUrl = encodeURI(`data:image/svg+xml,${svg}`).replace('#', '%23');
  return svgIconUrl;
}

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
  return moment(isoFormattDate)
    .utc()
    .format('dddd, MMMM Do YYYY, h:mm:ss a');
}

/**
 *Receives filter data and format it to an object that can be used as params in
filtering alerts from API
 *
 * @function
 * @name generateFilterparams
 *
 * @param {Object} filters
 *
 * @returns {Object} filter params
 * @version 0.1.0
 * @since 0.1.0
 */
export function generateFilterParams(filters) {
  let allParams = { limit: 100 };
  if (!isEmpty(filters.expectedAt)) {
    allParams = merge({}, allParams, {
      filter: {
        expectedAt: { $gte: filters.expectedAt[0], $lt: filters.expectedAt[1] },
      },
    });
  }

  if (!isEmpty(filters.severity)) {
    allParams = merge({}, allParams, {
      filter: { severity: { $in: filters.severity } },
    });
  }

  return allParams;
}

/**
 * converts today's date to human readable
 * date
 *
 * @function
 * @name humanTimeToday
 *
 * @returns {string} human readable date
 * @version 0.1.0
 * @since 0.1.0
 */
export const humanTimeToday = () => moment().format(' MMMM Do ');

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
 * Generates a GeoJSON Polygon
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
export const generateGeoJsonPolygon = (geometry, properties = {}) => ({
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
  const { centroid, _id: id, event, expectedAt, geometry, color } = alert;
  const properties = { id, event, expectedAt, color };
  if (type === 'Point') {
    const point = generateGeoJsonPoint(centroid, properties);
    return point;
  }
  if (type === 'Polygon') {
    const polygon = generateGeoJsonPolygon(geometry, properties);
    return polygon;
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

// data about severity colors
export const severityColors = [
  { property: 'Extreme', value: '#d72e29' },
  { property: 'Severe', value: '#fe9901' },
  { property: 'Moderate', value: '#ffff00' },
  { property: 'Minor', value: '#88e729' },
  { property: 'Unknown', value: '#3366ff' },
];
