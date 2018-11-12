import { Icon, Select, Spin } from 'antd';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import isFunction from 'lodash/isFunction';

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
    onChange: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
    optionLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
      .isRequired,
    optionValue: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
      .isRequired,
  };

  static defaultProps = {
    onFocus: null,
    onBlur: null,
    style: {},
  };

  state = {
    data: [],
    loading: false,
  };

  handleSearch = value => {
    const { onSearch } = this.props;
    onSearch({ q: value }).then(response => {
      this.setState({ data: response.data.data, loading: false });
    });
  };

  handleChange = value => {
    const { onChange } = this.props;
    onChange(value);
  };

  handleOnDropdownVisibleChange = open => {
    const { onSearch } = this.props;
    const { data } = this.state;

    if (open && isEmpty(data)) {
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

  render() {
    const { data, loading } = this.state;
    const {
      optionValue,
      optionLabel,
      placeholder,
      onFocus,
      onBlur,
      style,
    } = this.props;

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
    const getOptionProp = (prop, option) => {
      if (isFunction(prop)) {
        return prop(option);
      }
      return option[prop];
    };

    const options = data.map(option => (
      <Option key={getOptionProp(optionValue, option)}>
        {getOptionProp(optionLabel, option)}
      </Option>
    ));

    return (
      <Select
        showSearch
        onSearch={this.handleSearch}
        onChange={this.handleChange}
        allowClear
        onDropdownVisibleChange={this.handleOnDropdownVisibleChange}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
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
