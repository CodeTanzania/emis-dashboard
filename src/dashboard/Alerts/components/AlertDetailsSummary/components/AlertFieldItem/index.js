import React from 'react';
import PropTypes from 'prop-types';

function AlertFieldItem({ value, property }) {
  console.log('inside alert field itm');
  console.log(value);
  return (
    <div>
      <div>{property}:</div>
      <div>{value}</div>
    </div>
  );
}

export default AlertFieldItem;

AlertFieldItem.propTypes = {
  property: PropTypes.string,
  value: PropTypes.string,
};

AlertFieldItem.defaultProps = {
  property: '',
  value: '',
};
