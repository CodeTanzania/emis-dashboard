import React from 'react';
import PropTypes from 'prop-types';
import { isoDateToHumanReadableDate } from '../../../../../../../../helpers';

function MoreDetailsInfo({
  alert: {
    category,
    event,
    response,
    urgency,
    severity,
    certainty,
    headline,
    description,
    instruction,
    expectedAt,
    expiredAt,
  },
}) {
  return (
    <div>
      <p>
        <b>Headline:</b> {headline}
      </p>
      <p>
        <b>Subject Event of this Alert:</b> {event}
      </p>
      <p>
        <b>Category of the Event:</b> {category}
      </p>
      <p>
        <b>Severity of the Event:</b> {severity}
      </p>
      <p>
        <b>Certainity of the Event:</b> {certainty}
      </p>
      <p>
        <b>Urgency of the Event:</b> {urgency}
      </p>
      <p>
        <b>This Event is expected to begin on:</b>{' '}
        {isoDateToHumanReadableDate(expectedAt)}
      </p>
      <p>
        <b>This Event will expire on:</b>{' '}
        {isoDateToHumanReadableDate(expiredAt)}
      </p>
      <p>
        <b>Description of the Event:</b> {description}
      </p>
      <p>
        <b>Type of action(s) recommended:</b> {response}
      </p>
      <p>
        <b>Instructions:</b> {instruction}
      </p>
    </div>
  );
}

export default MoreDetailsInfo;

MoreDetailsInfo.propTypes = {
  alert: PropTypes.shape({
    headline: PropTypes.string,
    reportedAt: PropTypes.string,
    expectedAt: PropTypes.string,
    expiredAt: PropTypes.string,
    instruction: PropTypes.string,
    source: PropTypes.string,
  }),
};

MoreDetailsInfo.defaultProps = {
  alert: {},
};
