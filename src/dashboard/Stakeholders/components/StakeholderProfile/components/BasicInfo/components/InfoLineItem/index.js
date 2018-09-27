import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders one line information with key and value separated
 * by colon
 *
 * @param {Object} props - component props
 * @param {string} label - label of basic detail item
 * @param {string} value - value of basic detail item
 * @param {boolean} block - if true, it add top padding to this component
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default function InfoLineItem({ label, value, block }) {
  return (
    <div style={{ paddingTop: block ? '15px' : '0' }}>
      <h5 style={{ display: 'inline', marginRight: '20px' }}>{`${label} :`}</h5>
      <span className="f-15">
        {Array.isArray(value) ? value.join(',') : value}
      </span>
    </div>
  );
}

InfoLineItem.defaultProps = {
  value: 'N/A',
  block: false,
};

InfoLineItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  block: PropTypes.bool,
};
