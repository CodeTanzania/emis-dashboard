import React from 'react';
import PropTypes from 'prop-types';
import { isoDateToHumanReadableDate } from '../../../../../../../../helpers';

function MoreDetailsAlert({
  alert: { source, status, type, scope, reportedAt, number },
}) {
  return (
    <div>
      <p>
        <b>Source of the Alert:</b> {source}
      </p>
      <p>
        <b>Status of the Alert:</b> {status}
      </p>
      <p>
        <b>Scope of the Alert:</b> {scope}
      </p>
      <p>
        <b>Type of the Alert:</b> {type}
      </p>
      <p>
        <b>This Alert was sent on:</b> {isoDateToHumanReadableDate(reportedAt)}
      </p>
      <p>
        <b>Number:</b> {number}
      </p>
    </div>
  );
}

export default MoreDetailsAlert;

MoreDetailsAlert.propTypes = {
  alert: PropTypes.shape({
    headline: PropTypes.string,
    reportedAt: PropTypes.string,
    expectedAt: PropTypes.string,
    expiredAt: PropTypes.string,
    instruction: PropTypes.string,
    source: PropTypes.string,
  }),
};

MoreDetailsAlert.defaultProps = {
  alert: {},
};
