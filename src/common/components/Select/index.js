import { Select } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

/* local constants */
const { Option } = Select;

/**
 * Select Components which renders provided options
 *
 * @function
 * @name SelectComponent
 *
 * @param {Object} props
 * @param {Object[]} props.options
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default function SelectComponent({
  options,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  style,
}) {
  return (
    <Select
      showSearch
      placeholder={placeholder}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      style={style}
    >
      {options.map(option => (
        <Option value={option.value}>{option.label}</Option>
      ))}
    </Select>
  );
}

/* default component props */
SelectComponent.defaultProps = {
  placeholder: '',
  style: {},
  onBlur: null,
  onFocus: null,
  options: [],
};

/* props validation */
SelectComponent.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any,
    })
  ),
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.string),
};
