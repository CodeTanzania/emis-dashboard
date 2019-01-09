import React from 'react';
import PropTypes from 'prop-types';

function MoreDetailsArea({ alert }) {
  const { area } = alert || {};
  const { description } = area || {};
  return (
    <div>
      <p>
        <b>Area(s) involved:</b> {description}
      </p>
    </div>
  );
}

export default MoreDetailsArea;

MoreDetailsArea.propTypes = {
  alert: PropTypes.shape({
    headline: PropTypes.string,
    reportedAt: PropTypes.string,
    expectedAt: PropTypes.string,
    expiredAt: PropTypes.string,
    instruction: PropTypes.string,
    source: PropTypes.string,
  }),
};

MoreDetailsArea.defaultProps = {
  alert: {},
};
