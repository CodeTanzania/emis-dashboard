import { Icon, Select, Spin } from 'antd';
import isArray from 'lodash/isArray';
import isEmpty from 'lodash/isEmpty';
import isFunction from 'lodash/isFunction';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

/* local constants */
const { Option } = Select;
const spinIcon = <Icon type="loading" spin />;

/**
 * Searchable select input
 *
 * @class
 * @name SelectSearchBox
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default class SelectSearchBox extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    onSearch: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    style: PropTypes.objectOf(PropTypes.string),
    optionLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
      .isRequired,
    optionValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.func,
    ]).isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.func,
    ]),
    mode: PropTypes.string,
  };

  static defaultProps = {
    onChange: null,
    mode: 'default',
    value: undefined,
    style: {},
  };

  constructor(props) {
    super(props);
    const { value, optionValue } = props;

    if (isArray(props.value)) {
      const defaultValue = map(value, item => item[optionValue]);
      this.state = {
        data: [...props.value],
        loading: false,
        defaultValue,
      };
    } else {
      this.state = {
        data: isEmpty(props.value) ? [] : [props.value],
        loading: false,
        defaultValue: undefined,
      };
    }
  }

  /**
   * Function called when searching in select box
   *
   * @function
   * @name handleSearch
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleSearch = value => {
    const { onSearch } = this.props;
    onSearch({ q: value }).then(response => {
      this.setState({ data: response.data.data, loading: false });
    });
  };

  /**
   * Function called when value of select box changes
   *
   * @function
   * @name handleChange
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleChange = value => {
    const { onChange } = this.props;
    onChange(value);
  };

  /**
   * Function called when the select box is opened
   *
   * @function
   * @name handleOnDropdownVisibleChange
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleOnDropdownVisibleChange = open => {
    const { onSearch } = this.props;
    const { data } = this.state;

    if (open && data.length < 9) {
      this.setState({ loading: true });
      onSearch()
        .then(response => {
          this.setState({ data: [...response.data.data], loading: false });
        })
        .catch(() => {
          // TODO handle error here
          this.setState({ loading: false });
        });
    }
  };

  /**
   * Extract Option property based on provided prop
   *
   * @function
   * @name getOptionProp
   *
   * @param {string | function} prop - The property name or value return from
   *                                   a provided function
   * @param {Object} option - A single data item for select options
   * @returns {String} - Value of the extracted property
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  getOptionProp = (prop, option) => {
    if (isFunction(prop)) {
      return prop(option);
    }
    return option[prop];
  };

  render() {
    const { data, loading, defaultValue } = this.state;
    const { optionValue, optionLabel, placeholder, mode, style } = this.props;

    const options = data.map(option => (
      <Option key={this.getOptionProp(optionValue, option)}>
        {this.getOptionProp(optionLabel, option)}
      </Option>
    ));

    return (
      <Select
        mode={mode}
        showSearch
        onSearch={this.handleSearch}
        onChange={this.handleChange}
        allowClear
        onDropdownVisibleChange={this.handleOnDropdownVisibleChange}
        placeholder={placeholder}
        defaultValue={defaultValue || undefined}
        filterOption={false}
        style={style}
        notFoundContent={
          loading ? (
            <Spin size="small" indicator={spinIcon} />
          ) : (
            'Results Not Found'
          )
        }
      >
        {options}
      </Select>
    );
  }
}
