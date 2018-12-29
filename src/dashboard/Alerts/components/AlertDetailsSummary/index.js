import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import AlertFieldItem from './components/AlertFieldItem';

function AlertDetailsSummary({ selectedAlert }) {
  const detailsKeys = [
    'headline',
    'reportedAt',
    'expectedAt',
    'expiredAt',
    'instruction',
    'source',
  ];

  const renderAlertField = keys =>
    keys.map(key => (
      <AlertFieldItem
        key={key}
        property={key}
        value={get(selectedAlert, key)}
      />
    ));
  return selectedAlert === null ? null : (
    <div>{renderAlertField(detailsKeys)}</div>
  );
}

export default AlertDetailsSummary;

AlertDetailsSummary.propTypes = {
  selectedAlert: PropTypes.shape({
    headline: PropTypes.string,
    reportedAt: PropTypes.string,
    expectedAt: PropTypes.string,
    expiredAt: PropTypes.string,
    instruction: PropTypes.string,
    source: PropTypes.string,
  }),
};

AlertDetailsSummary.defaultProps = {
  selectedAlert: null,
};
