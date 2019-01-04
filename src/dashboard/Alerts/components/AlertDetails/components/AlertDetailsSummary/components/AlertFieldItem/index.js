import React from 'react';
import PropTypes from 'prop-types';
import {
  formatAlertFieldType,
  formatAlertFieldTypeValue,
} from '../../../../../../helpers';
import './styles.css';

function AlertFieldItem({ value, property }) {
  return (
    <div className="AlertFieldItem">
      <div>{formatAlertFieldType(property)}:</div>
      <div>{formatAlertFieldTypeValue(property, value)}</div>
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
